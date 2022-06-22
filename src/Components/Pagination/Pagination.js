import React from 'react'


const Pagination = ({setPageNumber}) => {

  let Next = () => {
    setPageNumber((x) => x + 1)
  }
  let Prev = () => {
    setPageNumber((x) => x - 1)
  }

  return (
    <div>
      <button onClick={Prev} className='btn btn-primary'>Prev</button>
      <button onClick={Next} className='btn btn-primary'>Next</button>
    </div>
  )
}

export default Pagination