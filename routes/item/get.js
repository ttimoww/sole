const express = require('express');
const router = express.Router();
const ItemDao = new(require('../../models/item/ItemDao'))
router.use(express.json());

router.get('/id/:id', (req, resp) => {
    ItemDao.getItemByID(req.params.id, (err, Item) => {
        if(err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong.'})
        }else if(!Item){
            resp.status(404);
            resp.json({message: `No product found with id ${req.params.id}`})
        }else{
            resp.status(200)
            resp.json(Item)
        }
    });
});

router.get('/keywords', (req, resp) => {
    if(req.query.keywords){
        const keywords = req.query.keywords.split('%')
        
        ItemDao.getItemsByKeywords(keywords, (err, items) => {
            if(err){
                resp.status(500);
                resp.json({message: 'Oops, something went wrong.'})
            }else if(!items){
                resp.status(404);
                resp.json({message: 'No products found with id'})
            }else{
                resp.status(200)
                resp.json({}) 
            }
        })   
    }else{
        resp.status(500)
        resp.json({message: 'No keywords found'})
    }
})

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