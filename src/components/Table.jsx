import { useEffect, useState } from 'react';
import EditModal from './EditModal';
import "../styles/Table.css";
import AddModal from './AddModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import ViewModal from './ViewModal';

const Table = ({products}) => {
  const [editModal , setEditModal] = useState(false);
  const [editId , setEditId] = useState();
  const [addModal , setAddModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewId, setViewId] = useState(null);

  useEffect(() => {
    console.log(editId);
  } , [editId]);

  const handleEditModal = () => {
    setEditModal(true);
  }

  const handleAddModal = () => {
    setAddModal(true);
  }

  const handleDelete = (id) => {
    if(window.confirm('ishonchingiz komilmi ?')) {
      axios.delete(`http://localhost:3001/Products/${id}`).then(data => {
        console.log(data);
      });
    } else {
      toast.error('item ni ochirish imkoni yoq');
    }
  }

  return (
    <div>
      { editModal ? ( <EditModal setEditModal={setEditModal} editId={editId} /> ) : null }
      { addModal ? <AddModal setAddModal={setAddModal} /> : null }
      {viewModal && (<ViewModal setViewModal={setViewModal} viewId={viewId} />)}

      <div className='table__add__btn__container'>
        <button onClick={handleAddModal} className='table__add__btn'> AddBtn <span> + </span> </button>
      </div>
        
    <table>
      <thead>
        <tr>
          <th> T/R </th>
          <th> Image </th>
          <th> Name </th>
          <th> Price </th>
          <th> Category </th>
          <th> Description </th>
          <th> Actions </th>
        </tr>
      </thead>

      <tbody>
      { products.length > 0 ? (
          products.map(({id , image , price , name , category , description}) => (
        <tr key={id}>
          <td> {id} </td>
          <td> <img src={image} width={'150'} height={'100'} alt="image" /> </td>
          <td> {name} </td>
          <td> {price} $ </td>
          <td> {category} </td>
          <td> {description} </td>
          <td className='table__buttons'> 
            <button className='table__view__btn' onClick={() => {
                setViewId(id);
                setViewModal(true);
            }} > View </button>
            <button className='table__edit__btn' onClick={() => {
              setEditId(id);
              handleEditModal();
            }}> Edit </button>
            <button className='table__delete__btn' onClick={() => {
              handleDelete(id);
            }} > Delete </button>
          </td>
        </tr>
          ))
        ) : null }
      </tbody>
    </table>
    </div>
  )
}

export default Table