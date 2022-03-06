import { useEffect } from "react";
import { Row, Col } from 'antd';
import { GetStateValues, } from "../../services/contexts/RobotContextProvider";
import useApi from "../../services/Hooks/useApi";
import { apiEndpoints } from "../../utils/apiEndpoints";
import NoResultFound from "../NoResultFound";
import Spiner from "../Spiner";
import './index.css';
import ProductItem from "../ProductItem";

const ProductList = ({gutter = 20, span = 8}) => {
    const {storeProducts, products, materialType} =  GetStateValues();
    const [results, loading] = useApi(apiEndpoints.products);

    useEffect(() => {
        if(storeProducts && results.length) {
            storeProducts(results);
        }
    }, [results])

    // when api fatching, then calling this spiner
    if(loading === true) {
        return <Spiner />
    }

    // if there is no product found, then render no result message here
    if(!products.length) {
        return <NoResultFound />
    }

    /**
     * If materialType is being set from the select box, then the filtered product should show.
     */
    let FilteredProducts = materialType ? products.filter(product => product.material === materialType) : products;

    return (
        <Row gutter={gutter}>
            {FilteredProducts.map(product => (
                <Col key={product.createdAt} className="gutter-row" span={span} xs={24} md={12} xl={span}>
                    <ProductItem product={product} />
                </Col>
            ))}
        </Row>
    )
}

export default ProductList;