import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getPlanets();
  }, []); 
// console.log(store.planets);
  return (
    <div className="text-center mt-5">
      <h1>Planets</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.planets.map((planet,id) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={id}>
              {id==0?
              <img
              src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
              className="card-img-top"
              alt={planet.name}
            />
            // sino = :
            : 
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split("/")[5]}.jpg`}
                className="card-img-top"
                alt={planet.name}
              />
            }
              <div className="card-body">
                <h5 className="card-title"><strong>{planet.name}</strong></h5>
              </div>
              <Link to={"/singleplanet/" + (id+1)} >
              <button className="btn btn-outline-dark">
                mas info 
              </button> 
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
