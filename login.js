const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const users = {
 admin: 'password123',
 user1: 'mypassword'
};
app.get('/', (req, res) => {
 res.send(`
 <h2>Login Form</h2>
 <form method="POST" action="/login">
 <label>Username:</label>
 <input type="text" name="username" required/><br/><br/>
 <label>Password:</label>
 <input type="password" name="password" required/><br/><br/>
 <button type="submit">Login</button>
 </form>
 `);
});
app.post('/login', (req, res) => {
 const { username, password } = req.body;

 if (users[username] && users[username] === password) {
 res.send(`<h2>Welcome, ${username}!</h2>`);
 } else {
 res.send('<h2>Invalid username or password. Try again!</h2>');
 }
});
app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});
