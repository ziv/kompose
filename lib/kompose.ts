export type FactoryResult<R> = (...args: any[]) => R;
export type Factory<R> = (...args: any) => FactoryResult<R>;

export const kompose = <T extends any, R extends any>(...providers: Function[]) =>
    (factory: Factory<R>) =>
        (ctx: T) =>
            factory(...providers.map(f => f(ctx)));