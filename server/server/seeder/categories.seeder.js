const allCategories = require('./../data/categories')
const Categories = require('./../api/categories/categories.model')

const importCategories = async () => {
    try {
        const count = await Categories.countDocuments();
        if (count < 1) {
            await Categories.insertMany(allCategories)

            console.log('Categories imported'.green.inverse)
        }
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}

exports = module.exports = importCategories