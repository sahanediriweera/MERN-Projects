import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

const ProductForm = ({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice
    }) => {

    const [title,setTitle] = useState(existingTitle || '');
    const [description,setDescription] = useState(existingDescription || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [goToProduct,setGoToProduct] = useState(false);

    const saveProduct = async (ev) => {
        console.log('camehere');
        ev.preventDefault();
        const data = { title, description, price};
        if(_id){
            await axios.put('/api/products',{...data,_id});
        }else{
            await axios.post('/api/products',data);
        }
        setGoToProduct(true);
    }

    if(goToProduct){
        //router.push('/products');
    }


    return(
            <form onSubmit={saveProduct} className="flex flex-col">
                <label placeholder="Product Name">
                    Product Name
                </label>
                <input type="text" placeholder="Product Name" value={title} onChange={e=>setTitle(e.target.value)}/>
                <label placeholder="Description">
                    Description
                </label>
                <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}>
                </textarea>
                <label placeholder="Product Name">
                    Price
                </label>
                <input type="number" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)}/>
                <button className="btn-primary">
                    Save
                </button>
            </form>
    );
}

export default ProductForm;