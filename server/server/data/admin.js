const bcrypt = require('bcryptjs')

const admin = [
    {
        name: process.env.ADMIN_NAME,
        dob: '1995-08-04',
        age: 25,
        contactNumber: process.env.ADMIN_CONTACT,
        email: process.env.ADMIN_EMAIL,
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        userType:1
    }
]

module.exports = admin 
