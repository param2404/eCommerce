const usertypes = require('./../data/usertypes')
const UserType = require('./../api/usertype/usertype.model')

const importUserTypes = async () => {
    try {
        const count = await UserType.countDocuments();
        if (count < 1) {
            await UserType.insertMany(usertypes)

            console.log('User types imported'.green.inverse)
        }
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}

exports = module.exports = importUserTypes