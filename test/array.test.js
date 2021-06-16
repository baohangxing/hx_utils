/*
 * @Author: baohangxing
 * @Description:
 * @Date: 2021-04-25 11:49:06
 */
describe('Array API:', function () {
    describe('isArray', function () {
        it("expect(hx_utils.isArray('')).toEqual(false)", function () {
            expect(hx_utils.isArray('')).toEqual(false);
        });
        it('expect(hx_utils.isArray(false)).toEqual(false)', function () {
            expect(hx_utils.isArray(false)).toEqual(false);
        });
        it("expect(hx_utils.isArray([''])).toEqual(true)", function () {
            expect(hx_utils.isArray([''])).toEqual(true);
        });
        it('expect(hx_utils.isArray(null)).toEqual(false)', function () {
            expect(hx_utils.isArray(null)).toEqual(false);
        });
        it('expect(hx_utils.isArray(undefined)).toEqual(false)', function () {
            expect(hx_utils.isArray(undefined)).toEqual(false);
        });
        it('expect(hx_utils.isArray(new Array())).toEqual(true)', function () {
            expect(hx_utils.isArray(new Array())).toEqual(true);
        });
        it('expect(hx_utils.isArray()).toEqual(false)', function () {
            expect(hx_utils.isArray()).toEqual(false);
        });
        it('expect(hx_utils.isArray(4)).toEqual(false)', function () {
            expect(hx_utils.isArray(4)).toEqual(false);
        });
        it('expect(hx_utils.isArray([1, null, 2])).toEqual(true)', function () {
            expect(hx_utils.isArray([1, null, 2])).toEqual(true);
        });
    });

    describe('arrayEqual()', function () {
        it('expect(hx_utils.arrayEqual([], [])).toEqual(true)', function () {
            expect(hx_utils.arrayEqual([], [])).toEqual(true);
        });
        it('expect(hx_utils.arrayEqual(null, null)).toEqual(false);', function () {
            expect(hx_utils.arrayEqual(null, null)).toEqual(false);
        });
        it('expect(hx_utils.arrayEqual(undefined, undefined)).toEqual(false);', function () {
            expect(hx_utils.arrayEqual(undefined, undefined)).toEqual(false);
        });
        it('expect(hx_utils.arrayEqual(undefined, null)).toEqual(false);', function () {
            expect(hx_utils.arrayEqual(undefined, null)).toEqual(false);
        });
        it('expect(hx_utils.arrayEqual()).toEqual(false);', function () {
            expect(hx_utils.arrayEqual()).toEqual(false);
        });
        it('expect(hx_utils.arrayEqual([1, 2, 3], [1, 2, 3])).toEqual(true);', function () {
            expect(hx_utils.arrayEqual([1, 2, 3], [1, 2, 3])).toEqual(true);
        });
        it('expect(hx_utils.arrayEqual([1, 2, 3], [2, 2, 3])).toEqual(false);', function () {
            expect(hx_utils.arrayEqual([1, 2, 3], [2, 2, 3])).toEqual(false);
        });
        it('var arr = [1, {}, Object];expect(hx_utils.arrayEqual(arr, arr)).toEqual(true);', function () {
            var arr = [1, {}, Object];
            expect(hx_utils.arrayEqual(arr, arr)).toEqual(true);
        });
        it('expect(hx_utils.arrayEqual([1, {}, Object], [1, {}, Object])).toEqual(false);', function () {
            expect(
                hx_utils.arrayEqual([1, {}, Object], [1, {}, Object])
            ).toEqual(false);
        });
    });
});
