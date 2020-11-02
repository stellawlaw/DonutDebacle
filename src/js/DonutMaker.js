class DonutMaker {

    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 0;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 0;

    }
    //Testers
    stashDonutsForTesting() {
        this._donutCount += 1000;
    }

    stashAutoClickersForTesting() {
        this._autoClickerCount += 10;
    }


    get autoClickerCount() {
        return this._autoClickerCount;
    }

    recordManualClick() {
        this._donutCount++;
    }
    recordAutoClick() {
        this._donutCount++;
    }

    recordDonutMultiplier() {
        this._donutMultiplierCount++;
        let d = this._donutMultiplierCount; 
        this._donutCount= this._donutCount + this._donutCount * Math.pow(1.2, d);
        
      
    }

    get donutCount() {
        return this._donutCount;
    }

    autoClickerPurchase() {

        if (this._autoClickerCount == 0) {
            this.autoClickerCost = 100;
        }
        else {
            let n = this._autoClickerCount;
            this.autoClickerCost = Math.round(100 * Math.pow(1.1, n));
        }

        if (this._donutCount >= this.autoClickerCost) {
            this._donutCount -= this.autoClickerCost;
            this._autoClickerCount++;
        }
        else {
            this._donutCount = this._donutCount;
        }
    }

    activateAutoClicker() {
        let a = this._donutMultiplierCount;
        if(this._donutMultiplierCount>=1){
            this._autoClickerCount = this._autoClickerCount + this._autoClickerCount * Math.pow(1.2, a);
            this._donutCount = this._donutCount + this.autoClickerCount;
        }
        else{
         this._donutCount = this._donutCount + this.autoClickerCount;
        }
    }


    buyDonutMultiplier() {

        if (this._donutMultiplierCount == 0) {
            this._donutMultiplierCost = 10;
        } 
        else {
            let m = this._donutMultiplierCount;
            this._donutMultiplierCost = 10 * Math.pow(1.1, m);
        }

        if (this._donutCount >= this._donutMultiplierCost) {        
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCount++;

        }
        else {
            this._donutCount = this._donutCount;
        }

    }


}






