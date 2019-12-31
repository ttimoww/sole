const express = require('express');
const router = express.Router();
const ItemDao = new(require('../../models/item/ItemDao'))
router.use(express.json());

router.get('/homepage', (req, resp) => {

    ItemDao.getHomePageItems((err, items) => {
        if (err){
            resp.status(500)
            resp.json({message: 'Oops, something went wrong!'})
        }else{
            resp.status(200)
            resp.json({items: items})
        }
    });
    
})

module.exports = router;
