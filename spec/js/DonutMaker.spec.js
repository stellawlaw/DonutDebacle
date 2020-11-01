describe('FEATURE : Have a way to count donuts', () => {
    describe('Can add to donut count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with a donut count of 0.', () => {

            expect(underTest._donutCount).toBe(0);
        });

        it('Should add one click to the click count when it records a click.', () => {

            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
        });

        it('Should have a click count of 2 when it records 2 clicks.', () => {

            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });

    });

});

describe('FEATURE : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
    describe('Can add to auto clicker count', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
        });

        it('Should start with an auto clicker count of 0.', () => {
            expect(underTest._autoClickerCount).toBe(0);
        });

        it('Should be able record an autoclick', () => {
            underTest.recordAutoClick();
            expect(underTest._donutCount).toBe(1);

        });

    });
});

describe('FEATURE : The cost of each Auto Clicker will go up with each purchase.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();

    });

    it('Should increase the cost of the second Auto Clicker by an additional ten percent.', () => {
        underTest.subtractAutoClickerPurchase();
        expect(underTest.autoClickerCost).toBe(100);
        expect(underTest._autoClickerCount).toBe(1);
        underTest.subtractAutoClickerPurchase();
        expect(underTest.autoClickerCost).toBe(110);
        expect(underTest._donutCount).toBe(790);
    });

    it('Should increase the cost of subsequent Auto Clicker by an additional ten percent', () => {
        underTest.subtractAutoClickerPurchase();
        underTest.subtractAutoClickerPurchase();
        underTest.subtractAutoClickerPurchase();
        expect(underTest._donutCount).toBe(669);
        expect(underTest._autoClickerCount).toBe(3);

    });

});

describe('Iteration 1-FEATURE 4 : Ensure that there are enough clicks to buy a Auto Clicker.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.subtractAutoClickerPurchase;
    });

    it('Should prevent Auto Clicker count from going up if there are not enough clicks to purchase a autoclicker', () => {
        underTest.recordClick();
        underTest.recordClick();
        underTest.recordClick();
        underTest.recordClick();
        underTest.recordClick();
        underTest.subtractAutoClickerPurchase();
        expect(underTest._donutCount).toBe(5);
        expect(underTest._autoClickerCount).toBe(0);
        underTest.stashDonutsForTesting();
        underTest.subtractAutoClickerPurchase();
        expect(underTest._donutCount).toBe(905);
        expect(underTest._autoClickerCount).toBe(1);
    });

});

describe('Iteration 1-FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an Activate Auto Clickers event is called.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashAutoClickersForTesting();
    });

    it('Should increase the donut total by the amount of Auto Clickers owned when activate Auto Clickers is executed.', () => {
        underTest.activateAutoClicker();
        underTest.recordClick();
        expect(underTest._donutCount).toBe(11);
    });
});

describe('Iteration 2- FEATURE 1 : Be able to purchase the first Donut Multiplier with 10 clicks from your click count.', () => {
    let underTest;
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting;
    });

    it('Should be able to add to the Donut Multiplier Count', () => {
        underTest.recordDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(1);
    });

    it('Should be able to subtract amount of the Donut Multiplier cost from the donut count', () => {
        underTest.recordDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(1);
        underTest.buyDonutMultiplier();
        underTest.stashDonutsForTesting();
        expect(underTest._donutCount).toBe(990);

    });
    
    
});







