const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open', (error) => {
        if (error) {
            console.log(error);
            return;
        }

        console.log('MongoDB ready!')
    });

    require('./../models/User');
    require('./../models/Role').initialize();
    require('./../models/User').seedAdmin();
    require('./../models/Article');
    require('./../models/Message');
    require('./../models/Profile');
    require('./../models/Listing');
    require('./../models/News');
};




