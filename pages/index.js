import axios from 'axios';
import Link from 'next/link';
import { Layout } from '../components/Layout';

function HomePage({ products }) {
  return (
    <Layout>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <a>
            <div className="border boder-gray-200 shadow-md p-6">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </a>
        </Link> 
      ))}
    </Layout>
  );
}

export const getServerSideProps = async (context) => {

  const { data: products } = await axios.get(process.env.API_LOCAL_URL + 'products');

  return {
    props: {
      products,
    },
  };
};

export default HomePage;