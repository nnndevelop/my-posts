import React from 'react'

const Tbody = (props ) => {
  return (
    <tr className='d-flex justify-content-between border p-3 bg-dark text-white'>
      <td>{props.number }</td>
      <td>{props.post.title}</td>
      <td>{props.post.stack}</td>
      <td>
        <button onClick={()=>{
        props.remove(props.post)
      }} className='btn btn-outline-danger' >
        delete
        </button>
        </td>
    </tr>

  )
}

export default Tbody