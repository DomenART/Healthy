import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';

// ANIMATIONS

let sceneArray = []
let tweensArray = []

// intro section
let t1 = new TimelineMax({paused:true})

t1.to('.intro__sitetitle', 0.5, {scale: 1.5}).to('.intro__sitetitle', 0.5, {scale: 1})
  .to('.intro__subtitle', 0.5, {scale: 1})
  .to('.intro__section-desc', 0.5, {opacity: 1})
  .to('.intro__overhead', 0.5, {opacity: 1})
  .to('.intro__btn', 0.5, {opacity: 1});

window.addEventListener('load', function() {
    t1.play()
})

tweensArray.push(t1)

// about section
let videoAbout = document.querySelector("#about-video")
let t2 = new TimelineMax()

t2.to('.about__title', 0.5, {scale: 1.5}).to('.about__title', 0.5, {scale: 1})

let aboutScene = new ScrollMagic.Scene({
    triggerElement: ".about",
    reverse: false
})
.setTween(t2)
.on('enter', function() {
    videoAbout.play()
})

tweensArray.push(t2)
sceneArray.push(aboutScene)

//home-tile block
let t3 = new TimelineMax()

t3.staggerFrom('.home-tile img', 0.5, {opacity: 0, x: 200, y: 200}, 0.25)
  .fromTo('.home-tile__title', 0.5, {scale: 0}, {scale: 1})
  .fromTo('.home-tile__text', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-tile__thread', 0.5, {opacity: 0}, {opacity: 1});

let homeTileScene = new ScrollMagic.Scene({
    triggerElement: ".home-tile",
    reverse: false
})
.setTween(t3)

tweensArray.push(t3)
sceneArray.push(homeTileScene)

//home-news and home-topic lines
let t4 = new TimelineMax()

t4.fromTo(['.home-layout__topic','.home-layout__news'], 0.5, {scale: 0}, {scale: 1})

let homeNewsTopicScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout",
    reverse: false
})
.setTween(t4)

tweensArray.push(t4)
sceneArray.push(homeNewsTopicScene)

//home-articles line
let t5 = new TimelineMax()

t5.fromTo('.home-layout__articles', 0.5, {scale: 0}, {scale: 1.5}).to('.home-layout__articles', 0.5, {scale: 1});

let homeArticlesScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__articles",
    offset: '-500',
    reverse: false
})
.setTween(t5)

tweensArray.push(t5)
sceneArray.push(homeArticlesScene)

//home-articles line
let t6 = new TimelineMax()

t6.fromTo('.home-layout__news-4', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-2', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-5', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-1', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-3', 0.5, {opacity: 0}, {opacity: 1})
  .fromTo('.home-layout__news-6', 0.5, {opacity: 0}, {opacity: 1});

let homeNewsScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__news-1",
    reverse: false
})
.setTween(t6)

tweensArray.push(t6)
sceneArray.push(homeNewsScene)

//home-questionnaire and home-videos lines
let t7 = new TimelineMax()

t7.fromTo('.home-layout__questionnaire-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__questionnaire-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__questionnaire-3', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__video-3', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0});

let homeQuestionnaireScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__questionnaire-title",
    reverse: false
})
.setTween(t7)

tweensArray.push(t7)
sceneArray.push(homeQuestionnaireScene)

//home-basics and parallax lines
let t8 = new TimelineMax()

t8.fromTo('.home-layout__basics-point-1', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-1', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-point-2', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-2', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-point-3', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-3', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__basics-text-4', 0.5, {opacity: 0, x: 200}, {opacity: 1, x: 0})
  .fromTo('.home-layout__cup img', 0.5, {scale: 0}, {scale: 1})
  .staggerFromTo('.home-layout__parallax-scene .js-fruit', 0.5, {opacity: 0, scale: 2.5}, {opacity: 1, scale: 1}, 0.1);

let homeBasicsScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__basics-title",
    reverse: false
})
.setTween(t8)

tweensArray.push(t8)
sceneArray.push(homeBasicsScene)

//read-more line
let t9 = TweenMax.fromTo('.home-layout__reference', 0.5, {opacity: 0, y: -200}, {opacity: 1, y: 0});

let homeReferenceScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__readmore-title",
    reverse: false
})
.offset(100)
.setTween(t9)

tweensArray.push(t9)
sceneArray.push(homeReferenceScene)

//read-more lines
let t10 = new TimelineMax()

t10.fromTo('.home-layout__readmore-3', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-5', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-4', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-7', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-9', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-1', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-6', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-2', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'})
   .fromTo('.home-layout__readmore-8', 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center'});

let homeReadMoreScene = new ScrollMagic.Scene({
    triggerElement: ".home-layout__readmore-title",
    offset: '50',
    reverse: false
})
.setTween(t10)

tweensArray.push(t10)
sceneArray.push(homeReadMoreScene)

//laptop section
let t11 = new TimelineMax()

t11.fromTo('.dynamic__laptop', 1, {xPercent: 200, yPercent: 200},  {xPercent: 0, yPercent: 0, ease: Power3.easeOut})
   .fromTo('.dynamic__article:nth-of-type(1)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__article:nth-of-type(3)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__article:nth-of-type(2)', 0.5, {scale: 0}, {scale: 1})
   .fromTo('.dynamic__mark-title', 0.5, {opacity: 0, scale: 1.5}, {opacity: 1, scale: 1})
   .fromTo('.dynamic__mark-text', 0.5, {opacity: 0}, {opacity: 1})
   .staggerFromTo('.dynamic__mark-thread', 0.5, {opacity: 0}, {opacity: 1}, 0.25);

let laptopScene = new ScrollMagic.Scene({
    triggerElement: ".dynamic",
    reverse: false
})
.setTween(t11)

tweensArray.push(t11)
sceneArray.push(laptopScene)

//fonts section
let t12 = new TimelineMax()

t12.fromTo(['.fonts__comfortaa-name','.fonts__lato-name'], 1, {opacity: 0, y: 200}, {opacity: 1, y: 0})
   .fromTo(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1.1}, '-=0.5').to(['.fonts__comfortaa-bg','.fonts__lato-bg'], 0.25, {scale: 1})
   .staggerFromTo('.fonts__headings-row', 1, {opacity: 0}, {opacity: 1}, 0.5);

let fontsScene = new ScrollMagic.Scene({
    triggerElement: ".fonts",
    reverse: false
})
.setTween(t12)

tweensArray.push(t12)
sceneArray.push(fontsScene)

//guideline-book line
let t13 = new TimelineMax()

t13.fromTo('.guidelines__book-image', 0.5, {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
   .staggerFromTo('.guidelines__text span', 0.5, {opacity: 0, y: -500}, {opacity: 1, y: 0, ease: Power1.easeIn}, 0.25)
   .fromTo('.guidelines__thread', 0.5, {opacity: 0}, {opacity: 1});

let guidelinesBookScene = new ScrollMagic.Scene({
    triggerElement: ".guidelines__book",
    reverse: false
})
.setTween(t13)

tweensArray.push(t13)
sceneArray.push(guidelinesBookScene)

//guideline-elements line
let t14 = new TimelineMax()

t14.fromTo('.guidelines__calendar-title', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__calendar-image', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-title', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-image-1', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0})
   .fromTo('.guidelines__buttons-image-2', 0.5, {opacity: 0, x: -200}, {opacity: 1, x: 0});

let guidelinesElementsScene = new ScrollMagic.Scene({
    triggerElement: ".guidelines__examples",
    reverse: false
})
.setTween(t14)

tweensArray.push(t14)
sceneArray.push(guidelinesElementsScene)

//layout-desc line
let t15 = new TimelineMax()

t15.staggerFromTo('.adaptability__devices > div', 0.5, {opacity: 0, x: -300}, {opacity: 1, x: 0, ease: Power2.easeOut}, 0.25)
   .fromTo('.adaptability__text', 0.5, {opacity: 0, y: 200}, {opacity: 1, y: 0});

let layoutDescScene = new ScrollMagic.Scene({
    triggerElement: ".adaptability__devices",
    reverse: false
})
.setTween(t15)

tweensArray.push(t15)
sceneArray.push(layoutDescScene)

//blueberries
let t16 = new TimelineMax()
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

let chocoScene = new ScrollMagic.Scene({
   triggerElement: ".adaptability__layout-3",
   duration: '100%'
})
.setTween(t16)

tweensArray.push(t16)
sceneArray.push(chocoScene)

//viburnum
let t17 = new TimelineMax()
t17.to('.adaptability__viburnum-1', 0.05, {opacity: 1}).to('.adaptability__viburnum-1', 3, {yPercent: 1650})
   .to('.adaptability__viburnum-2', 3, {xPercent: -140, yPercent: 3650}, '-=2.5')
   .to('.adaptability__viburnum-3', 2, {xPercent: -40, yPercent: 2380}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-1', 0.5, {opacity: 0.01}, {opacity: 0.3, yPercent: 300}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-2', 0.5, {opacity: 0.03},{opacity: 1, xPercent: -140, yPercent: 1600}, '-=2.5')
   .fromTo('.adaptability__viburnum-shadow-3', 0.5, {opacity: 0.07},{pacity: 1, xPercent: -40, yPercent: 1650}, '-=2.5');

let viburnumScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-10',
   duration: '100%'
})
.setTween(t17)

tweensArray.push(t17)
sceneArray.push(viburnumScene)

//condiment
let t18 = new TimelineMax()
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

let condimentScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-11',
   offset: '300',
   duration: '100%'
})
.setTween(t18)

tweensArray.push(t18)
sceneArray.push(condimentScene)

//fruit
let t19 = new TimelineMax()
t19.to('.adaptability__fruit', 3, {x: -200, y: 200})
   .to('.adaptability__fruit-shadow', 3, {opacity: 0.35, x: -200, y: 200}, '-=3');

let fruitScene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-12',
   duration: '100%'
})
.setTween(t19)

tweensArray.push(t19)
sceneArray.push(fruitScene)

//layouts
let t20 = TweenMax.fromTo('.adaptability__layout-1', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout1Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-1',
   reverse: false
})
.setTween(t20)

tweensArray.push(t20)
sceneArray.push(layout1Scene)

let t21 = TweenMax.fromTo('.adaptability__layout-2', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout2Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-2',
   reverse: false
})
.setTween(t21)

tweensArray.push(t21)
sceneArray.push(layout2Scene)

let  t22 = TweenMax.fromTo('.adaptability__layout-3', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout3Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-3',
   reverse: false
})
.setTween(t22)

tweensArray.push(t22)
sceneArray.push(layout3Scene)

let  t23 = TweenMax.fromTo('.adaptability__layout-4', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout4Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-4',
   reverse: false
})
.setTween(t23)

tweensArray.push(t23)
sceneArray.push(layout4Scene)

let  t24 = TweenMax.fromTo('.adaptability__layout-5', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout5Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-5',
   reverse: false
})
.setTween(t24)

tweensArray.push(t24)
sceneArray.push(layout5Scene)

let  t25 = TweenMax.fromTo('.adaptability__layout-6', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout6Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-6',
   reverse: false
})
.setTween(t25)

tweensArray.push(t25)
sceneArray.push(layout6Scene)

let  t26 = TweenMax.fromTo('.adaptability__layout-7', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout7Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-7',
   reverse: false
})
.setTween(t26)

tweensArray.push(t26)
sceneArray.push(layout7Scene)

let  t27 = TweenMax.fromTo('.adaptability__layout-8', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout8Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-8',
   reverse: false
})
.setTween(t27)

tweensArray.push(t27)
sceneArray.push(layout8Scene)

let  t28 = TweenMax.fromTo('.adaptability__layout-9', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout9Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-9',
   reverse: false
})
.setTween(t28)

tweensArray.push(t28)
sceneArray.push(layout9Scene)

let  t29 = TweenMax.fromTo('.adaptability__layout-10', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout10Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-10',
   reverse: false
})
.setTween(t29)

tweensArray.push(t29)
sceneArray.push(layout10Scene)

let  t30 = TweenMax.fromTo('.adaptability__layout-11', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout11Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-11',
   reverse: false
})
.setTween(t30)

tweensArray.push(t30)
sceneArray.push(layout11Scene)

let  t31 = TweenMax.fromTo('.adaptability__layout-12', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout12Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-12',
   reverse: false
})
.setTween(t31)

tweensArray.push(t31)
sceneArray.push(layout12Scene)

let  t32 = TweenMax.fromTo('.adaptability__layout-13', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout13Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-13',
   reverse: false
})
.setTween(t32)

tweensArray.push(t32)
sceneArray.push(layout13Scene)

let  t33 = TweenMax.fromTo('.adaptability__layout-14', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout14Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-14',
   reverse: false
})
.setTween(t33)

tweensArray.push(t33)
sceneArray.push(layout14Scene)

let  t34 = TweenMax.fromTo('.adaptability__layout-15', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout15Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-15',
   reverse: false
})
.setTween(t34)

tweensArray.push(t34)
sceneArray.push(layout15Scene)

let  t35 = TweenMax.fromTo('.adaptability__layout-16', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout16Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-16',
   reverse: false
})
.setTween(t35)

tweensArray.push(t35)
sceneArray.push(layout16Scene)

let t36 = TweenMax.fromTo('.adaptability__layout-17', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout17Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-17',
   reverse: false
})
.setTween(t36)

tweensArray.push(t36)
sceneArray.push(layout17Scene)

let  t37 = TweenMax.fromTo('.adaptability__layout-18', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout18Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-18',
   reverse: false
})
.setTween(t37)

tweensArray.push(t37)
sceneArray.push(layout18Scene)

let  t38 = TweenMax.fromTo('.adaptability__layout-19', 0.5, {opacity: 0, x: 200, y: 200}, {opacity: 1, x: 0, y: 0, ease: Expo.easeIn})
let layout19Scene = new ScrollMagic.Scene({
   triggerElement: '.adaptability__layout-19',
   reverse: false
})
.setTween(t38)

tweensArray.push(t38)
sceneArray.push(layout19Scene)

//ending
let t39 = new TimelineMax()
t39.to('.ending__iphone', 5, {x: 50, y: 270})
   .to('.ending__macbook', 3, {x: 20, y: -490})
   .to('.ending__fruit-1', 3, {y: 50}, '-=1.5')
   .to('.ending__fruit-2', 3, {x: 20, y: 270}, '-=1.5')
   .to('.ending__fruit-3', 3, {x: 20, y: -50}, '-=1.7')
   .to('.ending__fruit-4', 3, {x: 20, y: -80}, '-=1.2')
   .to('.ending__fruit-5', 3, {x: 25, y: -45}, '-=0.5')
   .to('.ending__fruit-6', 3, {x: 20, y: -50}, '-=0.5')
   .to('.ending__fruit-7', 3, {x: 70, y: -130}, '-=0.5')
   .to('.ending__fruit-8', 3, {x: 75, y: -320})
   .to('.ending__fruit-9', 3, {x: 70, y: -260});

let endingScene = new ScrollMagic.Scene({
   triggerElement: '.ending',
   duration: '150%',
   offset: '300',
   reverse: true
})
.setTween(t39)

tweensArray.push(t39)
sceneArray.push(endingScene)

let t40 = new TimelineMax()
t40.fromTo('.ending__substrate-left', 0.5, {xPercent: -100}, {xPercent: 0, ease: Power4.easeInOut})
   .fromTo('.ending__substrate-right', 0.5, {xPercent: 100}, {xPercent: 0, ease: Power4.easeInOut}, '-=0.5')
   .fromTo('.ending__gratitude-first', 0.5, {opacity: 0, scale: 2}, {opacity: 1, scale: 1})
   .fromTo('.ending__gratitude-second-image', 1, {opacity: 0, rotationX: '90%'}, {opacity: 1, transfornOrigin: '50% 0%', rotationX: 0})
   .fromTo('.ending__gratitude-decor-left', 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, transformOrigin: '100% 50%'})
   .fromTo('.ending__gratitude-decor-right', 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, transformOrigin: '0% 50%'}, '-=1')
   .fromTo('.ending__btn', 0.5, {opacity: 0}, {opacity: 1});

let endingContentScene = new ScrollMagic.Scene({
   triggerElement: '.ending__macbook',
   reverse: false
})
.setTween(t40)

tweensArray.push(t40)
sceneArray.push(endingContentScene)

//scene controller
let controller = new ScrollMagic.Controller();

controller.addScene(sceneArray);

//RESET ANIMATIONS
var resetBtn = document.querySelector('.ending__btn-icon');

resetBtn.addEventListener('click', function() {
    window.scrollTo(0,0)
    resetScene()
    resetTweens()
    setTimeout(startScene, 500)
})

let resetScene = function() {
    sceneArray.forEach(function(element) {
        element.reverse(true)
    })
}

let startScene = function() {
    sceneArray.forEach(function(element) {
        element.reverse(false)
    })
}

let resetTweens = function() {
    t1.time(0)
}
