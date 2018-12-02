// Source: https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016

/**
 * Express middleware function which propgates errors up the middleware chain. 
 * Used to ensure errors are logged or handled by other middleware when async handler functions fail.
 */
export function asyncMiddleware(func) {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next))
            .catch(next);
    };
}
