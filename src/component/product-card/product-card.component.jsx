import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import {ProductCardContainer, Footer} from './product-card.styles';
const ProductCard = ({product}) =>{
    const {addItemToCart} = useContext(CartContext);
    const {name ,price ,imageUrl} = product ;
    const addProductToCart = () => addItemToCart(product);
    return(
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`} />
    <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </Footer>
    <Button onClick ={addProductToCart} buttonTypes={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </ProductCardContainer>
    );
}

export default ProductCard;