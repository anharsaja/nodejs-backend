const getProducts = (req, res) => {
    res.json({
        data: [
            {
                id: 1,
                name: "Laptop",
                price: 1000,
            },
            {
                id: 2,
                name: "Smartphone",
                price: 500,
            },
        ]
    });
};

const createProducts = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({
            message: "Name and price are required",
        });
    }
    console.log(req.body);
    return res.status(201).json({
        message: "Product created",
        data: {
            name,
            price,
        },
    });
};

export { getProducts, createProducts };