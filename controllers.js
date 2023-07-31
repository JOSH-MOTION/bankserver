 
 const BankModel = require('./model')
 //controllers
const listBankController = (req, res) => {
    //list all banks
    const {id} = req.params

    if(id){
        BankModel.find({_id: id}).then( banks =>{
            res.json({data: banks});
        }).catch(err =>console.log(err));
    }else{
        BankModel.find().then( banks =>{
            res.json({data: banks});
        }).catch(err =>console.log(err));
    }
  
    
}

const createBankController = (req, res) => {
    //create a bank
    const {name, location, branch, phone, address, accountNumber} = req.body;

    const bank = new BankModel({name, location, branch, phone, address, accountNumber});

    bank.save().then ( result => {
        res.json({message: "create successful", data: result});
    }).catch(error => console.log(error));

    

}

// const updateBankController = (req, res) => {
//     //update all banks
//     const {name, location, branch, phone, address, accountNumber} = req.body;
    
//     const updatedBank = BankModel.update({name, location, branch, phone, address, accountNumber});
//     res.json({message: "update successful", data: updatedBank});
// }

// const deleteBankController = (req, res) => {
//     //delete all banks
//     const {name} = req.body;
//     const deletedBank= BankModel.delete({name});
//     res.json({message:"bank deleted", data: deletedBank})
// };

module.exports = {
    listBankController,
    // updateBankController,
    createBankController,
    // deleteBankController
}