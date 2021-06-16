describe('Url API:', function () {
    describe('#parseQueryString()', function () {
        it(`hx_utils.parseQueryString('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') toEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
            let url =
                'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10';
            expect(hx_utils.parseQueryString(url)).toEqual({
                wd: '百度',
                rsv_spt: '10',
            });
        });
        it(`hx_utils.parseQueryString('www.baidu.com?a=123&b=%26') toEqual '{
            a: '123',
            b: '&'
        }' should return true`, function () {
            let url = 'www.baidu.com?a=123&b=%26';
            expect(hx_utils.parseQueryString(url)).toEqual({
                a: '123',
                b: '&',
            });
        });
        it(`hx_utils.parseQueryString('') toEqual '{}' should return true`, function () {
            let url = '';
            expect(hx_utils.parseQueryString(url)).toEqual({});
        });
    });

    describe('#stringfyQueryString()', function () {
        it(`hx_utils.stringfyQueryString({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
            let param = {
                wd: '百度',
                rsv_spt: '10',
            };
            expect(
                hx_utils.stringfyQueryString(param) ===
                    'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
            ).toEqual(true);
        });
    });
});
