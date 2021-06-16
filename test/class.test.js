describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null;
        beforeAll(function () {
            let div = document.createElement('div');
            div.id = 'J_addClass';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_addClass');
        });
        it(`hx_utils.addClass($ele, 'test') should return true`, function () {
            hx_utils.addClass($ele, 'test');
            expect(hx_utils.hasClass($ele, 'test')).toEqual(true);
        });
        afterAll(function () {
            document.body.removeChild($ele);
        });
    });

    describe('#hasClass()', function () {
        let $ele = null;
        beforeAll(function () {
            let div = document.createElement('div');
            div.id = 'J_hasClass';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_hasClass');
            hx_utils.addClass($ele, 'test');
        });
        it(`hx_utils.hasClass($ele, 'test') should return true`, function () {
            expect(hx_utils.hasClass($ele, 'test')).toEqual(true);
        });
        it(`hx_utils.hasClass($ele, 'test') should return false`, function () {
            expect(!hx_utils.hasClass($ele, 'test2')).toEqual(true);
        });
        afterAll(function () {
            document.body.removeChild($ele);
        });
    });

    describe('#removeClass()', function () {
        let $ele = null;
        beforeAll(function () {
            let div = document.createElement('div');
            div.id = 'J_removeClass';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_removeClass');
            hx_utils.addClass($ele, 'test');
        });
        it(`hx_utils.removeClass($ele, 'test') should return false`, function () {
            hx_utils.removeClass($ele, 'test');
            expect(hx_utils.hasClass($ele, 'test')).toEqual(false);
        });
        it(`hx_utils.removeClass($ele, 'test') should return false`, function () {
            hx_utils.removeClass($ele, 'test');
            expect(hx_utils.hasClass($ele, 'test')).toEqual(false);
            hx_utils.addClass($ele, 'newTest');
            expect(hx_utils.hasClass($ele, 'newTest')).toEqual(true);
            hx_utils.removeClass($ele, 'newTest');
            expect(hx_utils.hasClass($ele, 'newTest')).toEqual(false);
        });
        afterAll(function () {
            document.body.removeChild($ele);
        });
    });
});
