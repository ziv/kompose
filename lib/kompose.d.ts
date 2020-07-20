import { Factory, Func, Providers } from './types';
export declare function provide(...factories: Func[]): Providers;
export declare function factory<T>(factoryFunction: Func): Factory<T>;
export declare function kompose<T = any, R = any>(providers: Providers, main: Factory<Func<R>>): (ctx: T) => Func<R>;
export declare function kompoze<T = any, R = any>(providers: Providers, main: Factory<Func<R>>): (ctx: T) => Promise<Func<R>>;
