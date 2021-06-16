// describe('Cookie API:', function () {
//     describe('#getCookie()', function () {
//         beforeAll(function () {
//             hx_utils.setCookie('test', 'getTestValue', 1);
//         });
//         it(`hx_utils.getCookie('test', 'getTestValue') should return 'getTestValue'`, function () {
//             expect(hx_utils.getCookie('test')).toEqual('getTestValue');
//         });
//         it(`hx_utils.getCookie('empty', '') should return true`, function () {
//             expect(hx_utils.getCookie('empty') === '').toEqual(true);
//         });
//         afterAll(function () {
//             hx_utils.removeCookie('test');
//         });
//     });

//     describe('#removeCookie()', function () {
//         beforeAll(function () {
//             hx_utils.setCookie('test', 'removeTestValue', 1);
//         });
//         it(`hx_utils.removeCookie('test') should return false`, function () {
//             hx_utils.removeCookie('test');
//             expect(hx_utils.getCookie('test') === 'removeTestValue').toEqual(
//                 false
//             );
//         });
//     });

//     describe('#setCookie()', function () {
//         it(`hx_utils.getCookie('test', 'setCookie') should return 'setCookie'`, function () {
//             hx_utils.setCookie('test', 'setCookie', 1);
//             expect(hx_utils.getCookie('test')).toEqual('setCookie');
//         });
//         afterAll(function () {
//             hx_utils.removeCookie('test');
//         });
//     });
// });
