class DonutMaker{

    constructor(){
        this._donutCount= 0;
        this._autoClickerCount= 0;
    }

    recordClick(){
        this._donutCount++;
    }

    recordAutoClickerPurchase(){
        this._autoClickerCount++;
    }

    subtractInitialAutoClickerPurchase(){
        this._donutCount-=100;
    }

    get donutCount(){
        return this._donutCount;
    }

    get autoClickerCount(){        
        return this._autoClickerCount;    }

   

}



