import axios from 'axios'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Layout } from '../../components/Layout'

function ProductPage({ product }) {

    const router = useRouter()

    const handleDelete = async (id) => {
        try {
            await axios.delete('/api/products/' + id)
            router.push('/products/')
        } catch (error) {
            toast.error('Erro ao atualizar ou adicionar o produto, detalhes: ' + error.response.data.message);
        }
    };

    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <button
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded"
                onClick={() => handleDelete(product.id)}
            >
                delete
            </button>
            <button
                className="bg-yellow-600 hover:bg-yellow-800 ml-2 text-white px-5 py-2 rounded"
                onClick={() => router.push("/products/edit/" + product.id)}
            >
                edit
            </button>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {

    const { data: product } = await axios.get(process.env.API_LOCAL_URL + 'products/' + context.query.id)

    return {
        props: {
            product,
        },
    };
}

export default ProductPage;