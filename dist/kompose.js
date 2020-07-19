"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kompose = void 0;
exports.kompose = (...providers) => (factory) => (ctx) => factory(...providers.map(f => f(ctx)));
//# sourceMappingURL=kompose.js.map