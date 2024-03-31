import React, { useEffect, useState } from 'react';
import ProductCol from '../components/Products/Cards/ProductCol';
import FilterProduct from '../components/Filter/FilterProduct';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../apis/services/productService';

function Product() {
    const [products, setProducts] = useState<any[]>([]);

    const [params] = useSearchParams();

    const fetchProducts = async (queries: object) => {
        const result = await getProducts('/products', queries);
        if (result.status === 200) {
            setProducts(result.data.data);
        }
    };

    useEffect(() => {
        let param = [];

        for (let entry of params.entries()) {
            param.push(entry);
        }
        let queries: any = {};
        for (let i of param) {
            queries[i[0]] = i[1];
        }

        console.log(queries)

        fetchProducts(queries);
    }, [params]);

    return (
        <div>
            <div>
                <FilterProduct />
            </div>
            <div className="grid grid-cols-4 ml-[-20px]">
                {products.length > 0 &&
                    products.map((product, index) => (
                        <ProductCol key={index} product={product} />
                    ))}
            </div>
            {products.length <= 0 && (
                <h2 className="my-[20px] text-center text-[18px]">
                    No Data Found!
                </h2>
            )}
        </div>
    );
}

export default Product;
