import {DonutMaker} from "../../src/js/DonutMaker.js"

describe('Iteration 1-FEATURE 1 : Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a donut count of 0.', () => {
            
            expect(underTest._donutCount).toBe(0);
        });

        it('Should add one click to the click count when it records a click.', () => {

            underTest.recordManualClick();
            expect(underTest._donutCount).toBe(1);
        });

        it('Should have a click count of 2 when it records 2 clicks.', () => {

            underTest.recordManualClick();
            underTest.recordManualClick();
            expect(underTest._donutCount).toBe(2);
        });

    });

});

describe('Iteration 1-FEATURE 2: Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
    describe('Can add to auto clicker count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.stashDonutsForTesting();
        });

        it('Should start with an auto clicker count of 0.', () => {
            expect(underTest._autoClickerCount).toBe(0);
        });

        it('Should be able record an autoclick to donut count', () => {
            underTest.recordAutoClick();
            expect(underTest._donutCount).toBe(1001);

        });

        it('Should be able to subract auto clicker cost from donut count', () =>{
            underTest.autoClickerPurchase();
            expect(underTest._donutCount).toBe(900);

            
        });

    });
});

describe('Iteration 1-FEATURE 3: The cost of each Auto Clicker will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();

    });

    it('Should increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        underTest.autoClickerPurchase();
        expect(underTest._autoClickerCost).toBe(110);
        expect(underTest._autoClickerCount).toBe(1);
        underTest.autoClickerPurchase();
        expect(underTest._autoClickerCost).toBe(121);
        expect(underTest._donutCount).toBe(790);
    });

    it('Should increase the cost of subsequent Auto Clicker by an additional ten percent', () => {
        underTest.autoClickerPurchase();
        underTest.autoClickerPurchase();
        underTest.autoClickerPurchase();
        expect(underTest._donutCount).toBe(669);
        expect(underTest._autoClickerCount).toBe(3);

    });

});

describe('Iteration 1-FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Should prevent Auto Clicker count from going up if there are not enough clicks to purchase a autoclicker', () => {
        underTest.recordManualClick();
        underTest.recordManualClick();
        underTest.recordManualClick();
        underTest.recordManualClick();
        underTest.recordManualClick();
        underTest.autoClickerPurchase();
        expect(underTest._donutCount).toBe(5);
        expect(underTest._autoClickerCount).toBe(0);
        underTest.stashDonutsForTesting();
        underTest.autoClickerPurchase();
        expect(underTest._donutCount).toBe(905);
        expect(underTest._autoClickerCount).toBe(1);
    });

});

describe('Iteration 1-FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an Activate Auto Clickers event is called.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashAutoClickersForTesting();
        underTest.stashDonutsForTesting();
    });

    it('Should increase the donut total by the amount of Auto Clickers owned when activate Auto Clickers is executed.', () => {
        underTest.activateAutoClicker();
        underTest.recordManualClick();
        expect(underTest._donutCount).toBe(1021);
    });
});

describe('Iteration 2- FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
    });

    it('Should be able to add to the Donut Multiplier Count', () => {
        underTest.recordDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(1);
    });

    it('Should be able to subtract amount of the Donut Multiplier cost from the donut count', () => {
        underTest.donutMultiplierPurchase();
        expect(underTest._donutCount).toBe(990);

    });
    
});

describe('Iteration 2- FEATURE 2:The cost of each Donut Multiplier will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
    });

    it('Should Increase cost of second Donut Multiplier by an additional 10 percent', () => {
        underTest.donutMultiplierPurchase();
        expect(underTest.donutCount).toBe(990);
        underTest.donutMultiplierPurchase();
        expect(underTest.donutCount).toBe(979);
        underTest.donutMultiplierPurchase();
        expect(underTest.donutCount).toBe(966.9);
        underTest.donutMultiplierPurchase();
        expect(underTest.donutCount).toEqual(953.59);
    });
});

describe('Iteration 2-FEATURE 3: Ensure that there are enough donuts to buy a Donut Multiplier. ', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
    });

    it('Should prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a donut multiplier.', () => {
        underTest.recordManualClick();
        underTest.recordManualClick();
        underTest.donutMultiplierPurchase();
        expect(underTest._donutMultiplierCount).toBe(0);
    });
    
});

describe('Iteration 2-FEATURE 4: The first Donut Multiplier should increase the value of a click 1.2x.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
    });

    it('Should increase the amount of donuts added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased.', () => {
        underTest.recordDonutMultiplier();
        expect(underTest._donutCount).toBe(2200);
    });
});

describe('Iteration 2- FEATURE 5: The amount of the subsequent Donut Multipliers click bonus will go up exponentially.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
    });

    it('Should increase the click value multiplier to 1.2 to the xth power, where x is the amount of the Donut Multipliers count.', () => {
        underTest.recordDonutMultiplier();
        underTest.recordDonutMultiplier();
        expect(underTest._donutCount).toBe(5368);
    });
});

describe('Iteration 2- FEATURE 6: The Donut Multipliers click bonus will apply to clicks from the Auto Clicker.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
        underTest.stashAutoClickersForTesting();
    });

    it('When an Add Auto Clickers event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.', () => {
        underTest.recordDonutMultiplier();
        underTest.activateAutoClicker();
        expect(underTest._autoClickerCount).toBe(10);
        expect(underTest._donutCount).toBe(2210);
      
    });
});







