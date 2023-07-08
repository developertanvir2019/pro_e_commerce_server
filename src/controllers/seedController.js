const users = require("../models/userModel")


const usersData = [
    {
        name: 'anisul',
        email: 'tanvir@gmail.com',
        password: 123456,
        phone: '2839283',
        address: 'sylet,bd',
    },
    {
        name: 'anisul',
        email: 'tanvir@gmail.com',
        password: 123456,
        phone: '2839283',
        address: 'sylet,bd',
    },
]
const seedUser = async (req, res, next) => {
    try {
        await users.deleteMany({});
        // inserting new user
        const userss = await users.insertMany(usersData)
        return res.status(201).json(userss)
    } catch (error) {
        next(error)
    }
}

module.exports = { seedUser };