import { Users } from "../Model/index.js";
export const getAllUsers = async () => {
    try {
        // const users = await Users.find({name:'Test 123'});
        const users = await Users.find({});
        console.log(users);
        return users;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err; // Re-throw the error to be handled by the caller
    }
};
