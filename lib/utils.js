"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertInvokable = void 0;
exports.assertInvokable = (func, errorMessage) => {
    if ('function' !== typeof func) {
        throw new Error(errorMessage);
    }
};
//# sourceMappingURL=utils.js.map