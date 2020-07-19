# kompose
tiny functional di by composition with zero dependencies


## Example
```typescript
// interfaces.ts
export interface Config {
  url: string;
  path: string;
  customHeaders: {
    Foo: 'sample',
    Bar: 'other-sample'
  }
}
```

providers:
```typescript
// providers.ts

export const fullUrl = (ctx: Config) => `${ctx.url}${ctx.path`;

export const headers = (ctx: Config) => ctx.customHeaders;

```

api:
```typescript
// api.ts
import {kompose} from 'kompose';

export const client = kompose(fullUrl, headers)((url, headers) => (client) => client({url, headers}))
```