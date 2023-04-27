import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewProduct(){

    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [price,setPrice] = useState();
    const [goToProduct,setGoToProduct] = useState(false);
    const router = useRouter();

    const createProduct = async (ev) => {
        ev.preventDefault();
        const data = { title, description, price};
        await axios.post('/api/products',data);
        setGoToProduct(true);
    }

    if(goToProduct){
        router.push('/products');
    }

    return(
        <Layout>
            <form onSubmit={createProduct} className="flex flex-col">
                <h1 className="text-blue-900 mb-2 text-xl">
                    New Product
                </h1>
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

        </Layout>
    );
}