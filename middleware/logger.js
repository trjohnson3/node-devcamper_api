//@desc     logs request to console
const logger = (req, res, next) => {
    console.log(`${ req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}}`);
    next(); //needed for all middleware
};

module.exports = logger;