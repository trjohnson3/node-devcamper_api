const errorHandler = (err, req, res, next) => {
    //log to console for developer
    console.log(err.stack);
    res.status(500).json({
        success: false,
        error: err.message
    });
};

module.exports = errorHandler;