const importUserTypes = require('./usertype.seeder')
const importCategories = require('./categories.seeder')
const importSubCategories = require('./subcategories.seeder')

async function seeder ()  {
    await importUserTypes()
    await importCategories()
    await importSubCategories()
}

seeder()

module.exports = seeder