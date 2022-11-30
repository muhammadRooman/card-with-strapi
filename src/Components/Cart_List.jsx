
import { Card, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const Cart_List = ({ cart, remove }) => {
  const [CART, setCART] = useState([]);
  const data = JSON.parse(localStorage.getItem("items"));
  localStorage.setItem("items", JSON.stringify(cart));
  useEffect(() => {
    return () => {
      const data = JSON.parse(localStorage.getItem("items"));
      if (cart?.length > 0) {
        if (data?.length > 0) {
          setCART([...cart, ...data]);
          localStorage.setItem("items", JSON.stringify([...cart, ...data]));
        } else {
          setCART(cart);
          localStorage.setItem("items", JSON.stringify(cart));
        }
      } else if (data?.length > 0) {
        setCART(data);
      } else {
        setCART(cart);
        localStorage.setItem("items", JSON.stringify(cart));
      }
    };

  
  }, [cart]);

  return (
    <div>
      <h1>Cart_List</h1>
      <Container>
        <Row md={3}>
          {CART.map((i, idx) => {
            return (
              <div>
                <Col md={12}>
                  <Card className="cart_carts">
                    <Col>
                      <Card.Img
                        className="cart_images"
                        variant="top"
                        src={i.image}
                      />
                      <button
                        className="remove_button"
                        onClick={() => remove(idx)}
                      >
                        Remove
                      </button>
                    </Col>
                    <Card.Body>
                      <Card.Title>{i.title}</Card.Title>
                      <h5 className="pirce">Price :{i.price * i.amount}</h5>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        <span className="Quantity">Quantity : </span>
                        <button
                          disabled={i.amount <= 1 ? "disabled" : ""}
                          onClick={() => {
                            const roo = CART.map((item, index) => {
                              return idx === index
                                ? { ...item, amount: i.amount - 1 }
                                : item;
                            });
                            setCART(roo);
                          }}
                        >
                          -
                        </button>

                        <span>{i.amount}</span>
                        <button
                          disabled={i.amount >= 5 ? "disabled" : ""}
                          onClick={() => {
                            const roo = CART.map((item, index) => {
                              return idx === index
                                ? { ...item, amount: i.amount + 1 }
                                : item;
                            });
                            setCART(roo);
                          }}
                        >
                          +
                        </button>
                      </small>
                    </Card.Footer>
                  </Card>
                  <br></br>
                </Col>
              </div>
            );
          })}
          <div className="total_card">
            <h3>
              Total Amount $
              {CART.map((i) => Math.round(i.price * i.amount)).reduce(
                (p, c) => p + c,
                0
              )}
            </h3>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Cart_List;