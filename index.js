// ==========================================
//  Creating tabbed btn animation
// ==========================================

const heroElem = document.querySelector(".section-hero");
const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.image-overlay');

p_btns.addEventListener('click',(e)=>{
    const p_btns_clicked = e.target;
    console.log(p_btns_clicked);

    if(!p_btns_clicked.classList.contains("p-btn")) return;
    p_btn.forEach((curElem)=> curElem.classList.remove("p-btn-active"));

    p_btns_clicked.classList.add("p-btn-active");

    const btn_num = p_btns_clicked.dataset.btnNum;
    
    console.log(btn_num);

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem)=>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=>curElem.classList.remove("p-image-not-active"));
    // p-btn--1
});

// Swiper Code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
      disableOnInteraction:false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  const myJsMedia = (e) =>{
    if(e.matches){
      
     new Swiper(".mySwiper", {
     slidesPerView: 1,
     spaceBetween:3,
     });
    }
    else{
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30, 
      });
    
    }
  };

  const widthSize = window.matchMedia("(max-width:980px)");

 

  myJsMedia(widthSize)

  widthSize.addEventListener("change", myJsMedia);

  // scroll to top button

  
  const footerElem=document.querySelector(".section-footer");

  const scrollElement=document.createElement("div");
  scrollElement.classList.add("scrollTop-style");
  scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

  footerElem.after(scrollElement);

  const scrollTop = () =>{
    heroElem.scrollIntoView({behavior:"smooth"});
  }
  scrollElement.addEventListener("click",scrollTop);

  // responsive sticky navbar code
  const observer = new IntersectionObserver(
    (entries)=>{
    const ent=entries[0];
    // console.log(ent);
    !ent.isIntersecting? document.body.classList.add("sticky"):document.body.classList.remove("sticky");
  },
  {root:null,threshold:0});

  observer.observe(heroElem);


  // responsive navbar code

  const mobilenav=document.querySelector(".mobile-navbar-btn");
  const headerElem = document.querySelector(".header");

  mobilenav.addEventListener('click',()=>{
    headerElem.classList.toggle("active");
  })




  // counter code

  const counter = document.querySelector(".counter-section");
  

  const workObserves=new IntersectionObserver(
    (entries,observer)=>{
      const [entry]=entries;
      if(!entry.isIntersecting) return;
      const counterNum = document.querySelectorAll(".counter-numbers");
  const speed=200;

  counterNum.forEach((curElem)=>{

    const updateNumber = () =>{
      const targetNum = parseInt(curElem.dataset.num);
      // console.log(targetNum);

      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementedNum = Math.trunc(targetNum/speed);
      // console.log(incrementedNum);

      if(initialNum<targetNum){
        curElem.innerText=`${initialNum+incrementedNum}+`;
        setTimeout(updateNumber,10)
      }
    }

    updateNumber();
  });
  observer.unobserve(counter);
    },
  {root:null, threshold:0});

  workObserves.observe(counter);