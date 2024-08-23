const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
    const {username, password} = req.body;
    // check in controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }
    res.send('fake login/register/signup routes');
};

const dashboard = async (req, res) => {
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
