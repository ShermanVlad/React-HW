import React, {FC} from 'react';
import style from "./Product.module.css"
export interface IProductProps {
    "id": number,
    "title": string,
    "description": string,
    "price": number,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
    "brand": string,
    "category": string,
    "thumbnail": string,
    "images": string[]
}
const Product: FC<IProductProps> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}) => {
    return (
        <div
            className={style.product}>
            <h4>{id}</h4>
            <h1>{title}</h1>
            <img
                src={thumbnail}
                alt={title}>

            </img>
            <p>{description}</p>
            <h3>price: {price}</h3>
            <h3>discount: {discountPercentage}%</h3>
            <h4>rating: {rating}</h4>
            <h4>stock: {stock}</h4>
            <h4>brand: {brand}</h4>
            <h4>category: {category}</h4>
            <div className={style.images}>
                {
                    images.map((image, index) =>
                        <img key={index} src={image} alt={image} className={style.img}/>)
                }
            </div>
        </div>
    );
};

export default Product;