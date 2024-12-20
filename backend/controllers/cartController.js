import userModel from "../models/userModel.js"

const addToCart = async(req, res)=>{
    try {
        let userData = await userModel.findOne({_id: req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Added to cart"})
    } catch (error) {
        res.json({success: false, message: "Error adding the item"})
    }
}

const removeFromCart = async(req, res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1
        }
        
        await userModel.findByIdAndUpdate(req.body.userId, {cartData})
        res.json({success: true, message: "Removed from cart"})
    } catch (error) {
        res.json({success: false, message: "Error removing the item"})
    }
}

const getCart = async(req, res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        res.json({success: true, cartData})
    } catch (error) {
        res.json({success: false, message:"Error fetching cart data"})
    }
}

export { addToCart, removeFromCart, getCart};