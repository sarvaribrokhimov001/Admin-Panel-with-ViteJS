import React from 'react'

const Table = ({products}) => {
  console.log(products);

  return (
    <div>
        
    <table>
      <thead>
        <tr>
          <th> T/R </th>
          <th> Image </th>
          <th> Name </th>
          <th> Price </th>
          <th> Category </th>
          <th> Actions </th>
        </tr>
      </thead>

      <tbody>

      {
        products.length > 0 ? (
          products.map(({id , image , price , name , category}) => (
        <tr key={id}>
          <td> {id} </td>
          <td> <img src={image} width={'80'} height={'80'} alt="image" /> </td>
          <td> {name} </td>
          <td> {price} $ </td>
          <td> {category} </td>
          <td> 
            <button> View </button>
            <button> Edit </button>
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