//import {TimeLineMax} from "gsap";
//import ScrollMagic from "scrollmagic";
//import animation.gsap from 'scrollmagic';

import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

// Intro
let t1 = new TimelineMax({paused:true})

t1.to('.intro__sitetitle', 1, {scale: 1.5}).to('.intro__sitetitle', 1, {scale: 1})
  .to('.intro__subtitle', 1, {scale: 1})
  .to('.intro__section-desc', 1, {opacity: 1})
  .to('.intro__overhead', 1, {opacity: 1})
  .to('.intro__btn', 1, {opacity: 1});


// About
let videoAbout = document.querySelector("#about-video")
let t2 = new TimelineMax()

t2.to('.about__title', 1, {scale: 1.5}).to('.about__title', 1, {scale: 1})


let controller = new ScrollMagic.Controller();

let aboutScene = new ScrollMagic.Scene({
    triggerElement: "#about"
})
.setTween(t2)
.reverse(false)
.on('enter', function() {
    videoAbout.play()
})


controller.addScene([
    aboutScene
]);

window.addEventListener('load', function() {
    t1.play()
})
