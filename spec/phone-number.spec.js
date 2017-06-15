describe('phone number test', () => {
    const number = require('../phone-number');
    describe('should handle good scenarios', () => {
        const testData = [
            '0191765654 11:30',
            '01661786543 01:07'
        ]
        
        it('should return a number', () => {
            expect(number(testData)).toBeTruthy();
        })

        it('should not remove any numbers', () => {
            expect(number(testData)).toBe(12*500 + 67*10);
        })

        it('should remove longest call if over 12 minutes', () => {
            const twelveMinCall = ['0191765654 12:30'];
            expect(number(testData.concat(twelveMinCall))).toBe(12*500 + 67*10);
        })
    })

})