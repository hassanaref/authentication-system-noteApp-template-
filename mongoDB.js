const mongoose = require('mongoose');
const userDB = require('./repositories/userDB');
mongoose.connect('mongodb://localhost/notes');
mongoose.connection
    .once('open', () => console.log('good to go!'))
    .on('error', (error) => {
        console.warn('warning', error);
    });

const addToDB = async function addUser(nameDB,emailDB,passwordDB,idDB) {
    const user = new userDB({
        name:nameDB,
        email:emailDB,
        password:passwordDB,
        id:idDB
    })
    await user.save()
};

const getUserId = async function getId() {
    
};
module.exports = addToDB;