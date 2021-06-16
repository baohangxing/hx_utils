describe('Keycode API:', function () {
    describe('#getKeyName()', function () {
        it(`hx_utils.getKeyName(13) should return "Enter"`, function () {
            expect(hx_utils.getKeyName(13) === 'Enter').toEqual(true);
        });
        const keycode = 10000;
        it(`hx_utils.getKeyName(${keycode}) should return ''`, function () {
            expect(hx_utils.getKeyName(keycode) === '').toEqual(true);
        });
    });
});
