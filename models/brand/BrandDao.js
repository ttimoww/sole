const connection = require('../../db').connection
const Brand = require('./Brand')

class BrandDao{
    constructor(){
    }

    /**
     * Returns all brands known to the app
     * @param {function} callback Callback function
     */
    findAll(callback){
        connection.query('SELECT * FROM brand', [], (err, res) => {
            if(err){
                console.log(err)
                callback(true, false)
            }else{
                let brands = [];
                res.forEach(brand => {
                    const B1 = new Brand(brand.id, brand.name)
                    brands.push(B1)
                })
                callback(false, brands)
            }
        })
    }

    /**
     * Find specific brand by ID
     * @param {integer} id Brand ID
     * @param {function} callback Callback function
     */
    findById(id, callback){
        connection.query('SELECT * FROM brand WHERE brand.id=?', [id], (err, brand) => {
            if (err){
                console.log(err);
                callback(true, false)
            }else{
                callback(false, brand[0])
            }
        })
    }
}

module.exports = BrandDao;