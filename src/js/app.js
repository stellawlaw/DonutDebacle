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
    backdrop.style.dislay = "block";
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

//reset button
updateDonutCounter(newDonutMaker);
const resetClick = document.querySelector(".reset-button");

resetClick.addEventListener("click", () => {
    newDonutMaker.reset();
    updateDonutCounter(newDonutMaker);
    updateAutoClickerCounter(newDonutMaker);
    updateDonutMultiplierCounter(newDonutMaker);

});


function updateAutoClickerButton(donutMaker) {
    const lightUpAutoClickerButton = document.querySelector(".autoclicker-purchase-button");
    lightUpAutoClickerButton.classList.add("ungreybutton");
    if (donutMaker.donutCount < donutMaker.autoClickerCost) {
        lightUpAutoClickerButton.classList.toggle("ungreybutton");
    };
}

function updateDonutMultiplierButton(donutMaker) {
    const lightUpDonutMultiplierButton = document.querySelector(".donut-multiplier-purchase-button");
    lightUpDonutMultiplierButton.classList.add("ungreybutton");
    if (donutMaker.donutCount < donutMaker.donutMultiplierCost) {
        lightUpDonutMultiplierButton.classList.toggle("ungreybutton");
    };
}

//AutoClicker Elements

const updateAutoClickerCounter = function (newDonutMaker) {
    const autoClickerCounter = document.querySelector(".auto-clicker-count");
    autoClickerCounter.innerText = newDonutMaker.autoClickerCount;
};

updateAutoClickerCounter(newDonutMaker);
const autoClickerClick = document.querySelector(".autoclicker-purchase-button");

autoClickerClick.addEventListener("click", () => {
    newDonutMaker.autoClickerPurchase();
    updateAutoClickerCounter(newDonutMaker);
});

//Donut Multiplier Elements

const updateDonutMultiplierCounter = function (newDonutMaker) {
    const donutMultiplierCounter = document.querySelector(".donut-multiplier-count");
    donutMultiplierCounter.innerText = newDonutMaker.donutMultiplierCount;
};

updateDonutMultiplierCounter(newDonutMaker);
const donutMultiplierClick = document.querySelector(".donut-multiplier-purchase-button");

donutMultiplierClick.addEventListener("click", () => {
    newDonutMaker.donutMultiplierPurchase();
    updateDonutMultiplierCounter(newDonutMaker);

});


//AutoClicker Cost update
// const updateAutoClickerCost = function (newDonutMaker) {
//     const autoClickerCost = document.querySelector(".auto-clicker-cost");
//     autoClickerCost.innerText = newDonutMaker.autoClickerCost;
// };

// updateAutoClickerCost(newDonutMaker);
// const autoClickerClick = document.querySelector(".autoclicker-purchase-button");

// autoClickerClick.addEventListener("click", () => {
//     newDonutMaker.autoClickerPurchase();
//     updateAutoClickerCost(newDonutMaker);
// });







