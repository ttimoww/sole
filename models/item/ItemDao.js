const connection = require('../../db').connection
const Item = require('./Item')

class ItemDao{
    constructor(){
    }

    getItemByID(id, callback){
        // Needed: ID, id, name, sku , color, image, homepageProduct
        connection.query('SELECT * FROM item WHERE ID=?', [id], (err, res) =>{
            if (err){
                console.log(err);
                callback(true, false);
            }else if(res.length == 0){
                // nothing found
                callback(false, false)
            }else{
                let {id, name, sku, color, image, homepage_product} = res[0]
                homepage_product = homepage_product == 1 ? true : false
                const I1 = new Item(id, name, sku, color, image, homepage_product);
                callback(false, I1)
            }
        })
    }
}

module.exports = ItemDao;

