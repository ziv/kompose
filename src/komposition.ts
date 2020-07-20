// import {Invokable} from './types';
// import {factory, kompose, provide} from './kompose';
// import {assertInvokable} from './utils';
//
// export class Komposition<T = any> {
//     providers: Invokable[] = [];
//     factoryFunction: Invokable = null;
//     ctx: T = <T>{};
//
//     constructor(init: Partial<Komposition> = {}) {
//         if (init.providers) {
//             this.add(...init.providers);
//         }
//         if (init.factory) {
//             this.factory(init.factory);
//         }
//         this.context(init.ctx);
//         // Object.assign(this, init);
//     }
//
//     add(...providers: Invokable[]): Komposition<T> {
//         for (const provider of providers) {
//             assertInvokable(provider, 'provider must be function');
//             this.providers.push(provider);
//         }
//         return this;
//     }
//
//     factory(factory: Invokable): Komposition<T> {
//         assertInvokable(factory, 'factory is not a function');
//         this.factoryFunction = factory;
//         return this;
//     }
//
//     context(ctx: T): Komposition<T> {
//         if (ctx) {
//             this.ctx = ctx;
//         }
//         return this;
//     }
//
//     compose<R = Invokable & Function>(ctx?: T): R {
//         // assertion
//         this.factory(this.factoryFunction).context(ctx);
//         return kompose<T, R>(provide(...this.providers), factory(this.factoryFunction))(this.ctx) as R;
//     }
// }