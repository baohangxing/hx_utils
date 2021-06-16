describe('Regexp API:', function () {
    describe('#isColor()', function () {
        it('hx_utils.isColor("#acf") should return true ', function () {
            expect(hx_utils.isColor('#acf')).toEqual(true);
        });
        it('hx_utils.isColor("#aaccff") should return true ', function () {
            expect(hx_utils.isColor('#aaccff')).toEqual(true);
        });
        it('hx_utils.isColor("acf") should return false ', function () {
            expect(!hx_utils.isColor('acf')).toEqual(true);
        });
        it('hx_utils.isColor("aaccff") should return false ', function () {
            expect(!hx_utils.isColor('aaccff')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(0,0,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(0,0,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(0,0,0,)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(0,0,0,)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(255,255,256)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(255,255,256)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(255,256,255)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(255,256,255)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(256,255,255)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(256,255,255)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(1,1,-1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(1,1,-1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(1,-1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(1,-1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(-1,1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(-1,1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(1,1,1.1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(1,1,1.1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(1,1.1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(1,1.1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(1.1,1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgb(1.1,1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(0,0,0)") should return true ', function () {
            expect(hx_utils.isColor('rgb(0,0,0)')).toEqual(true);
        });
        it('hx_utils.isColor("rgb(255,255,255)") should return true ', function () {
            expect(hx_utils.isColor('rgb(255,255,255)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(-1,0,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(-1,0,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,-1,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,-1,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,-1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,-1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,-1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,0,-1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(256,0,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(256,0,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,256,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,256,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,256,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,256,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(-1,0,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(-1,0,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,-1,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,-1,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,-1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,-1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(1.1,0,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(1.1,0,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,1.1,0,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,1.1,0,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,1.1,1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,1.1,1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,256)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,0,256)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,1.1)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,0,1.1)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,0.222)") should return false ', function () {
            expect(hx_utils.isColor('rgba(0,0,0,0.222)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,0,)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0)") should return false ', function () {
            expect(!hx_utils.isColor('rgba(0,0,0)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(0,0,0,0.2)") should return false ', function () {
            expect(hx_utils.isColor('rgba(0,0,0,0.2)')).toEqual(true);
        });
        it('hx_utils.isColor("rgba(24,0,0,.2)") should return false ', function () {
            expect(hx_utils.isColor('rgba(24,0,0,0.2)')).toEqual(true);
        });
    });

    describe('#isEmail()', function () {
        it('hx_utils.isEmail("leiquanlive.com") should return false ', function () {
            expect(hx_utils.isEmail('leiquanlive.com')).toEqual(false);
        });
        it('hx_utils.isEmail("leiquan@live.com") should return true ', function () {
            expect(hx_utils.isEmail('leiquan@live.com')).toEqual(true);
        });
    });

    describe('#isChineseIdCard()', function () {
        it('hx_utils.isChineseIdCard("622224188203234033") should return true ', function () {
            expect(hx_utils.isChineseIdCard('622224188203234033')).toEqual(
                true
            );
        });
        it('hx_utils.isChineseIdCard("zas224188203234033") should return false', function () {
            expect(!hx_utils.isChineseIdCard('leiquan@live.com')).toEqual(true);
        });
    });

    describe('#isChinesePhoneNum()', function () {
        it('hx_utils.isChinesePhoneNum("18882324234") should return true ', function () {
            expect(hx_utils.isChinesePhoneNum('18882324234')).toEqual(true);
        });
        it('hx_utils.isChinesePhoneNum("8618882324234") should return true ', function () {
            expect(hx_utils.isChinesePhoneNum('8618882324234')).toEqual(true);
        });
        it('hx_utils.isChinesePhoneNum("5534553") should return false', function () {
            expect(!hx_utils.isChinesePhoneNum('5534553')).toEqual(true);
        });
        it('hx_utils.isChinesePhoneNum("19056323241") should return true', function () {
            expect(hx_utils.isChinesePhoneNum('19056323241')).toEqual(true);
        });
    });

    describe('#isUrl()', function () {
        it('hx_utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            expect(
                hx_utils.isUrl(
                    'https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'
                )
            ).toEqual(true);
        });
        it('hx_utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            expect(
                hx_utils.isUrl(
                    'http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1'
                )
            ).toEqual(true);
        });
        it('hx_utils.isUrl("www.baidu.com") should return true', function () {
            expect(hx_utils.isUrl('www.baidu.com')).toEqual(true);
        });
        it('hx_utils.isUrl("baidu.com") should return true', function () {
            expect(hx_utils.isUrl('baidu.com')).toEqual(true);
        });
        it('hx_utils.isUrl("http://baiducom") should return false', function () {
            expect(!hx_utils.isUrl('http://baiducom')).toEqual(true);
        });
    });
});
