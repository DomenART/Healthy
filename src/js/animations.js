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
  .fromTo('.home-layout__cup img', 0.5, {scale: 0}, {scale: 1})
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
   .fromTo(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1.1}, '-=0.5').to(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.25, {scale: 1})
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
    triggerElement: ".guidelines__book"
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

t15.staggerFromTo('.adaptability__devices > div', 0.5, {opacity: 0, x: -300}, {opacity: 1, x: 0, ease: Power2.easeOut}, 0.25)
   .fromTo('.adaptability__text', 0.5, {opacity: 0, y: 200}, {opacity: 1, y: 0});

const layoutDescScene = new ScrollMagic.Scene({
    triggerElement: ".adaptability__devices"
})
.setTween(t15)
.reverse(false)

//blueberries
const t16 = new TimelineMax()
t16.to('.adaptability__blueberry-1', 0.5, {yPercent: 1440})
   .to('.adaptability__blueberry-2', 0.5, {yPercent: 1400}, '-=0.5')
   .fromTo('.adaptability__blueberry-shadow-1', 0.5, {opacity: 0.1}, {opacity: 1, yPercent: 540}, '-=0.5')
   .fromTo('.adaptability__blueberry-shadow-2', 0.5, {opacity: 0.1}, {opacity: 1, yPercent: 500}, '-=0.5')
   .to('.adaptability__choco-1', 0.5, {yPercent: 4750}, '-=0.45')
   .to('.adaptability__choco-2', 0.5, {yPercent:4080}, '-=0.45')
   .to('.adaptability__choco-3', 0.5, {yPercent: 7400}, '-=0.45')
   .fromTo('.adaptability__choco-shadow-1', 0.5, {opacity: 0.1}, {opacity: 1, yPercent: 1520},'-=0.45')
   .fromTo('.adaptability__choco-shadow-2', 0.5, {opacity: 0.1}, {opacity: 1, yPercent:5550}, '-=0.45')
   .fromTo('.adaptability__choco-shadow-3', 0.5, {opacity: 0.1}, {opacity: 1, yPercent: 2100}, '-=0.45');
   const chocoScene = new ScrollMagic.Scene({
       triggerElement: ".adaptability__layout-3",
       duration: '100%'
   })
   .setTween(t16)


//viburnum
const t17 = new TimelineMax()
t17.to('.adaptability__viburnum-1', 0.05, {opacity: 1}).to('.adaptability__viburnum-1', 3, {yPercent: 1650})
   .to('.adaptability__viburnum-2', 3, {xPercent: -140, yPercent: 3650}, '-=2.5')
   .to('.adaptability__viburnum-3', 2, {xPercent: -40, yPercent: 2380}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-1', 0.5, {opacity: 0.01}, {opacity: 0.3, yPercent: 300}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-2', 0.5, {opacity: 0.03},{opacity: 1, xPercent: -140, yPercent: 1600}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-3', 0.5, {opacity: 0.07},{pacity: 1, xPercent: -40, yPercent: 1650}, '-=2.5');

const viburnumScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-10',
   duration: '100%'
})
.setTween(t17)

//condiment
const t18 = new TimelineMax()
t18.to('.adaptability__condiment-1', 3, {yPercent: 9090})
   .fromTo('.adaptability__condiment-shadow-1', 1, {opacity: 0}, {opacity: 0.57, yPercent: 610}, '-=1')
   .to('.adaptability__condiment-2', 1, {yPercent: 9160}, '-=2.5')
   .fromTo('.adaptability__condiment-shadow-2', 1, {opacity: 0}, {opacity: 0.57, yPercent: 350}, '-=1')
   .to('.adaptability__condiment-3', 1, {yPercent: 10300}, '-=2')
   .fromTo('.adaptability__condiment-shadow-3', 1, {opacity: 0}, {opacity: 0.57, yPercent: 840}, '-=1')
   .to('.adaptability__condiment-4', 1, {yPercent: 10100}, '-=0.8')
   .fromTo('.adaptability__condiment-shadow-4', 1, {opacity: 0}, {opacity: 0.57, yPercent: 1370}, '-=1')
   .to('.adaptability__condiment-5', 1, {yPercent: 9500}, '-=1.4')
   .fromTo('.adaptability__condiment-shadow-5', 1, {opacity: 0}, {opacity: 0.57, yPercent: 650}, '-=1')
   .to('.adaptability__condiment-6', 1, {yPercent: 12500}, '-=2')
   .fromTo('.adaptability__condiment-shadow-6', 1, {opacity: 0}, {opacity: 0.57, yPercent: 1650}, '-=1')
   .to('.adaptability__condiment-7', 1, {yPercent: 10900}, '-=1.3')
   .fromTo('.adaptability__condiment-shadow-7', 1, {opacity: 0}, {opacity: 0.57, yPercent: 480}, '-=1')
   .to('.adaptability__condiment-8', 1, {yPercent: 10650}, '-=2')
   .fromTo('.adaptability__condiment-shadow-8', 1, {opacity: 0}, {opacity: 0.57, yPercent: 260}, '-=1')
   .to('.adaptability__condiment-9', 1, {yPercent: 13500}, '-=1.5')
   .fromTo('.adaptability__condiment-shadow-9', 1, {opacity: 0}, {opacity: 0.57, yPercent: 2800}, '-=1')
   .to('.adaptability__condiment-10', 1, {yPercent: 14000}, '-=1.2')
   .fromTo('.adaptability__condiment-shadow-10', 1, {opacity: 0}, {opacity: 0.57, yPercent: 1900}, '-=1')
   .to('.adaptability__condiment-11', 1, {yPercent: 12000}, '-=1.8')
   .fromTo('.adaptability__condiment-shadow-11', 1, {opacity: 0}, {opacity: 0.57, yPercent: 350}, '-=1')
   .to('.adaptability__condiment-12', 1, {yPercent: 11900}, '-=2')
   .fromTo('.adaptability__condiment-shadow-12', 1, {opacity: 0}, {opacity: 0.57, yPercent: 1380}, '-=1');

const condimentScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-11',
   offset: '300',
   duration: '100%'
})
.setTween(t18)

//fruit
const t19 = new TimelineMax()
t19.to('.adaptability__fruit', 3, {x: -200, y: 200})
   .to('.adaptability__fruit-shadow', 3, {opacity: 0.35, x: -200, y: 200}, '-=3');

const fruitScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-12',
   duration: '100%'
})
.setTween(t19)


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
    guidelinesElementsScene,
    layoutDescScene,
    chocoScene,
    viburnumScene,
    condimentScene,
    fruitScene
]);

window.addEventListener('load', function() {
    t1.play()
})


t1.pause(true)
t2.pause(true)
t3.pause(true)
t4.pause(true)
t5.pause(true)
t6.pause(true)
t7.pause(true)
t8.pause(true)
t9.pause(true)
t10.pause(true)
t11.pause(true)
t12.pause(true)
t13.pause(true)
t14.pause(true)
t15.pause(true)
t16.pause(true)
t17.pause(true)
