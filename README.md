# kompose
tiny functional composition utilities (educational project)

## Examples
### 01 login url
Configuration file:
```typescript
// config.ts
export default {
   baseUrl: 'https://example.com',
   loginPath: '/login/path',

};
```

Providers are data accessors, factories, getter etc. All providers get context as argument.
```typescript
// provider.ts
import {qs} from './qs'; // arbitrary query string library

// data accessors providers
export const getBaseUrl = (ctx: {baseUrl: string}) => ctx.baseUrl;
export const getLoginPath = (ctx: {loginPath: string}) => ctx.loginPath;

// factory provider
export const queryStringFactory = (ctx?: any) => (params: object) => qs(params);
```

Factory where composition start:
```typescript
// factory function
// each provider represent argument
const loginUrlFactory = (baseUrl: string, loginPath: string, queryString: Function) =>
    // return the composed function with optional arguments
    // the composed function has access to local arguments and to factory arguments
    (params: object) => `${baseUrl}${loginPath}?` +  queryString(params);
```

Composition and usage:
```typescript
import {factory, kompose, provide} from '../src';
import config from './share/config';
import {getBaseUrl, getLoginPath, queryStringFactory} from './share/providers';

const loginUrlFactory = (baseUrl: string, loginPath: string, queryString: Function) =>
    (params: object) => `${baseUrl}${loginPath}?` +  queryString(params);

// "provide" and "factory" are helpers function
const composition = kompose(
    provide(getBaseUrl, getLoginPath, queryStringFactory),
    factory(loginUrlFactory)
);

// when context is available...
const loginUrl = composition(config);

// ...the function is ready to use
console.log( loginUrl({foo: 'bar'}) );
// https://example.com/login/path?foo=bar
```