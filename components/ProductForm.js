import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


export function ProductForm() {

    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: 0,
    })

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (router.query.id) {
            const res = await axios.put('/api/products/' + router.query.id, product);
            console.log(res)
        } else{
            const res = await axios.post('/api/products', product);
            console.log(res)
        }
        
        router.push('/')
    }; 

    const handleChange = ({target: {name, value}}) => 
        setProduct({...product, [name]: value});

    useEffect(() => {
        const getProduct = async () => {
            const {data: product} = await axios.get('/api/products/' + router.query.id)
            setProduct(product)
        }

        if (router.query.id) {
            getProduct(router.query.id)
        }
    }, [])
    
    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text' 
                    name='name' 
                    id="name" 
                    onChange={handleChange} 
                    className="shadow border rounded py-2 px-3 text-gray-700" 
                    value={product.name}
                />

                <label htmlFor='price'>Price:</label>
                <input 
                    type='text' 
                    name='price' 
                    id="price" 
                    onChange={handleChange} 
                    className="shadow border rounded py-2 px-3 text-gray-700" 
                    value={product.price}
                />

                <label htmlFor='decription'>Description:</label>
                <textarea 
                    name='description' 
                    rows='2' 
                    onChange={handleChange} 
                    className="shadow border rounded py-2 px-3 text-gray-700"
                    value={product.description}>
                </textarea>

                <button 
                    className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white"
                >
                    {router.query.id ? 'Update Product' : 'Save Product'}
                </button>
            </form>
        </div>
    )
}
