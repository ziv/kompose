import {assertInvokable} from './utils';
import {Factory, Func, Providers} from './types';

export function provide(...factories: Func[]): Providers {
    factories.forEach(f => assertInvokable(f, 'provider must be a function'));
    return () => factories;
}

export function factory<T>(factoryFunction: Func): Factory<T> {
    assertInvokable(factoryFunction, 'factory must be a function');
    return () => factoryFunction;
}

/**
 * Sync version
 * @param providers
 * @param main
 */
export function kompose<T = any, R = any>(providers: Providers, main: Factory<Func<R>>) {
    return function (ctx: T): Func<R> {
        return main()(...providers().map(f => f(ctx)));
    }
}

/**
 * Async version
 * @param providers
 * @param main
 */
export function kompoze<T = any, R = any>(providers: Providers, main: Factory<Func<R>>) {
    return function (ctx: T): Promise<Func<R>> {
        return Promise
            .all(providers().map(f => Promise.resolve(f(ctx))))
            .then(params => main()(...params));
    }
}
