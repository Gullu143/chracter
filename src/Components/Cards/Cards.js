import React, {useState, useEffect} from 'react'
import Pagination from '../Pagination/Pagination';


const Cards = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let {results} = fetchedData
  console.log(pageNumber)
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()

  }, [api])

  let display;
  if(results){
    display = results.map(chracters  => {
      return(
        <div className='col-md-3 mb-4'>
          <div className='card position-relative' key ={chracters.id}>
            <div className='card-body'>
                <img src={chracters.image} className="img-fluid mb-3" alt={chracters.image} />
              <h6>{chracters.name}</h6> 
              <p>{chracters.location.name}</p> 
              {(()=> {
                if(chracters.status === "Dead" ){
                  return(
                    <p className='badge badge-danger'>{chracters.status}</p>
                  );
                }
                else if (chracters.status === "Alive") {
                  return(
                    <p className='badge badge-success'>{chracters.status}</p>
                  );
                }
                else {
                  return(
                    <p className='badge badge-secondary'>{chracters.status}</p>
                  )
                }
              })()}
               
            </div>
          </div>
        </div>
      );

    });
  }
  else {
   display = "no chracter found";
  }




  return (
    <>
    <div className='row'>
        {display}
    </div>
    <Pagination setPageNumber={setPageNumber} />
    </>
  )
}

export default Cards