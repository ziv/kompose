import {factory, kompoze, provide} from '../src';
import config from './share/config';
import {getResponse, getStatus} from './share/providers';
import {SampleResponse} from './share/types';

// factory function
const responseFactory = (res: SampleResponse, status: number) => (body: object) => ({...res, status, body})

// if a provider or factory is async function, we use kompoze (z)
const composition = kompoze(provide(getResponse,getStatus), factory(responseFactory));

// from now on, everything is async
(async () => {
    const func = await composition(config);
    console.log(await func({foo: 'bar'}));
})();
