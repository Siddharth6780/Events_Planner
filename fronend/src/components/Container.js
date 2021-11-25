import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import "./style.css";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Container = ({ purpose, name, title, address, phone, description, price, photo }) => {
  const product = { name, price };
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


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-4">
        <div className="card my-3">
          <div className="main_container">

            <article class="u-shadow-v18 g-bg-white text-center rounded g-px-20 g-py-40 g-mb-5">
              <img
                class="d-inline-block img-fluid mb-2"
                src={photo}
                alt="Image Description"
              />
              <h4 class="h5 g-color-black g-font-weight-600 g-mb-5 main_css">
                {title}
              </h4>
              <div className="d-flex justify-content-between">
                <div className="p-2 bd-highlight">
                  <span className="address_css">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    {address}
                  </span>
                </div>

                <div className=" p-2 bd-highlight">
                  <span class="d-block g-color-primary g-font-size-16">
                    <i class="fas fa-coins"></i> रु{price}
                  </span>
                </div>

                <div className="p-2 bd-highlight">
                  <span className="address_css">{purpose}</span>
                </div>
              </div>

            </article>

            <div className="container d-flex card-body">

              <div className="payment_container p-2 bd-highlight">
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



              <div className="cont ml-auto p-2 bd-highlight">

                <button type="button" class="btn btn-primary btn-sm" onClick={handleShow} >
                  Contact Details
                </button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="d-flex flex-column">
                      <table className="table main_container">
                        <tbody>
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
                          <tr>
                            <th>Description.: </th>
                            <td>{description}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
