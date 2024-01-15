const express = require('express');
const app = express();
const port = 5000;

// Define routes and middleware here
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
