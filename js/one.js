document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (e) => {
    // animate here when open the menu
    
      gsap.to(".hamburger", {
        opacity:0,
        duration: 3
      });

      gsap.to ("aside", {
        x: 0,
        duration: 1
      });

      gsap.to("li", {
        opacity:1,
        stagger:0.5,
       duration:1
   });

   gsap.to(".close", {
    x: 300,
    y: 0,
    duration: 1,
    ease: "power2"
  });
 
})

  close.addEventListener('click', () => {
    // animate here when close the menu
    
    gsap.to("aside", {
      x: -500,
      duration: 1
    });

    gsap.to("li", {
      opacity: 0,
      duration: 0
    });

    gsap.to(".hamburger", { 
      opacity: 1,
      duration: 3,
      ease: "elastic" 
    });

    gsap.to(".close", {
      x: -20,
      y: -220,
      duration: 2,
      ease: "power2"
    });
  });
})