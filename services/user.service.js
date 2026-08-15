const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com"
    }
];

const getUser = () => {
    return users;
};

const createUser = (name, email) => {
    const user = {
        id: users.length + 1,
        name,
        email,
    };

    users.push(user);

    return user;
};

export {
    getUser,
    createUser,
};