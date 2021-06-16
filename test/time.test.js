describe('Time API:', function () {
    describe('#formatPassTime()', function () {
        it(`hx_utils.formatPassTime(new Date().getTime() - 30000) === '"刚刚"' should return true`, function () {
            let time = new Date().getTime() - 30000;
            expect(hx_utils.formatPassTime(time) === '刚刚').toEqual(true);
        });

        it(`hx_utils.formatPassTime(new Date().getTime() - 70000) === '"1分钟前"' should return true`, function () {
            let time = new Date().getTime() - 70000;
            expect(hx_utils.formatPassTime(time) === '1分钟前').toEqual(true);
        });

        it(`hx_utils.formatPassTime(new Date().getTime() - 70000 * 60) === '"1小时前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60;
            expect(hx_utils.formatPassTime(time) === '1小时前').toEqual(true);
        });

        it(`hx_utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24) === '"1天前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24;
            expect(hx_utils.formatPassTime(time) === '1天前').toEqual(true);
        });

        it(`hx_utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30) === '"1个月前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30;
            expect(hx_utils.formatPassTime(time) === '1个月前').toEqual(true);
        });

        it(`hx_utils.formatPassTime(new Date().getTime() - 70000 * 60 * 24 * 30 * 12) === '"1年前"' should return true`, function () {
            let time = new Date().getTime() - 70000 * 60 * 24 * 30 * 12;
            expect(hx_utils.formatPassTime(time) === '1年前').toEqual(true);
        });
    });

    describe('#formatRemainTime()', function () {
        it(`hx_utils.formatRemainTime(new Date().getTime() + oneSecond + oneMinute + oneHour + oneDay) === '"1天1小时1分钟1秒"' should return true`, function () {
            let time = new Date().getTime(),
                oneSecond = 1000,
                oneMinute = oneSecond * 60,
                oneHour = oneMinute * 60,
                oneDay = oneHour * 24;
            time = time + oneSecond + oneMinute + oneHour + oneDay;
            expect(
                hx_utils.formatRemainTime(time) === '1天 1小时 1分钟 1秒'
            ).toEqual(true);
        });
    });

    describe('#isLeapYear()', function () {
        it(`hx_utils.isLeapYear(2008) should return true`, function () {
            expect(hx_utils.isLeapYear(2008)).toEqual(true);
        });
        it(`hx_utils.isLeapYear(2012) should return true`, function () {
            expect(hx_utils.isLeapYear(2012)).toEqual(true);
        });
        it(`hx_utils.isLeapYear(2016) should return true`, function () {
            expect(hx_utils.isLeapYear(2016)).toEqual(true);
        });
        it(`hx_utils.isLeapYear(2020) should return true`, function () {
            expect(hx_utils.isLeapYear(2020)).toEqual(true);
        });
        it(`hx_utils.isLeapYear(2024) should return true`, function () {
            expect(hx_utils.isLeapYear(2024)).toEqual(true);
        });
        it(`hx_utils.isLeapYear(2017) should return false`, function () {
            expect(hx_utils.isLeapYear(2017)).toEqual(false);
        });
        it(`hx_utils.isLeapYear(2018) should return false`, function () {
            expect(hx_utils.isLeapYear(2018)).toEqual(false);
        });
        it(`hx_utils.isLeapYear(2019) should return false`, function () {
            expect(hx_utils.isLeapYear(2019)).toEqual(false);
        });
    });

    describe('#isSameDay()', function () {
        it(`hx_utils.isSameDay(new Date()) should return true`, function () {
            expect(hx_utils.isSameDay(new Date()) === true).toEqual(true);
        });
        it(`hx_utils.isSameDay(new Date(), new Date(new Date().getTime() - 86400000)) should return false`, function () {
            expect(
                hx_utils.isSameDay(
                    new Date(),
                    new Date(new Date().getTime() - 86400000)
                ) === false
            ).toEqual(true);
        });
    });

    describe('#timeLeft()', function () {
        it(`hx_utils.timeLeft('2018-10-24 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-24 10:24:00');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 0,
            });
        });
        it(`hx_utils.timeLeft('2018-10-25 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-25 10:24:00');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 0,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-1 10:24:00');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 23,
                h: 0,
                m: 0,
                s: 0,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:24:00', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-24 6:24:00');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 4,
                m: 0,
                s: 0,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:21:00', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-24 10:21:00');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 3,
                s: 0,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-24 10:23:30');
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 30,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = '2018-10-24 10:23:30';
            let endTime = new Date('2018-10-24 10:24:00');
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 30,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = new Date('2018-10-24 10:23:30');
            let endTime = '2018-10-24 10:24:00';
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 30,
            });
        });
        it(`hx_utils.timeLeft('2018-10-1 10:23:30', '2018-10-24 10:24:00') should return true`, function () {
            let startTime = '2018-10-24 10:23:30';
            let endTime = '2018-10-24 10:24:00';
            expect(hx_utils.timeLeft(startTime, endTime)).toEqual({
                d: 0,
                h: 0,
                m: 0,
                s: 30,
            });
        });
    });

    describe('#monthDays()', function () {
        it(`hx_utils.monthDays(new Date('2019/10/08')) should return 31`, function () {
            expect(hx_utils.monthDays(new Date('2019/10/08')) === 31).toEqual(
                true
            );
        });
        it(`hx_utils.monthDays(new Date('2019/02/08')) should return 28`, function () {
            expect(hx_utils.monthDays(new Date('2019/02/08')) === 28).toEqual(
                true
            );
        });
        it(`hx_utils.monthDays(new Date('2020/02/08')) should return 29`, function () {
            expect(hx_utils.monthDays(new Date('2020/02/08')) === 29).toEqual(
                true
            );
        });
        it(`hx_utils.monthDays(new Date('2020/4/1')) should return 30`, function () {
            expect(hx_utils.monthDays(new Date('2020/4/1')) === 30).toEqual(
                true
            );
        });
    });
});
