import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
// import auth from "./middlewares/auth.js";


//logger (mencatat setiap request yang masuk ke server)
const logger = (req, res, next) => {
    console.log("success ✅:",req.method, req.url);
    next();
};

//express
const app = express();

app.use(express.json());
// app.use(auth); // global auth
app.use(logger); // global logger anjay


app.get("/api", (req, res) => {
    res.send("Welcome to Backend API");
});

// products
app.use("/api/products", productRoutes);

// user
app.use("/api/users", userRoutes);


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});