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
          <Row gutter={20}>
            <Col xl={{ span: 17, order: 1}} md={{ span: 16, order: 1}} xs={{ span: 24, order: 2}}>
              {/* Fiter layout */}
              <FilterByMaterial />

              {/* Product List */}
              <ProductList />  
            </Col>

            <Col xl={{ span: 7, order: 2}} md={{ span: 8, order: 2}} xs={{ span: 24, order: 1}}>
              {/* Mini Cart */}
              <MiniCart />
            </Col>
          </Row>
        </div>
      </div>
  );
}

export default App;
