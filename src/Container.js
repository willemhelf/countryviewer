import React from 'react'

class Container extends React.Component {
   constructor() {
       super()

       this.state = {

       }
   }

   componentDidMount() {
       fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(json => console.log(json))
   }

   render() {
       return(
           <h1>HELLO THERE :)</h1>
       )
   }
}

export default Container