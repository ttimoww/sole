const Size = require('./Size');
var mysql = require('mysql')
const connection = require('../../db').connection

class SizeDao{
    constructor(){

    }

    /**
     * Save sizes for an item
     * @param {Size} Size Size object
     * @param {Function} callback Callback function
     */
    saveSize(Size, callback){
        Size.sizes.forEach(size => {
            connection.query('INSERT INTO size (size, item_id) VALUES (?, ?)', [size, Size.itemID], (err, res) => {
                if(err){
                    callback(true);
                    console.log(err)
                }
            })
        }, callback())
    }

    /**
     * Get all sizes for an item
     * @param {integer} id Item id
     * @param {function} callback Callback Function
     */
    getSizesByProductId(id, callback){
        connection.query('SELECT * FROM size WHERE item_id = ?', [id], (err, sizes) => {
            if(err){
                callback(true, false);
                console.log(err)
            }else{
                let sizesArray = []
                sizes.forEach(size => {
                    const S1 = new Size(size.id, size.item_id, size.size)
                    sizesArray.push(S1)
                })
                callback(false, sizesArray)
            }
        })
    }
}

module.exports = SizeDao;