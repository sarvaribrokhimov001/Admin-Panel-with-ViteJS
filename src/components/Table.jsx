import React, { useEffect, useState } from 'react'
import EditModal from './EditModal';

const Table = ({products}) => {
  // console.log(products);
  const [editModal , setEditModal] = useState(false);
  const [editId , setEditId] = useState();


  useEffect(() => {
    console.log(editId);
  } , [editId]);

  const handleEditModal = () => {
    setEditModal(true);
  }

  return (
    <div>

      { editModal ? ( <EditModal setEditModal={setEditModal} editId={editId} /> ) : null }
        
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

      {
        products.length > 0 ? (
          products.map(({id , image , price , name , category , description}) => (
        <tr key={id}>
          <td> {id} </td>
          <td> <img src={image} width={'80'} height={'80'} alt="image" /> </td>
          <td> {name} </td>
          <td> {price} $ </td>
          <td> {category} </td>
          <td> {description} </td>
          <td> 
            <button> View </button>
            <button onClick={() => {
              setEditId(id);
              handleEditModal();
            }}> Edit </button>
            <button> Delete </button>
          </td>
        </tr>
          ) )
        ) : null
      }

      </tbody>
    </table>

    </div>
  )
}

export default Table