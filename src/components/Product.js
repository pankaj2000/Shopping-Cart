import React from "react";

export default function Product(props) {
  //  console.log(props.index);
  return (
    <div className="row align-items-center my-2">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">
            ₹ {props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
            disabled={props.product.quantity <= 0}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        <h4>₹ {props.product.price * props.product.quantity}</h4>
      </div>

      <div className="col-2">
        <button
          className="col-6 btn btn-danger"
          onClick={() => props.removeItem(props.index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
