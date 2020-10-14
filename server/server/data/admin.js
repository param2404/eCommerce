const bcrypt = require('bcryptjs')

const admin = [
    {
        name: 'Paramjeet',
        dob: '1995-08-04',
        age: 25,
        contactNumber: 9501463093,
        email: 'pkd2212870@gmail.com',
        password: bcrypt.hashSync('imadmin', 10),
        userType:1
    }
]

module.exports = admin 
