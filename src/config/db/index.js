const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log("Connect succesfully");
    } catch (error) {
        console.log("Connect failse");
    }
}

module.exports = { connect }