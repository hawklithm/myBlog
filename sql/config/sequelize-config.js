//sql config
var Sequelize = require('sequelize');
var sequelize = new Sequelize('hawky_object', 'root', 'root', {
    dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
    port:    3306 // or 5432 (for postgres)
});
sequelize
    .authenticate()
    .complete(function(err) {
        if (!!err) {
            console.log('Unable to connect to the database:', err)
        } else {
            console.log('Connection has been established successfully.')
        }
    });
exports.Sequelize=Sequelize;
exports.sequelize=sequelize;