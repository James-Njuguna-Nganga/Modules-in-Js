
const userRoles = {};

function setUserRole(username, role) {
    userRoles[username] = role;
}

function getUserRole(username) {
    return userRoles[username];
}

module.exports = {
    setUserRole,
    getUserRole
};
