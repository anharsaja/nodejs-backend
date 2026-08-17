import * as authService from "../services/auth.service.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        const user = await authService.login(email, password);

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        res.status(200).json({
            message: "Login successful",
            data: {
                id: user.user.id,
                name: user.user.name,
                email: user.user.email
            },
            token: user.token
        });
    } catch (error) {
        next(error);
    }
}

export {
    login
};