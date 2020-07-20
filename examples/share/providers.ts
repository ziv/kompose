// provider.ts
import {qs} from './qs';
import {SampleResponse} from './types'; // arbitrary query string library

// data accessors providers
export const getBaseUrl = (ctx: {baseUrl: string}) => ctx.baseUrl;
export const getLoginPath = (ctx: {loginPath: string}) => ctx.loginPath;

// factory provider
export const queryStringFactory = (ctx?: any) => (params: object) => qs(params);

// models providers
export const getResponse = (): SampleResponse => ({
    type: 'application/json',
    body: {},
    status: 200
});

// async provider
export const getStatus = () => new Promise(resolve => {
    setTimeout(() => resolve(404), 1000);
});