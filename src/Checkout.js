import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/BlackFriday/LandingPage/Q4_2020_BlackFriday_DO_LandingPage_Desktop_Hero_1500x150_V1.jpg"
          alt=""
        />

        <div>
          <h3>{user.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>

        <div className="checkout__right">
          <Subtotal />

          {/*subtotal*/}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
