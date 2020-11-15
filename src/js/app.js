import {
    DonutMaker
} from "/src/js/DonutMaker.js";

//Header Elements

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

//modal-company info

const companyButton = document.querySelector(".company-info-list");
const modal2 = document.querySelector(".modal2");
const backdrop2 = document.querySelector(".backdrop2");

function closeModal2() {
    modal2.style.display = "none";
    backdrop2.style.display = "none";
}
companyButton.addEventListener("click", function () {
    modal2.style.display = "block";
    backdrop2.style.display = "block";
});

const exitButton2 = document.querySelector(".exit2");
exitButton2.addEventListener("click", closeModal2);
backdrop2.addEventListener("click", closeModal2);


//Donut Counter Elements
const newDonutMaker = new DonutMaker();

const updateDonutCounter = function (donutMaker) {
    const donutCounter = document.querySelector(".donut-count");
    donutCounter.innerText = donutMaker.donutCount;

    updateAutoClickerButton(donutMaker);
    updateDonutMultiplierButton(donutMaker);
    krispyKremeLevel(donutMaker);
    dunkindonutsLevel(donutMaker);
    timHortonsLevel(donutMaker);
};

updateDonutCounter(newDonutMaker);
const donutClick = document.querySelector(".donut-button");

donutClick.addEventListener("click", () => {
    newDonutMaker.recordManualClick();
    updateDonutCounter(newDonutMaker);
});

const donutButton = document.querySelector(".donut-button");
donutButton.innerHTML= '<img src="src/images/donut.png"/ height="300px width="300px>'

//Light up Elements

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

function krispyKremeLevel(donutMaker){
    const krispyKremeLevel = document.querySelector(".krispy-kreme");
    krispyKremeLevel.classList.add("level-light");
    if(donutMaker.donutCount<100){
        krispyKremeLevel.classList.toggle("level-light");
    };
}

function dunkindonutsLevel(donutMaker){
    const dunkindonutsLevel = document.querySelector(".dunkin-donuts");
    dunkindonutsLevel.classList.add("level-light");
    if(donutMaker.donutCount<50){
        dunkindonutsLevel.classList.toggle("level-light");
    };
}

function timHortonsLevel(donutMaker){
    const timHortonsLevel = document.querySelector(".tim-hortons");
    timHortonsLevel.classList.add("level-light");
    if(donutMaker.donutCount<25){
        timHortonsLevel.classList.toggle("level-light");
    };
}

//AutoClicker Elements

const updateAutoClickerCount = function (newDonutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = newDonutMaker.autoClickerCount;
};

const updateAutoClickerCost = function (newDonutMaker) {
    const autoClickerCost = document.querySelector(".auto-clicker-cost");
    autoClickerCost.innerText = "Auto Clicker Cost:" + " " + "$" + newDonutMaker.autoClickerCost;
};

const i = DonutMaker.donutCount;
const activateAutoClicker = setInterval(function(){
    donutCounter.innerText = i;
    i++
}, 1000);



updateAutoClickerCount(newDonutMaker);
const autoClickerClick = document.querySelector(".autoclicker-purchase-button");

autoClickerClick.addEventListener("click", () => {
    newDonutMaker.autoClickerPurchase();
    updateDonutCounter(newDonutMaker);
    updateAutoClickerCount(newDonutMaker);
    updateAutoClickerCost(newDonutMaker);
    activateAutoClicker(newDonutMaker);

});

//Donut Multiplier Elements

const updateDonutMultiplierCount = function (newDonutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = newDonutMaker.donutMultiplierCount;
};

const updateDonutMultiplierCost = function (newDonutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText ="Donut Multiplier Cost:" + " " + "$" + newDonutMaker.donutMultiplierCost;
};

const updateDonutMultiplierValue = function (newDonutMaker){
    const donutMultiplierValue =document.querySelector(".donut-multiplier-value");
    donutMultiplierValue.innerText = "Donut Multiplier Value:" + " " + newDonutMaker.donutMultiplierValue;
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








