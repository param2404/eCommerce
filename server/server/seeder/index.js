const importUserTypes = require('./usertype.seeder')
const importCategories = require('./categories.seeder')
const importSubCategories = require('./subcategories.seeder')
const importProducts = require('./products.seeder')
const importAdmin =require('./admin.seeder')

async function seeder ()  {
    await importAdmin()
    await importUserTypes()
    await importCategories()
    await importSubCategories()
    await importProducts()
}

seeder()

module.exports = seeder