import {
    DonutMaker
} from "/src/js/DonutMaker.js";

//Header Elements
const companyInfo = document.querySelector(".company-info-list");
companyInfo.addEventListener("click", companyinfofunction);
function companyinfofunction() {
    alert("This is going to be the company information that I make up");
}

const developerInfo = document.querySelector(".developer-info-list");
developerInfo.addEventListener("click", developerinfofunction);
function developerinfofunction() {
    alert("This is going to be the developer bio that I add in");
}

//Donut Counter Elements
const donutMaker = new DonutMaker();

const updateDonutCounter = function(donutMaker){
    const donutCounter = document.querySelector('.donut-count');
    donutCounter.innerText = donutMaker.donutCount;
}

updateDonutCounter(donutMaker);
const donutClick = document.querySelector(".donut-button");

donutClick.addEventListener('click', () => {
    donutMaker.recordManualClick();
    updateDonutCounter(donutMaker);
})

