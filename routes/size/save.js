const express = require('express');
const router = express.Router();
const SizeDao = new(require('../../models/size/SizeDao'));
const Size = require('../../models/size/Size')
router.use(express.json());

/**
 * Expected body: {itemID: int, sizes: array}
 */
router.post('/save', (req, resp) => {
    const s1 = new Size(null, req.body.itemID, req.body.sizes)
    SizeDao.saveSize(s1, err => {
        if(err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong!'})
        }else{
            resp.status(200);
            resp.json({message: 'Sizes succesfully saved.'})
        }
    })
})

module.exports = router;