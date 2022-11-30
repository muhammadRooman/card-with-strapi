import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
const Main_Page = ({ addToCart, onSave }) => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    (async () => {
      try {
        const fatchdata = await axios.get("https://fakestoreapi.com/products");
        setData(
          fatchdata.data.map((i) => {
            i.amount = 1;
            return i;
          })
        );
        //add new item in array object

        onSave(data);
        console.log("Data Arrayss", data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div>
      {data.length ? (
        <Container>
          <h6>All Items</h6>
          <Row md={4}>
            {data.map((item) => {
              return (
                <div>
                  <Col md={12}>
                    <Card className="carts">
                      <Card.Img
                        className="images"
                        variant="top"
                        src={item.image}
                      />

                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className="dis">
                          {item.description}
                        </Card.Text>

                        <span>⭐⭐⭐⭐⭐{item.rating.rate} / 5</span>
                        <h5>Price :{item.price}</h5>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          <Button
                            variant="outline-info"
                            onClick={() => addToCart(item)}
                          >
                            ADD TO CART
                          </Button>
                        </small>
                      </Card.Footer>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      ) : (
        <div className="main_loader">
          <span>Loading....</span> <div class="loader"></div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Main_Page;
