const express = require('express')
const app = express()
const PORT = 8083
app.use(express.json())


let users = [
    {
        "id": 1,
        "name": "Varsha",
        "age": 25
    },
    {
        "id": 2,
        "name": "Adarsh",
        "age": 30
    }]



app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/users", (req, res) => {//get all users
    res.status(200).json(users)
})


app.get("/users/:id", (req, res) => { //get the specific user

    const user_id = Number(req.params.id);
    const user = users.find((user) => user.id === user_id);

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    res.json(user);
});


app.post("/users", (req, res) => {
    const { name, age } = req.body

    const newUsers = {
        id: users.length + 1,
        name,
        age
    }
    if (!name || !age) {
        return res.status(400).json({
            message: "Name and Age"
        })
    }
    users.push(newUsers)
    res.status(201).json({
        message: "User Created Successfully"
    })
})




app.put("/users/:id", (req, res) => {
    const { name, age } = req.body
    const user_id = Number(req.params.id);
    const user = users.find((user) => user.id === user_id);

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    user.name = name
    user.age = age

    res.status(200).json({
        message: "User Updated successfully"
    })
})




app.delete("/users/:id", (req, res) => {
    const user_id = Number(req.params.id);

    const userIndex = users.findIndex((user) => user.id === user_id);

    if (userIndex === -1) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    users.splice(userIndex, 1);

    res.status(200).json({
        message: "User Deleted Successfully"
    });
});



app.listen(PORT, () => {
    console.log("Server Running...")
})