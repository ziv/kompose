"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kompoze = exports.kompose = exports.factory = exports.provide = void 0;
const utils_1 = require("./utils");
function provide(...factories) {
    factories.forEach(f => utils_1.assertInvokable(f, 'provider must be a function'));
    return () => factories;
}
exports.provide = provide;
function factory(factoryFunction) {
    utils_1.assertInvokable(factoryFunction, 'factory must be a function');
    return () => factoryFunction;
}
exports.factory = factory;
function kompose(providers, main) {
    return function (ctx) {
        return main()(...providers().map(f => f(ctx)));
    };
}
exports.kompose = kompose;
function kompoze(providers, main) {
    return function (ctx) {
        return Promise
            .all(providers().map(f => Promise.resolve(f(ctx))))
            .then(params => main()(...params));
    };
}
exports.kompoze = kompoze;
//# sourceMappingURL=kompose.js.map