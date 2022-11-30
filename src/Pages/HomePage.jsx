import React, { useEffect } from "react";
import Main_Page from "../Components/Main_Page";
import Navbars from "../Components/Navbars";
import { useState } from "react";
import Cart_List from "../Components/Cart_List";
import { toast } from "react-toastify";
const HomePage = () => {
  const [carts, setCarts] = useState([]);
  const [receives, setReceives] = useState([]);

  const [show, setShow] = useState(false);
  const [value, setValue] = useState(0);

  const addToCart = (data, indx) => {
    // setCarts([...carts, data]);
    // console.log("cart", data);
    // console.log("data", data.id);
    // console.log("data.id", data.id);
    // console.log("index", indx);
    //filter already exists carts
    const exists = carts.filter((i, ind) => i.id === data.id);
    if (!exists.length) {
      setCarts([...carts, data]);
      console.log("carst",carts);
      toast.success(`Item Successfully Added`);
    } else {
      toast.error(`Item Already Exist`);
    }
  };

  const handleShow = (ind) => {
    setShow(ind);
    console.log("show", show);
  };

  //increment
  const increment = (idx) => {
    setValue(value + 1);
    console.log("value");
  };

  //remove items in navbar carts
  const remove_item = (index) => {
    console.log(index);
    const removed = carts.filter((i, idx) => idx !== index);
    setCarts(removed);
  };

  const save = (receiveData) => {
    console.log("receiveData", receiveData);
    setReceives(receiveData);
  };

  useEffect(() => {
    console.log("cartsss", carts);
    console.log("recive", receives);
  }, []);

  return (
    <div>
      <Navbars card_Number={carts.length} handleShow={handleShow} />

      {show ? (
        <Cart_List
          cart={carts}
          increment={increment}
          remove={remove_item}
          setValue={setValue}
          value={value}
          receives={receives}
        />
      ) : (
         <Main_Page addToCart={addToCart} onSave={save} />
       
          
      )}
    </div>
  );
};

export default HomePage;
