
function authenticationMiddleware(req, res, next) {
    console.log(req.cookies)
    if (req.cookies['login']) {
        return next();
    }
    res.status(401).end();
}

module.exports = {
    authenticationMiddleware
};;