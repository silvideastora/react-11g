import React, { useState } from "react";

/*export default function Exercises() {
  const [USD, setUSD] = useState(0);
  const [MXN, setMXN] = useState(0);

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <form>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="USDInput">
                  USD
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="USDInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter USD"
                  value={Number(USD).toFixed(2)}
                  onChange={(event) => {
                    setUSD(event.target.value);
                    setMXN(event.target.value * 19.84);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="MXNInput">
                  MXN
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="MXNInput"
                  placeholder="Enter MXN"
                  value={Number(MXN).toFixed(2)}
                  onChange={({ target: { value } }) => {
                    setUSD(value / 19.84);
                    setMXN(value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default function Exercises () {
  const [cardNumber, setCardNumber] = useState();
  const [name, setName] = useState();
  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="d-flex col-10 col-md-6 bg-dark rounded h-50 align-items-center px-0">
          <div className="col p-5">
            <div class="card text-white bg-info mb-3">
              <div class="card-header text-light">BBVA</div>
              <div class="card-body">
                  <h5 class="card-title text-light"> {cardNumber}</h5>
                  <p class="card-text text-light">{name}</p>
              </div>
            </div>
            <form>
              <div className="form-group col-12">
                <label className="text-white" htmlFor="numberInput">
                  Tarjeta
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="numberInput"
                  placeholder="Enter credit card number"
                  value={cardNumber }
                  onChange={(event) => {
                    let newString = '';
                    let value = event.target.value.split('');
                    value.forEach((index) => {
                      if (index % 4 == 0 ) {
                        newString =+  `${value[index]}`
                      }
                    });
                    setCardNumber(event.target.value);
                  }}
                />
              </div>
              <div className="form-group col-12">
                <label className="text-white">
                  Nombre
                </label>
                <input
                  className="form-control"
                  id="nameInput"
                  placeholder="Enter Name"
                  value={name}
                  onChange={({ target: { value } }) => {
                    setName(value);
                  }}
                />
                <input 
                  type="number"
                  className="form-control"
                  placeholder= "CVC"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
    
  );
} */

  const petsData = {
    dogs: [
      {
        name: "Sr. Peabody",
        age: "5",
      },
      {
        name: "Solovino",
        age: "10",
      },
    ],
    cats: [
      {
        name: "Misifu",
        age: "1",
      },
      {
        name: "Nefermishi",
        age: "5",
      },
    ],
    parrots: [
      {
        name: "Garzolazo",
        age: "1",
      },
      {
        name: "Pancho",
        age: "5",
      },
    ],
  };
  

export default function Exercises() {
  const petsUI = Object.entries(petsData).map(([type, pets], index) => (
    <React.Fragment key={index}>
    <div className="card-header">{type}</div>
    <ul className="list-group list-group-flush">
  {pets.map(({name, age}, index) => <li key={index} className="list-group-item">Name:{name}, age:{age}</li>)}
    </ul>
  </React.Fragment>
  ));
  return (
    <div className="container">
      <div className="row justify-conten-center">
        <div className="col">
          <div className="card" style={{width: "18rem"}}>
            {petsUI}
          </div>
        </div>
      </div>
    </div>
  );
}