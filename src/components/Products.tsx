import React, {
    FC,
    useEffect,
    useState
}
    from 'react';
import Product, {
    IProductProps
} from "./Product";

const Products: FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => {
                setProducts(products)
            });
    },[])

    return (
        <div>
            {
                products.map(({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}: IProductProps)=>(<Product key={id}
                                                                                                                                                                thumbnail={thumbnail}
                                                                                                                                                                id={id}
                                                                                                                                                                title={title}
                                                                                                                                                                brand={brand}
                                                                                                                                                                category={category}
                                                                                                                                                                description={description}
                                                                                                                                                                discountPercentage={discountPercentage}
                                                                                                                                                                price={price}
                                                                                                                                                                rating={rating}
                                                                                                                                                                stock={stock}
                                                                                                                                                                images={images}/>))
            }
        </div>
    );
};

export default Products;