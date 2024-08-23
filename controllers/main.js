const CustomAPIError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const {username, password} = req.body;
    // check in controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }

    // demo id using date
    const id = new Date().getDate();

    // try to keep the payload small, for better user experience
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.status(200).json({msg: 'user created', token});
};

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization;
    // check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomAPIError('No token provided', 401);
    }
    // get token
    const token = await authHeader.split(' ')[1];

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

module.exports = {
    login,
    dashboard,
};
