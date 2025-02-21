export const errorHandler = (err, req, res, next) => {
    if (err.name && err.name == 'ValidationError') {
        res.status(400).json({
            error: err.message
        });
        return;
    }

     if (err.name && err.name == 'UnauthorizedError') {
        res.status(401).json({
            error: err.message
        });
        return;
    }

    if (res.headersSent) {
        return next(err);
    }

        // console.log("Error",res);
        
    res.status(500).json({
        message: 'Something went wrong',
    });
}