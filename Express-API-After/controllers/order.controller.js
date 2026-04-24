const orderService = require("../services/order.service")



module.exports.PlaceOrder = async(req, res) =>{
try {
    const userId = req.user.id;
    const {items} = req.body;


    console.log("body items", items)
    let order = await orderService.PlaceOrder({userId, items})

    if(!order){
        return res.status(400).json({message: "can't place order right not. try again after sometime"})
    }
    
    return res.status(200).json({message: "Order Place Successfully", order})
} catch (error) {
    return res.status(400).json({message: error.message})
}
}