const mongoose = require('mongoose');

var database = "mongodb://localhost:27017/crudDB";
mongoose.connect(database, (err) => {
    if (!err)
        console.log('MongoDB Connection Succeeded');
    else
        console.log('Error in DB Connection : ' + JSON.stringify(err, undefined, 2));
})

module.exports = mongoose;