import React, { useReducer }  from 'react';
import { Row, Col } from 'antd';
import ProductList from './components/ProductList';
import Header from './components/Header';
import FilterByMaterial from './components/FilterByMaterial';
import MiniCart from './components/MiniCart';

function App() {
  return (
      <div className="robot-app">
        {/* Header layout */}
        <Header />
        <div className="container robot-app-container">
          <Row gutter={30}>
            <Col span={17}>
              {/* Fiter layout */}
              <FilterByMaterial />

              {/* Product List */}
              <ProductList />  
            </Col>

            <Col span={7}>
              {/* Mini Cart */}
              <MiniCart />
            </Col>
          </Row>
        </div>
      </div>
  );
}

export default App;
