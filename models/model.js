const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const categories_model=new Schema({
    type:{type:String,default:true},
        color:{type:String,default:true}
})


const transaction_model=new Schema({
    name:{type:String, default:"Anonymous"},
    type:{type:String, default:true},
    amount:{type:Number},
    date:{type:Date,default:Date.now}

})

const Categories=mongoose.model('categories',categories_model)
const Transaction=mongoose.model('transaction',transaction_model);


module.exports={
    Categories,
    Transaction
}