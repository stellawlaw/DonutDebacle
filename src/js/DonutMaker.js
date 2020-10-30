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


    get donutCount(){
        return this._donutCount;
    }

   

}



