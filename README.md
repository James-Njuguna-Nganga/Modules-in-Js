What is a module?
    A module is just a file. One script is one module. As simple as that.

    Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

    export keyword labels variables and functions that should be accessible from outside the current module.
    import allows the import of functionality from other modules. 
    eg in our simple e-commerce project to test modules.
    auth.js exports:   
module.exports = {
    addUser,
    authenticateUser
}
Then in our main.js file is imported as below:
const { addUser, authenticateUser } = require('./auth');

The core module feartures compared to regular scripts are:
1.Modules always work in strict mode. E.g. assigning to an undeclared variable will give an error.
2.Each module has its own top-level scope. In other words, top-level variables and functions from a module are not seen in other scripts.
3.If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.
4.Async works on inline scripts.
5.To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
6.Duplicate external scripts are ignored.