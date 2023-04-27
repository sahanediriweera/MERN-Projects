import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

const handle = async(req,res)=>{
    const {method} = req;
    await mongooseConnect();
    if(method == 'POST'){
        const {title,description,price} = req.body;
        const productDoc = await Product.create({
            title,description,price
        });
        res.json(productDoc);
    }

    if(method == 'GET'){
        res.json(await Product.find());
    }
};

export default handle;