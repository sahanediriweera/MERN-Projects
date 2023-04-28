import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const ProductForm = ({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
    images
    }) => {

    const [title,setTitle] = useState(existingTitle || '');
    const [description,setDescription] = useState(existingDescription || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [goToProduct,setGoToProduct] = useState(false);
    const router = useRouter();

    const saveProduct = async (ev) => {
        ev.preventDefault();
        const data = { title, description, price};
        if(_id){
            await axios.put('/api/products',{...data,_id});
            router.push('/products',undefined,{shallow:false});
        }else{
            await axios.post('/api/products',data);
        }
        setGoToProduct(true);
    }

    if(goToProduct){
        router.push('/products');
    }
    
    const uploadImage=async(e)=>{
        const files = e.target?.files;
        if(files?.length>0){
            const data = new FormData();
            for(const file of files){
                data.append('file',file);
            }
            const res = await axios.post('/api/upload',data,{
                headers:{'Content-Type':'multipart/form-data'},
            });
            console.log(res.data);
        }
    }


    return(
            <form onSubmit={saveProduct} className="flex flex-col">
                <label placeholder="Product Name">
                    Product Name
                </label>
                <input type="text" placeholder="Product Name" value={title} onChange={e=>setTitle(e.target.value)}/>
                <label >
                    Photos
                </label>
                <div className="mb-2">
                    <label 
                    className="w-24 h-24 border text-center text-center 
                    flex flex-col items-center justify-center text-sm gap-2 cursor-pointer text-gray-500 rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                            Upload
                        </div>
                        <input type="file" onChange={uploadImage} className="hidden"/>
                    </label>
                    {!images?.length && (
                        <div>
                            No Photos in this Product
                        </div>
                    )}
                </div>
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