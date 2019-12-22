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
}

module.exports = SizeDao;