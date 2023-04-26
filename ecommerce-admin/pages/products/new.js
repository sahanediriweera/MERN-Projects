import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){

    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [price,setPrice] = useState();

    return(
        <Layout>
            <div className="flex flex-col">
                <h1 className="text-blue-900 mb-2 text-xl">
                    New Product
                </h1>
                <label placeholder="Product Name">
                    Product Name
                </label>
                <input type="text" placeholder="Product Name"/>
                <label placeholder="Description">
                    Description
                </label>
                <textarea placeholder="Description">
                </textarea>
                <label placeholder="Product Name">
                    Price
                </label>
                <input type="number" placeholder="Price"/>
                <button className="btn-primary">
                    Save
                </button>
            </div>

        </Layout>
    );
}