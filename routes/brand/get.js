const express = require('express');
const router = express.Router();
const BrandDao = new(require('../../models/brand/BrandDao'))
router.use(express.json());

router.get('/all', (req, resp) => {

    BrandDao.findAll((err, brands) => {
        if(err){
            resp.status(500);
            resp.json({message: 'Oops, something went wrong.'})
        }else{
            resp.status(200)
            resp.json({brands: brands})
        }
    })
})

router.get('/id/:id', (req, resp) => {
    BrandDao.findById(req.params.id, (err, brand) => {
        if (err) {
            console.log(err);
            resp.status(500);
            resp.json({message: 'Oops, something went wrong.'})
        }else if (!brand){
            resp.status(404);
            resp.json({message: `No product brand with id ${req.params.id}`})
        }else{
            resp.status(200);
            resp.json({brand})
        }
    })
})

module.exports = router;