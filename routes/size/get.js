const express = require('express');
const router = express.Router();
const SizeDao = new(require('../../models/size/SizeDao'));
const Size = require('../../models/size/Size')
router.use(express.json());

router.get('/id/:id', (req, resp) => {
    if(req.params.id){
        SizeDao.getSizesByProductId(req.params.id, (err, sizes) => {
            if(err){
                resp.status(500);
                resp.json({message: 'Oops, something went wrong!'})
            }else if (!sizes.length){
                resp.status(404);
                resp.json({message: `No sizes found for product ID: ${req.params.id}`})
            }else{
                resp.status(200);
                resp.json({sizes})
            }
        })
    }else{
        resp.status(404);
        resp.json({message: 'No product ID given'})
    }
})

module.exports = router;