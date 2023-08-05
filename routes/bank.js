const express = require ('express')
const {body} = require ('express-validator')
const {listBankController,createBankController,updateBankController,deleteBankController} = require ('../controllers/banks');
const BankModel = require('../models/bank');
const router = express.Router();


//routes
// view bank - get method
router.get('/bank/:id?', listBankController);
//create bank - post method
router.post('/bank',[
    body('name').trim().not().isEmpty().withMessage('Provide a name please'),
    body('location').trim().not().isEmpty().withMessage('Provide a location please'),
    body('branch').trim().not().isEmpty().withMessage('Provide a branch please'),
    body('phone').isMobilePhone('en-GH')
   

    .custom((value, {req})=>{
        return BankModel.findOne({'phone': value})
        .then(
            bankDoc => {
                if(bankDoc)
                return Promise.reject('phone number already taken');
            }
        )
    })
],createBankController);
//update bank - put method
router.put('/bank',updateBankController);
//delete bank - delete method
router.delete('/bank', deleteBankController);



module.exports = router;