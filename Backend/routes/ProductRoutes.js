
const Products=(req,res)=>{
    res.status(200).json({
        Products:{
            productname:"Tv",
            Price:400
        }
    })
}
module.exports=Products;
