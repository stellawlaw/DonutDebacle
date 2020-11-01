class DonutMaker{

    constructor(){
        this._donutCount=0;
        this._autoClickerCount= 0;
        this._baseAutoClickerCost= 100;
    }

    stashDonutsForTesting(){
        this._donutCount+=1000;
    }

    stashAutoClickersForTesting(){
        this.autoClickerCount+=10;
    }

    recordClick(){
        this._donutCount++;
    }

    get donutCount(){
        return this._donutCount;
    }

    subtractAutoClickerPurchase(){
        if(this._autoClickerCount==0){
            this.autoClickerCost =100;
        }
        else{
            let n = this._autoClickerCount;
            this.autoClickerCost = Math.round(100*Math.pow(1.1, n));
        }
        this._donutCount-=this.autoClickerCost;
        this._autoClickerCount++;

        // if(this._donutCount>=this.autoClickerCost){
        //     this._donutCount-=this.autoClickerCost;
        //      this._autoClickerCount++;
        // }
        // else{
        //     this._donutCount=this._donutCount;
        // }
        
    }


  



    get autoClickerCount(){        
        return this._autoClickerCount;    }

   

}



