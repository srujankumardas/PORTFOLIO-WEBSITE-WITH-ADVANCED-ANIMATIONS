//================= Navigation Menu===========//
  const handburgerMenu = document.querySelector(".handburger-menu");
  const navList = document.querySelector('.nav-list');

  handburgerMenu .addEventListener('click', ()=>{
    navLIst.classList.toggle('show');
  })
//================= Navigation Menu===========//
//----------- GSAP animation -----------------//

// the hero section//

const hero_tl = gsap.timeline({
  scrollTrigger : {
    trigger: '.hero-section',
    start: "top top",
    end: '+=400px top', // expand the scroll icon
    scrub: 2,
    pin : true
  }
});

//iterate title span tag
document.querySelectorAll('.hero-section .hero-content .title span').forEach((span, index) => {
  hero_tl.to(span, {
    y: -1500,
    duration: 4,
    ease: "power1.out"
  }, index * 0.1);

  gsap.to('.hero-section' , {
   y: -1200, duration: 4 , ease:'power1.out',
    scrollTrigger : {
    trigger: '.hero-section',
    start: "top top",
    end: '+=800px top', // expand the scroll icon
    scrub: 2,
    pin : true
  } 
  })
});

//**------hero animation -----*/

//**-----------lenis scrolling smooth algo  --------*/
const lenis= new Lenis({
  duration:3
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
//**------lenis scrolling smooth algo  --------------*/

//**Feature work section */
let horizontalSection = document.querySelector('.horizontal');

gsap.to(horizontalSection,{
  x:()=> horizontalSection.scrollWidth * -1,
  xPercent: 100,
    scrollTrigger : {
    trigger: horizontalSection,
    start: "center center",
    end: '+=2000px', // expand the scroll icon
    scrub: 2,
    pin : "#horizontal-scroll"
  } 
})
// **-----------/feature work section animation --------*/

//**about me */
const textElements = gsap.utils.toArray('.text');
textElements.forEach(text =>{
  gsap.to(text,{
    backgroundSize:"100%",
    ease:'none',
    scrollTrigger:{
      trigger: text,
      start: "center 80%",
      end:"center 30%",
      scrub: true
    }
  });
});

const parallax = document.querySelector('.parallax');
gsap.to(parallax,{
  backgroundPosition :'0px 100%',
  ease:'none',
  duration:4,
  scrollTrigger:{
    trigger: parallax,
    start:'-60% top',
    end:'bottom bottom',
    scrub: true,
  }
})
