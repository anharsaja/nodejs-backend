import * as authService from "../services/auth.service.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const result = await authService.login(email, password);

        if (!result) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        res.status(200).json({
            message: "Login successful",
            data: {
                id: result.user.id,
                name: result.user.name,
                email: result.user.email
            },
            token: result.token
        });
    } catch (error) {
        next(error);
    }
}

export {
    login
};