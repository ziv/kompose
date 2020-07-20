import {assertInvokable} from './utils';
import {Factory, Invokable, Kompozition, KompozitionSync, Providers} from './types';

export function provide(...factories: Invokable[]): Providers {
    factories.forEach(f => assertInvokable(f, 'provider must be a function'));
    return () => factories;
}

export function factory<T>(factoryFunction: Invokable): Factory<T> {
    assertInvokable(factoryFunction, 'factory must be a function');
    return () => factoryFunction;
}

export function kompose<T = any, R = any>(providers: Providers, main: Factory<Invokable<R>>) {
    return function (ctx: T): Invokable<R> {
        return main()(...providers().map(f => f(ctx)));
    }
}

export function kompoze<T = any, R = any>(providers: Providers, main: Factory<Invokable<R>>) {
    return function (ctx: T): Promise<Invokable<R>> {
        return Promise
            .all(providers().map(f => Promise.resolve(f(ctx))))
            .then(params => main()(...params));
    }
}
