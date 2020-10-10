const allSubCategories = require('./../data/subcategories')
const SubCategories = require('./../api/subcategories/subcategories.model')

const importSubCategories = async () => {
    try {
        const count = await SubCategories.countDocuments();
        if (count < 1) {
            await SubCategories.insertMany(allSubCategories)

            console.log('SubCategories imported'.green.inverse)
        }
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}

exports = module.exports = importSubCategories