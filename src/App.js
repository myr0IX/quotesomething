// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const GEN_1 = {
    numberOfPokemon: 151,
    startIndex: 1
};

const GEN_2 = {
    numberOfPokemon: 100,
    startIndex: 152
};

const GEN_3 = {
    numberOfPokemon: 135,
    startIndex: 252
};

const GEN_4 = {
    numberOfPokemon: 107,
    startIndex: 387
};

const GEN_5 = {
    numberOfPokemon: 156,
    startIndex: 494
};

const GEN_6 = {
    numberOfPokemon: 72,
    startIndex: 650
};

const GEN_7 = {
    numberOfPokemon: 88,
    startIndex: 722
};

const GEN_8 = {
    numberOfPokemon: 96,
    startIndex: 810
};

const GEN_9 = {
    numberOfPokemon: 105,
    startIndex: 906
};

export default function App() {
  return (
	<div>
		<div className="App">
			<Card gen={GEN_1}>First generation</Card>
			<Card gen={GEN_2}>Second generation</Card>
			<Card gen={GEN_3}>Third generation </Card>
			<Card gen={GEN_4}>Fourth generation</Card>
			<Card gen={GEN_5}>Fith generation</Card>
			<Card gen={GEN_6}>Sixth generation</Card>
			<Card gen={GEN_7}>Seventh generation</Card>
			<Card gen={GEN_8}>Eighth generation</Card>
			<Card gen={GEN_9}>Ninth generation</Card>
		</div>
	</div>
  );
}

function Card(props) {
	const [info, setInfo] = useState(null);
	async function getapi()
	{
		let number = Math.ceil(Math.random() * (props.gen.numberOfPokemon - 1)) + props.gen.startIndex;
		console.log(number);
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
		var data = await response.json();
		setInfo(data);
	}
	return (
		<div>
			<button className="Card Btn br" onClick={getapi}>
				<h3 className='Theme Case br'>{props.children}</h3>
				{info && <h4>{info.name}: {info.id}</h4>}
				{info && <img src={info.sprites.front_default}/>}
			</button>
		</div>
	);
  }