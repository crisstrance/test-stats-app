import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getSingleCharacter(theid)
	}, [])

	return (
		<div>
			<img
                src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
                className="card-img-top"
                alt={store.personaje.name}
              />
			<h1> {store.personaje.name}</h1>
			<h1> {store.personaje.mass}</h1>
			<h1> {store.personaje.films}</h1>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
