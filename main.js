// Data 
const data = [
    {
        id: 1,
        image: "./images/person-1.png",
        name: "Susan Smith",
        designasion: "WEB DEVELOPER",
        review: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },

    {
        id: 2,
        image: "./images/person-2.png",
        name: "Anna Johnson",
        designasion: "WEB DESIGNER",
        review: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },

    {
        id: 3,
        image: "./images/person-3.png",
        name: "Peter Jones",
        designasion: "INTERN",
        review: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },

    {
        id: 4,
        image: "./images/person-4.png",
        name: "Bill Anderson",
        designasion: "THE BOSS",
        review: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
];


// Declier Veriable
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const profilePic = document.querySelector(".profile-pic");
const name = document.querySelector(".name")
const designation = document.querySelector(".designasion");
const review = document.querySelector(".review-text");
let count = 0;


// Handle next button 
nextBtn.addEventListener("click", () => {
    if (count > data.length - 2) {
        count = 0;
    } else {
        count++;
    }

    setContent(count);
});


// Handel previous button 
previousBtn.addEventListener("click", () => {
    if (count < 1) {
        count = data.length - 1;
    } else {
        count--;
    }

    setContent(count);
});


// set Data 
function setContent(id) {

    profilePic.src = data[id].image;
    name.innerText = data[id].name;
    designation.innerText = data[id].designasion;
    review.innerText = data[id].review;

}