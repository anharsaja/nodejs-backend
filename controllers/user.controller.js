import * as userService from "../services/user.service.js";

const getUser =  async (req, res) => {
    const users = await userService.getUser();
    res.json({
        data: users
    });
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUsersById(id);
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    res.json({
        data: user
    });
};

const createUser = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    // create user in the service
    const user = await userService.createUser(name, email);

    return res.status(201).json({
        message: "User created",
        data: user
    });
};

export { getUser, createUser, getUserById };
