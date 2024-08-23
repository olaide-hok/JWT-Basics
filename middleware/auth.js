const {UnauthenticatedError} = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    // check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided');
    }
    // get token
    const token = await authHeader.split(' ')[1];

    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        next();
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }
};

module.exports = authenticationMiddleware;
