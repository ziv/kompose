export declare type FactoryResult<R> = (...args: any[]) => R;
export declare type Factory<R> = (...args: any) => FactoryResult<R>;
export declare const kompose: <T extends unknown, R extends unknown>(...providers: Function[]) => (factory: Factory<R>) => (ctx: T) => FactoryResult<R>;
