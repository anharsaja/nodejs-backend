import * as userService from "../services/user.service.js";

const getUser = (req, res) => {
    const users = userService.getUser();
    res.json({
        data: users
    });
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }

    // create user in the service
    const user = userService.createUser(name, email);

    return res.status(201).json({
        message: "User created",
        data: user
    });
};

export { getUser, createUser };
