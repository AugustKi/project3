const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active");
  });
});




const btns = document.querySelectorAll('.buttons button');
const imgs = document.querySelectorAll('.image img');

for(let i = 1; i < btns.length; i++) {
    btns[i].addEventListener('click', filterImg);
}

function setActiveBtn(e) {
    btns.forEach(btn => {
        btn.classList.remove('btn-clicked');
    });

    e.target.classList.add('btn-clicked');
}

function filterImg(e) {
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');

        const imgType = parseInt(img.dataset.img);
        const btnType = parseInt(e.target.dataset.btn);

        if(imgType !== btnType){
            img.classList.remove('img-expand');
            img.classList.add('img-shrink');
        }
    });
}

btns[0].addEventListener('click', (e) =>{
    setActiveBtn(e);
    imgs.forEach(img =>{
        img.classList.remove('img-shrink');
        img.classList.add('img-expand');
    });
});


const testimonials = [
  {
    name: "Кира Иванова",
    testimonial:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ullam sed consectetur culpa sapiente animi, esse minima aliquid explicabo mollitia, impedit sint asperiores porro in similique odit cupiditate suscipit enim totam accusantium, inventore dicta? Excepturi, dolorum! Soluta consequatur eum aliquam perspiciatis iure itaque nesciunt voluptas quasi. Sequi cupiditate eaque nulla? ",
  },
  {
    name: "Иван Смирнов",
    testimonial:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, possimus culpa esse, soluta dignissimos natus dolor deleniti a molestiae repudiandae adipisci, similique laborum optio voluptates distinctio enim quisquam. Fugiat quas consequuntur culpa dolorum at corporis omnis, quod alias. Deserunt laboriosam non fugiat pariatur rem! ",
  },
  {
    name: "Елена Гагарина",
    testimonial:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, error aliquid? Sequi, voluptate expedita tenetur vitae maxime animi labore atque consequuntur, voluptatem, ab fugiat necessitatibus minus accusantium esse natus error. Ipsum asperiores eveniet, exercitationem commodi facilis cum, quod praesentium debitis magni consequatur nobis, placeat dicta cumque nihil culpa quibusdam ipsam itaque! ",
  },
];

let t = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  t = (j + t + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  t = (j + t - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <h3>${testimonials[t].name}</h3>
    <p>${testimonials[t].testimonial}</p>
  `;
};
window.onload = displayTestimonial;


function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}


const accordion = document.getElementsByClassName('contentBx');

for (u = 0; u < accordion.length; u++){
  accordion[u].addEventListener('click', function(){
    this.classList.toggle('active');
  });
}


