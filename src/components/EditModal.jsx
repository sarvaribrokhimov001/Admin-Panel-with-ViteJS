import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/EditModal.css";

const EditModal = ({setEditModal , editId}) => {
    const [formData , setFormData] = useState({
      id: editId,
      name: "",
      price: 0,
      category: "",
      image: "",
      description: ""
    });

    useEffect(() => {
       axios.get(`http://localhost:3001/Products/${editId}`).then((data) => {
        const response = data?.data;

        setFormData({
            name: response?.name, 
            price: response?.price,
            image: response?.image,
            category: response?.category,
            description: response?.description
        })
        console.log(response);
       });
    } , [editId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:3001/Products/${editId}` , formData).then((data) => {
            console.log(data); 
        });
    }

  return (
    <div className='edit__modal__container'>
        <form className='edit__modal__inputs' onSubmit={handleSubmit}>
            <input value={formData?.name} onChange={handleChange} type="text" placeholder='write product name' name='name' />
            <input value={formData?.price} onChange={handleChange} type="number" placeholder='write product price' name='price' />
            <input value={formData?.category} onChange={handleChange} type="text" placeholder='write product category' name='category' />
            <input value={formData?.image} onChange={handleChange} type="url" placeholder='upload product image' name='image' />
            <input value={formData?.description} onChange={handleChange} type="text" placeholder='write product description' name='description' />

            <div className='edit__modal__buttons__container'>
                <button className='edit__modal__submit__btn'> Submit </button>
                <button className='edit__modal__cancel__btn' onClick={() => {
                    setEditModal(false);
                }}> Cancel </button>
            </div>
        </form>
    </div>
  )
}

export default EditModal