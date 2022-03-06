import { InputNumber } from 'antd';
import { helperFunctions } from '../../utils/helperFunctions';
import { GetStateValues } from "../../services/contexts/RobotContextProvider";
import './index.css';

const MiniCartItem = ({product}) => {
    const { cartProducts, addProductToCart, removeProductToCart } =  GetStateValues();
    
    const { image, name, price, quantity, createdAt, stock } = product;
    const { formatPriceToBaht } = helperFunctions;

    const removeCart = () => {
        let cart = {...cartProducts};
        delete cart[createdAt];

        removeProductToCart(cart);
    }

    const handleQuantity = (value) => {
        
        if(value > stock) {
            alert("Can't update the cart because this is out of stock.");

            return;
        }

        let cart = {...cartProducts, [createdAt]: {...product, quantity: value }}
        if(value <= 0) {
            removeCart()
            return;
        }
        addProductToCart(cart);
    }

    return (
        <li className='robot-minicart-item'>
            {image && <img className='product-img' src={image} alt="Product" />} 
            <div className='robot-minicart-item-content'>
                {name && <h4 className="product-title">{name}</h4>}
                {price && <span className="product-price"><strong>Price:</strong> {formatPriceToBaht(quantity * price)}</span>}
                <span className='robot-minicart-quantity-label'>Quantity:</span>
                <InputNumber size="small" style={{width: '80px'}} min={0} value={quantity} onChange={handleQuantity} />
            </div>  
            <a href="#" onClick={(e) => {
                e.preventDefault();
                removeCart();
            }} className='robot-minicart-remove'>x</a>
        </li>
    )
}

export default MiniCartItem