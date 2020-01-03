import React, { Component } from "react";
import { fetchProducts } from "../../service/products-api";
import ProductsList from "./ProductsList";
import {
  Row,
  Navbar,
  ProgressBar,
  NavItem,
  Tabs,
  Tab,
  Icon,
  TextInput,
  Footer
} from "react-materialize";
import { Nav, Image, InputGroup, FormControl,Jumbotron, Button } from 'react-bootstrap';
import "./Products.css";

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uShopProducts: [],
      otherProducts: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ uShopProducts: [] });
    this.setState({ otherProducts: [] });
    this.setState({ isLoading: true });

    setTimeout(() => {
      fetchProducts()
        .then(({ data: { data } }) => {
          const uShopProducts = data.filter(
            listProduct => listProduct.marketplace.nome === "Ushop"
          );
          this.setState({ uShopProducts });

          const otherProducts = data.filter(
            listProduct => listProduct.marketplace.nome !== "Ushop"
          );
          this.setState({ otherProducts });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }, 1000);
  }

  //
  render() {
    return (
      <Row className="rowbottom">
        <Nav className="d-flex flex-row justify-content-center" activeKey="/home">
          <Nav.Item className="navimage">
            <Image src="images/ushop.png" fluid />
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" href="/home">Masculino</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" eventKey="link-1">Feminino</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" eventKey="link-2">Infantil</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" eventKey="link-2">Acessórios</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" eventKey="link-2">Casa</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Nav.Link className="navlink" eventKey="link-2">Esporte</Nav.Link>
          </Nav.Item>
          <Nav.Item className="navitem2">
            <Nav.Link className="navlink" eventKey="link-2">Bem Vindo!</Nav.Link>
            <br></br>
            <label className="label_nome">Cláudio Couto</label>
          </Nav.Item>
          <Nav.Item className="navitem">
            <Image className="foto_user" src="images/foto-user.jpg" roundedCircle />
          </Nav.Item>
          <Nav.Item className="navitem">
            <Image className="foto_user2" src="images/menu.png" roundedCircle />
          </Nav.Item>
        </Nav>
        <Nav className="navborder"><p className="text-center bordernav"></p></Nav>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="navitem3">
            <Nav.Link className="navlink2" eventKey="link-2">Todos os Produtos</Nav.Link>
            <br></br>
            <label className="label_produtos">Produtos > Todos os Produtos</label>
          </Nav.Item>
        </Nav>
        {this.state.isLoading ? <ProgressBar classNome="progress"/> : ""}
        <div class="divTitulo1">
          <h3> Vendidos pela UShop</h3>
          <h5>
            Você adicionou {this.state.uShopProducts.length} produtos à sua sacola
          </h5>
        </div>
        <div class="page-sacola">
          <div class="produtos">
            <ProductsList products={this.state.uShopProducts}></ProductsList>
          </div>
          <div class="carrinho">
            <Jumbotron className="jumbotron">
              <h5>Resumo do Pedido:</h5>
              <div class="total_produtos">
                <p class="total_produtos_titulo">Total em produtos:</p>
                <p>R$ 777,00</p>
              </div>
              <div class="total_produtos2">
                <p>5 Produtos Adicionados</p>
                <p><b>Total:</b> R$ 802,00</p>
              </div>
              <p>
                <Button className="button_carrinho" variant="primary">Finalizar Compra</Button>
              </p>
              <p>
                <Button className="button_carrinho2" variant="light">Escolher Mais Produtos</Button>
              </p>
            </Jumbotron>
          </div>
        </div>
        
        <br />

        <div class="divTitulo2">
          <h3>MarketPlace</h3>
          <h5>
            Você adicionou {this.state.otherProducts.length} produtos à sua sacola
          </h5>
        </div>
        
        <div class="page-sacola">
          <div class="produtos2">
            <ProductsList products={this.state.otherProducts}></ProductsList>
          </div>
        </div>
        <Footer
          className="footer-page"
          copyrights="Desenvolvido por Foco Comunicação"
        > 
          <div class="flex">
            <div class="desc_loja">
              <h5 className="white-text">
                <Image src="images/ushop.png" fluid />
              </h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
              <p className="white-text">
                <Image className="icons-social" src="images/instagram.jpg" fluid />
                <Image className="icons-social" src="images/facebook.png" fluid />
                <Image className="icons-social" src="images/linkedin.png" fluid />
              </p>
            </div>
            
            <div class="menu_footer">
              <h5>Menu:</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Masculino</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Feminino</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Infantil</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Acessórios</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Casa</a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">Esporte</a>
                </li>
              </ul>
            </div>
            <div class="div_pagamento">
              <h5>Formas de Pagamento:</h5>
              <Image className="pagamento" src="images/pagamento.jpg" fluid />
              <p>Atendimento:</p>
              <span>(24) 3303-3303   |   (24) 99909-9909
              <br></br>
              Ou mande um e-mail para: sac@fococomunicacao.com</span>
            </div>
          </div>
        </Footer>
      </Row>
    );
  }
}

export default ProductsContainer;
