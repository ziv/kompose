// import {kompose} from './kompose';
//
// const ctx = {
//     a: 1,
//     b: 2,
//     c: 3
// };
//
// const providerA = (c) => c.a;
// const providerB = (c) => c.b;
//
// const factory = (a, b) => (c) => a + b + c;
//
// describe('kompose', () => {
//     it('should expose function', () => {
//        expect(kompose).toBeInstanceOf(Function);
//     });
//
//     describe('composition in steps', () => {
//         let stepA, stepB, stepC;
//
//         it('should compose providers', () => {
//             stepA = kompose(providerA, providerB);
//             expect(stepA).toBeInstanceOf(Function);
//         });
//
//         it('should compose factory', () => {
//             stepB = stepA(factory);
//             expect(stepB).toBeInstanceOf(Function);
//         });
//
//         it('should compose context', () => {
//             stepC = stepB(ctx);
//             expect(stepC).toBeInstanceOf(Function);
//         });
//
//         it('should return result', () => {
//            expect(stepC(3)).toEqual(6);
//         });
//     });
//
//
// });