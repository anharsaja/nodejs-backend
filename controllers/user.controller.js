import * as userService from "../services/user.service.js";

const getUser = async (req, res, next) => {
    try {
        const users = await userService.getUser();
        res.json({
            data: users
        });
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required",
            });
        }
        const user = await userService.createUser(name, email);
        return res.status(201).json({
            message: "User created",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required",
            });
        }
        const user = await userService.updateUser(id, name, email);
        res.json({
            message: "User updated",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getUsersById(id);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        await userService.deleteUser(id);
        res.json({
            message: "User deleted",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

export { getUser, createUser, getUserById, updateUser, deleteUser };
