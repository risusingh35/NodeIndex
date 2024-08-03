const { Users } = require('../Model/index');

const getAllUsers = async () => {
    try {
        // const users = await Users.find({name:'Test 123'});
        const users = await Users.find({});
        const explanation = await users.explain('executionStats');
        console.log(JSON.stringify(explanation, null, 2));

        console.log(users);
        return users;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err; // Re-throw the error to be handled by the caller
    }
};

module.exports = { getAllUsers };
