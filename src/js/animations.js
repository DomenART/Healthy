import {TimeLineMax} from "gsap";
import ScrollMagic from "scrollmagic";
//import animation.gsap from 'scrollmagic';

let t1 = new TimelineMax({paused:true})

t1.to('.intro__sitetitle', 1, {scale: 3})
  .to('.intro__sitetitle', 1, {scale: 1})
  .to('.intro__subtitle', 1, {scale: 1})
  .to('.intro__section-desc', 1, {opacity: 1})
  .to('.intro__overhead', 1, {opacity: 1})
  .to('.intro__btn', 1, {opacity: 1});
/*
let t2 = new TimelineMax({paused:true});

t2.to('.about__title', 1, {scale: 3})
  .to('.about__title', 1, {scale: 1})
*/

let controller = new ScrollMagic.Controller();


let aboutScene = new ScrollMagic.Scene({
    triggerElement: "#about"
})
                //.setTween(".about__title", 0.5, {scale: 3})

controller.addScene([
    aboutScene
]);

window.addEventListener('load', function() {
    t1.play()
})
