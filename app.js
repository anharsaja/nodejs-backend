import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import pool from "./databases/db.js";
import error from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";


//logger (mencatat setiap request yang masuk ke server)
const logger = (req, res, next) => {
    console.log("success ✅:",req.method, req.url);
    next();
};
//express
const app = express();
app.use(express.json());
app.use(logger); // global logger anjay
app.use("/api/auth", authRoutes); // auth routes



app.get("/api", (req, res) => {
    res.send("Welcome to Backend API");
});
// products
app.use("/api/products", productRoutes);
// user
app.use("/api/users", userRoutes);



app.use(error); // global error handler
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});