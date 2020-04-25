const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {type: 'String', required: true},
    password: {type: 'String', required: true},
    rol: {type: Number, default: 0}
});

UserSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10); 
    const passwordHash = await bcrypt.hash(password, salt);
    return passwordHash;
}

UserSchema.methods.validatePassword = function (password)  {
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);