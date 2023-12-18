let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "20% 70%",
    end: "50% 50%",
    // markers:true, 
    scrub: 1,
  },
});


tl.to("#center",
  {
    y: "-14vh",
  })
  .to("#right-1",
    {
      y: "-14vh",
    })
  .to("#right-2",
    {
      y: "-14vh",
    })
  .to("#left-1",
    {
      y: "-14vh",
    })
  .to("#left-2",
    {
      y: "-14vh",
    })

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-6",
    start: "50% 50%",
    end: "150% 50%",
    pin: true,
    scrub:2,

  },



});
tl2.to("#text-1",
  {
    bottom: "90vh",
  })
  .to("#text-2",
    {
      opacity: 1,
    }, 's1')
  .to(".box img",
    {
      x:"-113%"
    })
  .to("#text-1", {
    opacity: 0,
  }, 's1')
  .to("#text-2", {
    bottom: "90vh",
  })
  .to("#text-2", {
    opacity: 0,
  })
  .to("#text-3", {
    opacity: 1,
  }, 's2')
  .to(".box img",
    {
      x:"-225%"
    })
  .to("#text-3", {
    bottom: "90vh",
  })
  .to("#text-3", {
    opacity: 0,
  },'s3')
  .to("#text-4", {
    opacity:1,
  },'s3')
  .to(".box img",
    {
      x:"-335%"
    })
  .to("#text-4", {
    bottom:"90vh",
  })
  









































var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});