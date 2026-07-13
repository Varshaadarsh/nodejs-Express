const users = require("../models/userModels");

// GET /users
const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

// GET /users/:id
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);
};

// POST /users
const createUser = (req, res) => {
    const { name, age } = req.body;

    if (!name || age === undefined) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
};

// PUT /users/:id
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, age } = req.body;

    if (name) user.name = name;
    if (age !== undefined) user.age = age;

    res.status(200).json({
        message: "User updated successfully",
        user
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
};