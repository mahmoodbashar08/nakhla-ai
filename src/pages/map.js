import React from 'react';
import {  Link } from "react-router-dom";


class Map extends React.Component{


    render(){
        return(
            <>
            <main>
              <h2>Welcome to the Map!</h2>
              <p>You can do this, I believe in you.</p>
            </main>
            <nav>
              <Link to="/">home</Link>
            </nav>
          </>
        )
    }
}


export default Map ;