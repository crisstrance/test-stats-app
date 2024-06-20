import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


export const Starships = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getStarships();
  }, [actions]);

  return (
    <div className="text-center mt-5">
      <h1>Starships</h1>
      <div className="card-group">
        <div className="d-flex flex-row overflow-scroll">
          {store.starships.map((starship) => (
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }} key={starship.uid}>
              {/* Corrected image source URL */}
              <img
                src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/")[5]}.jpg`}
                className="card-img-top"
                alt={starship.name}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>{starship.name}</strong></h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
