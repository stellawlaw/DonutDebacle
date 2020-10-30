class DonutMaker{

    constructor(){
        this._donutCount= 0;
        this._autoClickerCount= 0;
        this._initialAutoClickerCost= 100;
        this._additionalAutoClickerCost = this._initialAutoClickerCost*.10;
    }

    recordClick(){
        this._donutCount++;
    }

    recordAutoClickerPurchase(){
        this._autoClickerCount++;
    }

    subtractInitialAutoClickerPurchase(){
        this._donutCount-=this._initialAutoClickerCost;
        
    }

    subtractAdditionalAutoClickerPurchase(){
        this._donutCount-= (this._initialAutoClickerCost + this._additionalAutoClickerCost);
        
    }

    get donutCount(){
        return this._donutCount;
    }

    get autoClickerCount(){        
        return this._autoClickerCount;    }

   

}



