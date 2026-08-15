
const getUsers = (req, res) => {
    res.json({
        data: [
            {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com"
            },
            {
                id: 2,
                name: "Jane Smith",
                email: "jane.smith@example.com"
            }
        ]
    });
};

const createUsers = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required",
        });
    }
    return res.status(201).json({
        message: "User created",
        data: {
            name,
            email,
        },
    });
};

export { getUsers, createUsers };
