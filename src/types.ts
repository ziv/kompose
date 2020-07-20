export type Invokable<T = any> = (...args: any) => T;

export type Providers = Invokable<Invokable[]>;
export type Factory<T> = Invokable<Invokable<T>>;

export type Kompozition<T = any, R = any> = (ctx: T) => Promise<R>;
export type KompozitionSync<T = any, R = any> = (ctx: T) => R;