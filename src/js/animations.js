import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

// intro section
const t1 = new TimelineMax({paused:true})

t1.to('.intro__sitetitle', 0.5, {scale: 1.5}).to('.intro__sitetitle', 0.5, {scale: 1})
  .to('.intro__subtitle', 0.5, {scale: 1})
  .to('.intro__section-desc', 0.5, {opacity: 1})
  .to('.intro__overhead', 0.5, {opacity: 1})
  .to('.intro__btn', 0.5, {opacity: 1});

// about section
let videoAbout = document.querySelector("#about-video")
const t2 = new TimelineMax()

t2.to('.about__title', 0.5, {scale: 1.5}).to('.about__title', 0.5, {scale: 1})

const aboutScene = new ScrollMagic.Scene({
    triggerElement: ".about"
})
.setTween(t2)
.reverse(false)
.on('enter', function() {
    videoAbout.play()
})

//home-tile block
const t3 = new TimelineMax()

t3.staggerFrom('.home-tile img', 0.5, {opacity: 0, x: 200, y: 200}, 0.25)
  .fromTo('.home-tile__title', 0.5, {scale: 0}, {scale: 1})
  .fromTo('.home-tile__text', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-tile__thread', 0.5, {opacity: 0}, {opacity: 1});

const homeTileScene = new ScrollMagic.Scene({
    triggerElement: ".home-tile"
})
.setTween(t3)
.reverse(false)

//home-news and home-topic lines
const t4 = new TimelineMax()

t4.fromTo(['.home-layout__topic','.home-layout__news'], 0.5, {scale: 0}, {scale: 1})

const homeNewsTopicScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout"
})
.setTween(t4)
.reverse(false)

//home-articles line
const t5 = new TimelineMax()

t5.fromTo('.home-layout__articles', 0.5, {scale: 0}, {scale: 1.5}).to('.home-layout__articles', 0.5, {scale: 1});

const homeArticlesScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__articles"
})
.offset(-500)
.setTween(t5)
.reverse(false)

//home-articles line
const t6 = new TimelineMax()

t6.fromTo('.home-layout__news-4', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-2', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-5', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-1', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-3', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-6', 0.5, {opacity: 0}, {opacity: 1});

const homeNewsScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__news-1"
})
.setTween(t6)
.reverse(false)

//home-questionnaire and home-videos lines
const t7 = new TimelineMax()

t7.fromTo('.home-layout__questionnaire-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__questionnaire-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__questionnaire-3', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-3', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0});

const homeQuestionnaireScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__questionnaire-title"
})
.setTween(t7)
.reverse(false)

//home-basics and parallax lines
const t8 = new TimelineMax()

t8.fromTo('.home-layout__basics-point-1', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-1', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-point-2', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-2', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-point-3', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-3', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-4', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__cup', 0.5, {scale: 0}, {scale: 1})
  .staggerFromTo('.home-layout__parallax-scene .js-fruit', 0.5, {opacity: 0, scale: 2.5}, {opacity: 1, scale: 1}, 0.1);

const homeBasicsScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__basics-title"
})
.setTween(t8)
.reverse(false)

//read-more line
const t9 = TweenMax.fromTo('.home-layout__reference', 0.5, {opacity: 0, y: -200}, {opacity: 1, y: 0});

const homeReferenceScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__readmore-title"
})
.offset(100)
.setTween(t9)
.reverse(false)

//read-more lines
const t10 = new TimelineMax()

t10.fromTo('.home-layout__readmore-3', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-5', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-4', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-7', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-9', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-1', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-6', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-2', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-8', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'});

const homeReadMoreScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__readmore-title",
})
.offset(50)
.setTween(t10)
.reverse(false)

//laptop section
const t11 = new TimelineMax()

t11.fromTo('.dynamic__laptop', 1, {xPercent: 200, yPercent: 200},  {xPercent: 0, yPercent: 0, ease: Power3.easeOut})
   .fromTo('.dynamic__article:nth-of-type(1)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__article:nth-of-type(3)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__article:nth-of-type(2)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__mark-title', 0.5, {opacity: 0, scale: 1.5}, {opacity: 1, scale: 1})
   .fromTo('.dynamic__mark-text', 0.5, {opacity: 0}, {opacity: 1})
   .staggerFromTo('.dynamic__mark-thread', 0.5, {opacity: 0}, {opacity: 1}, 0.25);

const laptopScene = new ScrollMagic.Scene({
    triggerElement: ".dynamic"
})
.setTween(t11)
.reverse(false)

//fonts section
const t12 = new TimelineMax()

t12.fromTo(['.fonts__comfortaa-name','.fonts__lato-name'], 1, {opacity: 0, y: 200}, {opacity: 1, y: 0})
   .from(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.5, {opacity: 0, scale: 0}, '-=0.5')
   .to(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.5, {opacity: 1, scale: 1.1})
   .to(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.1, {scale: 1})
   .staggerFromTo('.fonts__headings-row', 1, {opacity: 0}, {opacity: 1}, 0.5);

const fontsScene = new ScrollMagic.Scene({
    triggerElement: ".fonts"
})
.setTween(t12)
.reverse(false)

//guideline-book line
const t13 = new TimelineMax()

t13.fromTo('.guidelines__book-image', 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
   .staggerFromTo('.guidelines__text span', 0.5, {opacity: 0, y: -500}, {opacity: 1, y: 0, ease: Power1.easeIn}, 0.25)
   .fromTo('.guidelines__thread', 0.5, {opacity: 0}, {opacity: 1});

const guidelinesBookScene = new ScrollMagic.Scene({
    triggerElement: ".guidelines"
})
.setTween(t13)
.reverse(false)

//guideline-elements line
const t14 = new TimelineMax()

t14.fromTo('.guidelines__calendar-title', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__calendar-image', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-title', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-image-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-image-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0});

const guidelinesElementsScene = new ScrollMagic.Scene({
    triggerElement: ".guidelines__examples"
})
.setTween(t14)
.reverse(false)

//layout-desc line
const t15 = new TimelineMax()

t14.staggerFromTo('.adaptability__devices > div', 0.5, {opacity: 0, x: -300}, {opacity: 1, x: 0, ease: Power2.easeOut}, 0.25)
   .fromTo('.adaptability__text', 0.5, {opacity: 0, y: 200}, {opacity: 1, y: 0});

const layoutDescScene = new ScrollMagic.Scene({
    triggerElement: ".adaptability__devices"
})
.setTween(t15)
.reverse(false)


//scene controller
const controller = new ScrollMagic.Controller();

controller.addScene([
    aboutScene,
    homeTileScene,
    homeNewsTopicScene,
    homeArticlesScene,
    homeNewsScene,
    homeQuestionnaireScene,
    homeBasicsScene,
    homeReadMoreScene,
    homeReferenceScene,
    laptopScene,
    fontsScene,
    guidelinesBookScene,
    guidelinesElementsScene
]);

window.addEventListener('load', function() {
    t1.play()
})
