import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DeleteProductPage = () => {

    const [productInfo,setProductInfo] = useState('');
    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get(`/api/products?id=${id}`).then(
            response=>{
                setProductInfo(response.data);
            }
        );
    },[]);

    const goBack = () => {
        router.push('/products');
    }

    const deleteProduct = async() => {
        await axios.delete(`/api/products?id=${id}`).then(
            res=>{
                goBack();
            }
        )
    }

    return(
        <Layout>
            <div className="flex flex-col gap-2">
                Do you Really want to delete Product {productInfo.title}
                <div className="flex gap-2 justify-center">
                    <button onClick={deleteProduct} className="btn-red">
                        YES
                    </button>
                    <button onClick={goBack} className="btn-default">
                        No
                    </button>
                </div>

            </div> 

        </Layout>
    )
};

export default DeleteProductPage
