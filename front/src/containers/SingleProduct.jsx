import React, { Component } from "react";
import Button from "../components/Button";
import { Jumbotron, Row, Col, Container, Image } from "react-bootstrap";
import Header from "../components/Header";
import { connect } from "react-redux";
import { fetchProduct } from "../store/actions/products";


class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.match.params.id    
    this.props.fetchProduct(id)
  }
  
  render() {    
    const hero = {
      backgroundColor: "#E2D5DA",
      heigth: "100px"
    };
    const wrapper = {
      backgroundColor: "#ffffff",
      heigth: "430px",
      boxShadow: "3px 3px 5px #00000035",
      padding: "45px"
    };
    const info = {
      marginTop: "38%",
      position: "relative",
      right: "20%"
    };
    const {product} = this.props
    console.log(product);
        
    return (
      <div>
        <Container fluid className="px-0" style={{ maxHeight: "100vh", overflow:"hidden" }}>
          <Row className="m-0 p-0" style={hero}>
            <Col md="8" className="px-0">
              <Image
                src={
                  product.imgURL
                }
                style={{ width: "100%" }}
                fluid
              />
            </Col>
            <Col md="3" className="px-0">
              <div style={info}>
                <Container style={wrapper}>
                  <h2
                    style={{
                      color: "#707070",
                      fontSize: "30px",
                      fontWeight: "600",
                      paddingBottom: "14px"
                      //   paddingTop: "15px"
                    }}
                  >
                    {product.name}
                  </h2>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "15px"
                      //   paddingBottom: "4px"
                    }}
                  >
                    {product.description}
                  </p>
                  <p
                    style={{
                      color: "#707070",
                      fontSize: "20px",
                      fontWeight: "600"
                    }}
                  >
                    ${product.price}
                  </p>
                </Container>
                <div
                  style={{
                    marginTop: "25px",
                    marginLeft: "auto",
                    display: "inline",
                    float: "right"
                  }}
                >
                  <Button buttonTxt={"Agregar"} buttonClass={"buttonDark"} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <br />
          <br />

          <Header>Comentarios</Header>
          <Row>
            <Col md="2">{/* <Image></Image> */}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = function(state, ownProps) {
  console.log(state);

  return {
    product: state.products.product
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
