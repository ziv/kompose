
export const assertInvokable = (func: any, errorMessage: string) => {
    if ('function' !== typeof func) {
        throw new Error(errorMessage);
    }
};