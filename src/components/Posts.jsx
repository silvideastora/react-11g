import React from 'react';

import AppCard from './AppCard';



const cardsData = {
    card1: [
      {
        title: "Aniversario Kodemia",
        content: "Los invitamos este 13 de junio a celebrar",
      }
    ],
    card2: [
        {
            title: "Aniversario Kodemia",
            content: "Los invitamos este 13 de junio a celebrar",
          }
    ],
    card3: [
        {
            title: "Aniversario Kodemia",
            content: "Los invitamos este 13 de junio a celebrar",
          }
    ],
  };




class Posts extends React.Component {
    cardUI = Object.entries(cardsData).map(([type, cards], index) => (
        <AppCard>
            <h5 className="card-title">{type}</h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>

        </AppCard>
    ))
    
    render() {
        return (
            <ul className="d-flex flex-column">
                {this.cardUI}
                
                
            </ul>
        )
    }
}

export default Posts

