const express = require('express');
const router = express.Router();
const Item = require('../../models/item/Item')
const ItemDao = new(require('../../models/item/ItemDao'))
router.use(express.json());

router.get('/find/:id', (req, resp) => {
    ItemDao.getItemByID(req.params.id, (err, Item) => {
        if(err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong.'})
        }else if(!Item){
            resp.status(404);
            resp.json({message: `No product found with id ${req.params.id}`})
        }else{
            resp.status(200)
            const {id, name, sku, color, image} = Item;
            resp.json({
                id: id,
                name: name,
                sku: sku,
                color: color,
                image: image
            })
        }
    });
})

module.exports = router;