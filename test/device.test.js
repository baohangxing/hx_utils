describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`hx_utils.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${hx_utils.getExplore()}`);
            expect(/^Chrome:/.test(hx_utils.getExplore())).toEqual(true);
        });
    });

    describe('#getOS()', function () {
        it(`hx_utils.getOS() should return "windows"`, function () {
            console.log(`OS:${hx_utils.getOS()}`);
            expect(
                hx_utils.getOS() === 'windows' ||
                    hx_utils.getOS() === 'MacOSX' ||
                    hx_utils.getOS() === 'linux'
            ).toEqual(true);
        });
    });
});
