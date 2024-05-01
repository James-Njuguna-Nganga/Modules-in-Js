
const users = [];

const addUser = (username, password) => {
    users.push({ username, password });
};

const authenticateUser = (username, password) => {
    return users.some(user => user.username === username && user.password === password);
};

module.exports = {
    addUser,
    authenticateUser,
    users
}