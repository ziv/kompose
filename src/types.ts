export type Func<T = any> = (...args: any) => T;

export type Providers = Func<Func[]>;
export type Factory<T> = Func<Func<T>>;