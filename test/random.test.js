describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(hx_utils.randomColor()) should return true`, function () {
            expect(/^#[0-9a-fA-F]{6}$/.test(hx_utils.randomColor())).toEqual(
                true
            );
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= hx_utils.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = hx_utils.randomNum(10, 1000);
            expect(num <= 1000 && num > 10).toEqual(true);
        });

        // 测试 0.1 ~ 1.2 之间只能取得 1，不能为 0
        it(`1 === hx_utils.randomNum(0.1, 1.2) should return true`, function () {
            let num = hx_utils.randomNum(0.1, 1.2);
            expect(num === 1).toEqual(true);
        });
    });
});
