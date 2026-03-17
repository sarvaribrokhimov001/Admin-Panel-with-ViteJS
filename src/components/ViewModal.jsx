import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/ViewModal.css";

const ViewModal = ({ setViewModal, viewId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (viewId) {
      axios.get(`http://localhost:3001/Products/${viewId}`).then((res) => {
          setProduct(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
  }, [viewId]);

  return (
    <div className="view__modal__container">
      <div className="view__modal__content">
        
        {product ? (
          <>
            <img className="view__modal__image" src={product.image} alt={product.name} />
            <h2 className="view__modal__title"> {product.name} </h2>
            <p> <span> Price: </span> {product.price} $ </p>
            <p> <span> Category: </span> {product.category} </p>
            <p> <span> Description: </span> {product.description} </p>
          </>
        ) : (
          <p> Loading... </p>
        )}

        <button className="view__modal__close__btn" onClick={() => setViewModal(false)}> Close </button>
      </div>
    </div>
  );
};

export default ViewModal;