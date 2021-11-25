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
          <div className="main_container">
            
            <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
                <img
                  class="d-inline-block img-fluid mb-2"
                  src="https://cdn0.weddingwire.in/vendor/5985/3_2/640/jpeg/abe63f39-6053-4688-b6c2-845d40cd38fb_15_355985-162737263512015.webp"
                  alt="Image Description"
                />
                <h4 class="h5 g-color-black g-font-weight-600 g-mb-5 main_css">
                  {title}
                </h4>
                <div className="d-flex bd-highlight">
                  <div className=" p-2 bd-highlight">
                    <span className="address_css">
                      <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                      {address}
                    </span>
                  </div>

                  <div className="ml-auto p-2 bd-highlight">
                    <span className="address_css">{purpose}</span>
                  </div>
                </div>
                <span class="d-block g-color-primary g-font-size-16">
                  <i class="fas fa-coins"></i> $50.00
                </span>
              </article>

            <div className="payment_container card-body">

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
      </div>
    </>
  );
};

export default Container;
