const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

var salt = bcryptjs.genSaltSync(10);

const UsersSchema = mongoose.Schema({
    username: {
        type: String,
        min: 3,
        max: 50,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: props => `${props.value} is not a valid email !`
        },
        required: true

    },
    password: {
        type: String,
        required: true
    },
    createdAt: Date
});

UsersSchema.pre('save', function (next) {
    var hash = bcryptjs.hashSync(this.password, salt);
    this.password = hash;
    next();
})

UsersSchema.methods.register = function () {
    return this.save();
}


UsersSchema.statics.login = function (email, password) {
    return new Promise((resolve, reject)=> {
        User.findOne({email})
            .then( user => {
                if (!user) return reject('User not found');
                bcryptjs.compare(password, user.password)
                    .then((res) =>  res ?  resolve(user) : reject('Wrong password'));
            });
    });
}

const User = mongoose.model('User', UsersSchema);


module.exports = User;
