import React from 'react'
import './Home.css'
  
  function Category(props:any) {
      return (
          <>
              <div className="container">
                  <h1>{props.data.category}</h1>
              </div>
          </>
      )
  }
  
  export default Category
