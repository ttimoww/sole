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

