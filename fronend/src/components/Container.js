import React from "react";
import "./style.css";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Container = ({ purpose, name, title, address, phone }) => {
  const product = { name, price: 5000 };
  const handelToken = async (token, addresses) => {
    const url = process.env.REACT_APP_CHECKOUT;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        product,
      }),
    });

    const data = await res.json();
    if (data.success === true) {
      toast.success("Paid successfully");
    } else {
      toast.error("Some error occurred");
    }
  };

  return (
    <>
      <div className="col-md-4">
        <div className="card my-3">
          <div className="card-body main_container">
            <div className="d-flex flex-column">
              <h4 className="card-title title_main">{title}</h4>
            </div>
            <div className="d-flex flex-column">
              <table className="table main_container">
                <tbody>
                  <tr>
                    <th>Purpose: </th>
                    <td>{purpose}</td>
                  </tr>
                  <tr>
                    <th>Name: </th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Address: </th>
                    <td>{address}</td>
                  </tr>
                  <tr>
                    <th>Phone No.: </th>
                    <td>{phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <StripeCheckout
              stripeKey={process.env.REACT_APP_PUBLIC_KEY}
              token={handelToken}
              amount={product.price}
              name={"Pay to " + title}
              billingAddress
              shippingAddress
            >
              <button type="button" class="btn btn-primary btn-sm">
                Book Place
              </button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
