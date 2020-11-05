class DonutMaker {

    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;

    }
    //Testers
    stashDonutsForTesting() {
        this._donutCount += 1000;
    }

    stashAutoClickersForTesting() {
        this._autoClickerCount += 10;
    }

    //Getters
    get donutCount() {
        return Math.round(this._donutCount * 100) / 100;
    }

    get autoClickerCount() {
        return this._autoClickerCount;
    }

    get autoClickerCost(){
        return this._autoClickerCost;
    }

    get donutMultiplierCount() {
        return this._donutMultiplierCount;
    }

    get donutMultiplierCost(){
        return this._donutMultiplierCost;
    }
 
    //Recording Clicks / Activation

    reset(){
        this._donutCount=0;
        this._autoClickerCost=0;
        this._autoClickerCount=0;
        this._donutMultiplierCost=0;
        this._donutMultiplierCount=0;
        
    }

    recordManualClick() {
        this._donutCount++;
    }

    recordAutoClick() {
        this._donutCount++;
    }

    recordDonutMultiplier() {
        this._donutMultiplierCount++;
        this._donutCount = this._donutCount + this._donutCount * Math.pow(1.2, this._donutMultiplierCount);
    }

    activateAutoClicker() {
        if (this._donutMultiplierCount >= 1) {
            this._autoClickerCount = this._autoClickerCount + this._autoClickerCount * Math.pow(1.2, this._donutMultiplierCount);
            this._donutCount = this._donutCount + this.autoClickerCount;
        }
        else {
            this._donutCount = this._donutCount + this.autoClickerCount;
        }
    }

    //Purchases
    autoClickerPurchase() {
        this._autoClickerCost = Math.round(100 * Math.pow(1.1, this._autoClickerCount));

        if (this._donutCount >= this._autoClickerCost) {
            this._donutCount -= this._autoClickerCost;
            this._autoClickerCount++;
        }

    }

    donutMultiplierPurchase() {
        this._donutMultiplierCost = 10 * Math.pow(1.1, this._donutMultiplierCount);

        if (this._donutCount >= this._donutMultiplierCost) {
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCount++;
        }

    }


}

export{ DonutMaker }






