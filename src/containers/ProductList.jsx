import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'https://fakestoreapi.com/products';

const ProductList = () => {
	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
