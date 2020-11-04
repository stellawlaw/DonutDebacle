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

const updateDonutCounter = function (donutMaker) {
    const donutCounter = document.querySelector(".donut-count");
    donutCounter.innerText = donutMaker.donutCount;
}

updateDonutCounter(donutMaker);
const donutClick = document.querySelector(".donut-button");

donutClick.addEventListener("click", () => {
    donutMaker.recordManualClick();
    updateDonutCounter(donutMaker);
})

//AutoClicker Elements

const updateAutoClickerCounter = function (donutMaker) {
    const autoClickerCounter = document.querySelector(".auto-clicker-count");
    autoClickerCounter.innerText = donutMaker.autoClickerCount;
}

updateAutoClickerCounter(donutMaker);
const autoClickerClick = document.querySelector(".autoclicker-purchase-button");

autoClickerClick.addEventListener("click", () => {
    donutMaker.autoClickerPurchase();
    updateAutoClickerCounter(donutMaker);
})

//Donut Multiplier Elements

const updateDonutMultiplierCounter = function (donutMaker) {
    const donutMultiplierCounter = document.querySelector(".donut-multiplier-count");
    donutMultiplierCounter.innerText = donutMaker.donutMultiplierCount;
}

updateDonutMultiplierCounter(donutMaker);
const donutMultiplierClick = document.querySelector(".donut-multiplier-purchase-button");

donutMultiplierClick.addEventListener("click", () => {
    donutMaker.donutMultiplierPurchase();
    updateDonutMultiplierCounter(donutMaker);
})

