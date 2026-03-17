import { useState } from 'react';
import "../styles/AddModal.css";
import axios from 'axios';

const AddModal = ({ setAddModal }) => {
    const [addFormData , setAddFormData] = useState({
        name: "",
        price: 0,
        category: "",
        image: "",
        description: ""
    });

    const handleChange = (e) => {
        setAddFormData({
            ...addFormData,
            [e?.target?.name] : e?.target?.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/Products` , addFormData).then(data => {
            console.log(data?.data);
        });
        console.log(addFormData);
    }

  return (
    <div className='add__modal__container'>
        <form className='add__modal__inputs' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={addFormData?.name} type="text" name='name' />
            <input onChange={handleChange} value={addFormData?.price} type="number" name='price' />
            <input onChange={handleChange} value={addFormData?.category} type="text" name='category' />
            <input onChange={handleChange} value={addFormData?.image} type="url" name='image' />
            <input onChange={handleChange} value={addFormData?.description} type="text" name='description' />

            <div className='add__modal__buttons__container'>
                <button className='add__modal__submit__btn'> Submit </button>
                <button className='add__modal__cancel__btn' onClick={() => {
                    setAddModal(false);
                }}> Cancel </button>
            </div>
        </form>
    </div>
  )
}

export default AddModal