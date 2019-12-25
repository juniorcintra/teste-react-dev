import React, { Component } from 'react'
import { fetchProducts } from '../../service/products-api'
import ProductsList from './ProductsList'
import { Row,Navbar,ProgressBar,NavItem,Tabs,Tab,Icon } from 'react-materialize'
import './Products.css';

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uShopProducts: [],
      otherProducts: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({uShopProducts: []})
    this.setState({otherProducts: []})
    this.setState({isLoading: true})

    setTimeout(() => {
      fetchProducts()
      .then(({ data: { data } }) => {

        const uShopProducts = data.filter(listProduct => listProduct.marketplace.nome === 'Ushop')
        this.setState({ uShopProducts })

        const otherProducts = data.filter(listProduct => listProduct.marketplace.nome !== 'Ushop')
        this.setState({ otherProducts })
      })
      .finally(() => {
        this.setState({isLoading: false})
      })
    }, 3000);
    
  }

  //
  render() {
    return (
      <Row>
        <Navbar brand="Teste Foco" />
        {this.state.isLoading ? <ProgressBar /> : ''}
        <h3> Vendidos pela Ushop</h3>
        <h5>Você adicionou {this.state.uShopProducts.length} produtos à sua sacola</h5>
        
        <ProductsList products={this.state.uShopProducts}></ProductsList>

        <br/>

        <h3>MarketPlace</h3>
        <ProductsList products={this.state.otherProducts}></ProductsList>
      </Row>
    )
  }
}

export default ProductsContainer