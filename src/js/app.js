import {
    DonutMaker
} from "/src/js/DonutMaker.js";

//Header Elements
const companyInfo = document.querySelector(".company-info-list");
companyInfo.addEventListener("click", companyinfofunction);
function companyinfofunction() {
    alert("This is going to be the company information that I make up");
}

//modal-developer info
const developerButton = document.querySelector(".developer-info-list");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
developerButton.addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
});

const exitButton = document.querySelector(".exit");
exitButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

//Donut Counter Elements
const newDonutMaker = new DonutMaker();

const updateDonutCounter = function (donutMaker) {
    const donutCounter = document.querySelector(".donut-count");
    donutCounter.innerText = donutMaker.donutCount;

    updateAutoClickerButton(donutMaker);
    updateDonutMultiplierButton(donutMaker);
};

updateDonutCounter(newDonutMaker);
const donutClick = document.querySelector(".donut-button");

donutClick.addEventListener("click", () => {
    newDonutMaker.recordManualClick();
    updateDonutCounter(newDonutMaker);
});


function updateAutoClickerButton(donutMaker) {
    const lightUpAutoClickerButton = document.querySelector(".autoclicker-purchase-button");
    lightUpAutoClickerButton.classList.add("ungreybutton");

    if (donutMaker.donutCount < donutMaker.autoClickerCost) {
        lightUpAutoClickerButton.classList.toggle("ungreybutton");
    };
};

function updateDonutMultiplierButton(donutMaker) {
    const lightUpDonutMultiplierButton = document.querySelector(".donut-multiplier-purchase-button");
    lightUpDonutMultiplierButton.classList.add("ungreybutton");
    if (donutMaker.donutCount < donutMaker.donutMultiplierCost) {
        lightUpDonutMultiplierButton.classList.toggle("ungreybutton");
    };
}


//AutoClicker Elements

const updateAutoClickerCount = function (newDonutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = newDonutMaker.autoClickerCount;
};

const updateAutoClickerCost = function (newDonutMaker) {
    const autoClickerCost = document.querySelector(".auto-clicker-cost");
    autoClickerCost.innerText = newDonutMaker.autoClickerCost;
};


updateAutoClickerCount(newDonutMaker);
const autoClickerClick = document.querySelector(".autoclicker-purchase-button");

autoClickerClick.addEventListener("click", () => {
    newDonutMaker.autoClickerPurchase();
    updateDonutCounter(newDonutMaker);
    updateAutoClickerCount(newDonutMaker);
    updateAutoClickerCost(newDonutMaker);

});

//Donut Multiplier Elements

const updateDonutMultiplierCount = function (newDonutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = newDonutMaker.donutMultiplierCount;
};

const updateDonutMultiplierCost = function (newDonutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = newDonutMaker.donutMultiplierCost;
};

const updateDonutMultiplierValue = function (newDonutMaker){
    const donutMultiplierValue =document.querySelector(".donut-multiplier-value");
    donutMultiplierValue.innerText = newDonutMaker.donutMultiplierValue;
};

const donutMultiplierClick = document.querySelector(".donut-multiplier-purchase-button");

donutMultiplierClick.addEventListener("click", () => {
    newDonutMaker.donutMultiplierPurchase();
    updateDonutMultiplierCount(newDonutMaker);
    updateDonutCounter(newDonutMaker);
    updateDonutMultiplierCost(newDonutMaker);
    updateDonutMultiplierValue(newDonutMaker);
  
});

//reset button
// updateDonutCounter(newDonutMaker);
const resetClick = document.querySelector(".reset-button");

resetClick.addEventListener("click", () => {

    newDonutMaker.reset();
    updateDonutCounter(newDonutMaker);
    updateAutoClickerCount(newDonutMaker);
    updateAutoClickerCost(newDonutMaker);
    updateDonutMultiplierCount(newDonutMaker);
    updateDonutMultiplierCost(newDonutMaker);
    updateDonutMultiplierValue(newDonutMaker);
 

});








