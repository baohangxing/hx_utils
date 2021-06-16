describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person toEqual hx_utils.deepClone(null) should return true`, function () {
            let person = null;
            expect(hx_utils.deepClone(person)).toEqual(person);
        });

        it(`person toEqual hx_utils.deepClone('deygtyuat') should return true`, function () {
            let person = 'deygtyuat';
            expect(hx_utils.deepClone(person)).toEqual(person);
        });

        it(`person toEqual hx_utils.deepClone(new Date()) should return true`, function () {
            let date = new Date();
            expect(hx_utils.deepClone(date)).toEqual(date);
        });

        it(`person toEqual hx_utils.deepClone(person) should return true`, function () {
            let person = {
                name: 'user',
                settings: {
                    first: '1',
                    second: [1, 2, 3, 4, 3],
                },
            };
            expect(hx_utils.deepClone(person)).toEqual(person);
        });

        it(`person === hx_utils.deepClone(person) should return false`, function () {
            let person = {
                name: 'user',
                settings: {
                    first: '1',
                    second: [1, 2, 3, 4, 3],
                },
            };
            expect(hx_utils.deepClone(person)).toEqual(person);
        });
    });

    describe('#isEmptyObject()', function () {
        it(`hx_utils.isEmptyObject({}) should return true`, function () {
            expect(hx_utils.isEmptyObject({})).toEqual(true);
        });

        it(`hx_utils.isEmptyObject({ one: 1 }) should return false`, function () {
            expect(
                hx_utils.isEmptyObject({
                    one: 1,
                })
            ).toEqual(false);
        });

        it(`hx_utils.isEmptyObject([]) should return false`, function () {
            expect(hx_utils.isEmptyObject([])).toEqual(false);
        });
    });
});
