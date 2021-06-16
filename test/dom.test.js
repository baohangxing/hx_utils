describe('Dom API:', function () {
    describe('#getScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        beforeAll(function () {
            $body.style.height = '10000px';
            hx_utils.setScrollTop(length);
        });
        it(`hx_utils.getScrollTop() should return true`, function () {
            expect(hx_utils.getScrollTop() === length).toEqual(true);
        });
        afterAll(function () {
            hx_utils.setScrollTop(0);
            $body.style.height = bodyHeight;
        });
    });

    describe('#setScrollTop()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20;
        beforeAll(function () {
            $body.style.height = '10000px';
            hx_utils.setScrollTop(length);
        });
        it(`hx_utils.getScrollTop() should return true`, function () {
            hx_utils.setScrollTop(length);
            expect(hx_utils.getScrollTop() === length).toEqual(true);
        });
        afterAll(function () {
            hx_utils.setScrollTop(0);
            $body.style.height = bodyHeight;
        });
    });

    describe('#offset()', function () {
        let $ele = null;
        beforeAll(function () {
            let div = document.createElement('div');
            div.id = 'J_addClass';
            div.style.position = 'absolute';
            div.style.top = '200px';
            div.style.left = '300px';
            document.body.appendChild(div);
            $ele = document.querySelector('#J_addClass');
        });
        it(`hx_utils.offset() should return true`, function () {
            let offset = hx_utils.offset($ele);
            expect(offset.left === 300 && offset.top === 200).toEqual(true);
        });
        afterAll(function () {
            document.body.removeChild($ele);
        });
    });

    describe('#scrollTo()', function () {
        let $body = document.body,
            bodyHeight = getComputedStyle($body).getPropertyValue('height'),
            length = 20,
            y = 100,
            duration = 300;
        beforeAll(function () {
            $body.style.height = '10000px';
        });
        it(`hx_utils.scrollTo() should return true`, function (done) {
            hx_utils.scrollTo(y, duration);
            setTimeout(function () {
                expect(hx_utils.getScrollTop()).toEqual(y);
                done();
            }, duration + 200);
        });
        afterAll(function () {
            hx_utils.setScrollTop(0);
            $body.style.height = bodyHeight;
        });
    });

    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight;
        it(`hx_utils.windowResize(downCb) should return true`, function (done) {
            hx_utils.windowResize(
                function () {
                    // 键盘缩回回调
                    expect(window.innerHeight == innerHeight).toEqual(true);
                    done();
                },
                function () {}
            );
            // 触发resize事件，模拟软键盘缩回
            window.dispatchEvent(new Event('resize'));
        });
    });

    describe('#windowResize()', function () {
        let innerHeight = window.innerHeight;
        it(`hx_utils.windowResize(upCb) should return true`, function (done) {
            hx_utils.windowResize(
                function () {},
                function () {
                    // 键盘弹起回调
                    expect(window.innerHeight === innerHeight - 200).toEqual(
                        true
                    );
                    done();
                }
            );
            // 设置innerHeight，模拟软键盘弹起
            window.innerHeight = innerHeight - 200;
            // 触发resize事件
            window.dispatchEvent(new Event('resize'));
        });
        afterAll(function () {
            window.innerHeight = innerHeight;
        });
    });
});
