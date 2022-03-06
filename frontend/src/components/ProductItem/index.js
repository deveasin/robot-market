import { Card, Button } from 'antd';
import { helperFunctions } from '../../utils/helperFunctions';
import { GetStateValues } from "../../services/contexts/RobotContextProvider";
import './index.css';

const ProductItem = ({product}) => {
    const { cartProducts, addProductToCart } =  GetStateValues();

    if(typeof product === 'undefined' || !Object.keys(product).length) { return '' } // checking if is content available or not

    const { formatDate, formatPriceToBaht }  = helperFunctions;

    let { image, name, price, stock, createdAt, material } = product;

    let cartProduct = cartProducts[createdAt]; // If the current product exist in the cart

    // if product exist in the cart, then calling this function to handleAddToCart callback
    const ifProductExitCart = () => {
        let cart = {[createdAt]: {...cartProduct, quantity: cartProduct.quantity + 1 }}
        addProductToCart(cart);
    }

    // if product is not exist in the cart, then calling this function to handleAddToCart callback
    const ifNewProductCart = () => {
        let cart = {[createdAt]: {...product, quantity: 1}}

        addProductToCart(cart);
    }

    // Add to cart button, click handler
    const handleAddToCart = () => {

        if(typeof cartProduct != 'undefined') { 
            if(cartProduct.stock > stock) {
                alert("Can't update this product, because it's out of stock.")
            } else {
                // if we find the current product in the cart, then just increasing the quantity.
                ifProductExitCart();
            } 
        } else { 
            // if alraedy total 5 products have been added to the cart, we are not adding more product to the cart. blocking here.
            if(Object.keys(cartProducts).length >= 5) { 
                alert("Can't add to the cart, because already have 5 unique products to the cart.");
                return;
             }

            // if we don't find product in the cart, then adding the product with quantity=1
            ifNewProductCart();
        }
    }


    // If current product in the cart, then we are calculating the stock.
    let updatedStock = typeof cartProduct != 'undefined' ? (stock - cartProduct.quantity) : stock;

    return (
        <div className='product-item'>
            <Card>
                {image && <div className='product-image'><img src={image} alt="Product" /></div>}   
                {name && <h4 className="product-title">{name}</h4>}
                {price && <span className="product-price"><strong>Price:</strong> {formatPriceToBaht(price)}</span>}
                {typeof stock !== 'undefined' && <span className="product-stock"><strong>Stock:</strong> {updatedStock}</span>}
                {createdAt && <span className="product-created-at"><strong>Date:</strong> {formatDate(createdAt)}</span>} {/* DD-MM-YYYY */}
                {material && <span className="product-material"><strong>Material:</strong> {material}</span>}
                <br />
                <Button onClick={handleAddToCart} disabled={updatedStock === 0} type="primary">Add to cart</Button>
            </Card>
        </div>
    )
}

export default ProductItem;