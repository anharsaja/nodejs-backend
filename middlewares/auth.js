//auth
const auth = (req, res, next) => {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
        return res.status(401).json({
            message: "API key is required",
        });
    }

    if (apiKey !== "rahasia") {
        return res.status(401).json({
            message: "Invalid API key",
        });
    }

    next();
};

export default auth;