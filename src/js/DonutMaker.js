class DonutMaker {

    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        this._donutMultiplierValue = 1;
        

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

    //Recording Clicks / Activation / reset

    reset() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        this._donutMultiplierValue = 1;

    }

    recordManualClick() {
        if (this._donutMultiplierCount === 0 && this._autoClickerCount === 0) {
            this._donutCount++;

        }else if(this._autoClickerCount === 0 && this._donutMultiplierCount !==0){
            this._donutCount = this._donutCount + Math.pow(1.2, this._donutMultiplierCount);
        }

        else if(this._autoClickerCount !== 0 && this._donutMultiplierCount === 0){
            this._donutCount = this._donutCount + 1 +  this._autoClickerCount;
        }

        else{
            this._donutCount = this._donutCount + (this._autoClickerCount + 1) * Math.pow(1.2, this._donutMultiplierCount);
        }
    }

    recordAutoClick() {
        if (this._donutMultiplierCount === 0) {
            this._donutCount++;
        } else {
            this._donutCount = this._donutCount + this._donutMultiplierCount * Math.pow(1.2, this._donutMultiplierCount);
        }
    }

    recordDonutMultiplier() {
        this._donutMultiplierCount++;
        this._donutCount = this._donutCount + this._donutCount * Math.pow(1.2, this._donutMultiplierCount);

    }

    activateAutoClicker() {

        if (this._donutMultiplierCount >= 1) {
            this._donutCount = this._donutCount + this.autoClickerCount;
        }
        else {
            this._donutCount = this._donutCount + this._autoClickerCount * Math.pow(1.2, this._donutMultiplierCount);
        }
    }

    //Purchases
    autoClickerPurchase() {

        if (this._donutCount >= this._autoClickerCost) {
            this._donutCount -= this._autoClickerCost;
            this._autoClickerCount++;
        }

        this._autoClickerCost = Math.round(100 * Math.pow(1.1, this._autoClickerCount));

    }

    get autoClickerCount() {
        return this._autoClickerCount;
    }

    get autoClickerCost() {
        return Math.round(this._autoClickerCost * 100) / 100;
    }


    donutMultiplierPurchase() {

        if (this._donutCount >= this._donutMultiplierCost) {
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCount++;
        }
        this._donutMultiplierCost = 10 * Math.pow(1.1, this._donutMultiplierCount);
        this._donutMultiplierValue = Math.pow(1.2, this._donutMultiplierCount);

    }

    get donutMultiplierCount() {
        return this._donutMultiplierCount;
    }

    get donutMultiplierCost() {
        return Math.round(this._donutMultiplierCost * 100) / 100;
    }

    get donutMultiplierValue() {
        return Math.round(this._donutMultiplierValue * 100) / 100;
    }


}

export { DonutMaker }






