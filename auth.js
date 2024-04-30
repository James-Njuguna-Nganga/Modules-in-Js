
const users = [];

function addUser(username, password) {
    users.push({ username, password });
}

function authenticateUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

module.exports = {
    addUser,
    authenticateUser
}