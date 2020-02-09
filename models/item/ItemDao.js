const connection = require('../../db').connection
const Item = require('./Item')
const SizeDao = new(require('./../size/SizeDao'));

class ItemDao{
    constructor(){
    }

    /**
     * Get item info by ID. Function also will return all sizes for the product if available.
     * @param {integer} id ProductID
     * @param {function} callback Callback function(error, item)
     */
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
                
                SizeDao.getSizesByProductId(id, (err, sizes) => {
                    if (err){
                        homepage_product = homepage_product == 1 ? true : false
                        const I1 = new Item(id, name, sku, color, image, homepage_product);
                        callback(false, I1)
                    }else if(!sizes.length){
                        homepage_product = homepage_product == 1 ? true : false
                        const I1 = new Item(id, name, sku, color, image, homepage_product);
                        callback(false, I1)
                    }else{
                        homepage_product = homepage_product == 1 ? true : false
                        const I1 = new Item(id, name, sku, color, image, homepage_product, sizes);
                        console.log(I1);
                        callback(false, I1)
                    }
                })
                
                
            }
        })
    }

    /**
     * Find all items with specific keywords
     * @param {array} keywords Array of keywords
     * @param {function} callback Callback function
     */
    getItemsByKeywords(keywords, callback){

        // SELECT * FROM mytable
        // WHERE column1 LIKE '%word1%'
        // OR column1 LIKE '%word2%'
        // OR column1 LIKE '%word3%'

        let query = 'SELECT * FROM item '
        keywords.map((keyword, index) => {

            if (index === 0){
                query += 'WHERE item.name LIKE "%?%" '
            }else{
                query += 'OR item.name LIKE "%?%"'
            }
        })

        connection.query(query, keywords, (err, items) => {
            if (err){
                console.log(error)
                callback(true, false)
            }else{
                console.log(items);
                callback(false, true)
            }   
        })
    }

    getHomePageItems(callback){
        connection.query('SELECT * FROM item WHERE homepage_product=1', (err, res) => {
            if (err){
                console.log(err)
                callback(true, false)
            }else{
                let items = []
                for (let i = 0; i < res.length; i++) {
                    let {id, name, sku, color, image, homepage_product} = res[i]
                    homepage_product = homepage_product == 1 ? true: false;
                    const I1 = new Item(id, name, sku, color, image, homepage_product)
                    items.push(I1);
                }
                callback(false, items)
            }
        })
    }
}

module.exports = ItemDao;

