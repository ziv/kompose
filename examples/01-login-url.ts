import {factory, kompose, provide} from '../src';
import config from './share/config';
import {getBaseUrl, getLoginPath, queryStringFactory} from './share/providers';

// factory function
// each provider represent argument
const loginUrlFactory = (baseUrl: string, loginPath: string, queryString: Function) =>
    // return the composed function with optional arguments
    // the composed function has access to local arguments and to factory arguments
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
