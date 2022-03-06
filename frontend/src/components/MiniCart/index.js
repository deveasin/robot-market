import { GetStateValues } from "../../services/contexts/RobotContextProvider";
import MiniCartItem from "../MiniCartItem";
import NoResultFound from '../NoResultFound';
import { helperFunctions } from '../../utils/helperFunctions';
import {Alert} from 'antd';
import './index.css';

const MiniCart = () => {
    const { cartProducts } = GetStateValues();

    if(!Object.keys(cartProducts).length) {
        return (
        <>
            <NoResultFound message='No cart products are found.' />
            <br /> 
        </>
        )
    }

    const { formatPriceToBaht } = helperFunctions;

    const calculateTotalPrice = () => {
        let sum = Object.keys(cartProducts).reduce((total, key) => {
            let currentEl = cartProducts[key],
                calc = total + ( currentEl.price * currentEl.quantity );

            return calc;
        }, 0)

        return sum;
    }

    return (
        <div className="robot-minicart-wrapper">
            <h2 className="robot-minicart-title">Mini Cart</h2>
            <ul className="robot-minicart">
                {Object.keys(cartProducts).map(key => <MiniCartItem key={key} product={cartProducts[key]} /> )}
            </ul>

            <Alert className="robot-minicart-total-price" message={`Total Price: ${formatPriceToBaht(calculateTotalPrice())}`} type="success" />
        </div>
    )
}

export default MiniCart;