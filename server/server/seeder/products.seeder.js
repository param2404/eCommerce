const allProducts = require('./../data/products')
const Products = require('./../api/products/products.model')

const importProducts = async () => {
    try {
        const count = await Products.countDocuments();
        if (count < 1) {
            await Products.insertMany(allProducts)

            console.log('Products imported'.green.inverse)
        }
    } catch (error) {
        console.error(`${error}`.red.inverse)
    }
}

exports = module.exports = importProducts