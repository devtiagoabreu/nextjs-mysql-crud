import axios from 'axios';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';

function HomePage({ products }) {

  const renderProducts = () => {

    if (products.lenght === 0) 
      return <h1 className='text-center text-2x1 font-bold'>No Products yet</h1>

    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }

  return (
    <Layout>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4">
        { renderProducts() }
      </div>
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