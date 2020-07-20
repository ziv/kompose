export declare type Func<T = any> = (...args: any) => T;
export declare type Providers = Func<Func[]>;
export declare type Factory<T> = Func<Func<T>>;
