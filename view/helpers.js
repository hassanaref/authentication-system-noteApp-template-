const userDB = require("../repositories/userDB")
module.exports = {
  getError(errors, prop) {
    try {
      return errors.mapped()[prop].msg;
    } catch (err) {
      return '';
    }
  },
  async  getName(id) { 
    const currentUser = await userDB.findOne({ id:id })
    const userName = currentUser[0].name;
    console.log(userName);
    return userName;
  }
};
