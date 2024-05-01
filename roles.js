
const userRoles = {};

const setUserRole = (username, role) => {
    userRoles[username] = role;
};

const getUserRole = (username) => {
    return userRoles[username];
};

module.exports = {
    setUserRole,
    getUserRole
};
