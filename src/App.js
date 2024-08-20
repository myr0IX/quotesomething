import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Button (prop) {
	return (
		<button className='Btn Case br'>{prop.children}</button>
	)
}

export default function App() {
  return (
	<div>
		<div className="App">
			<Card >First generation</Card>
			<Card >Second generation</Card>
			<Card >Third generation </Card>
			<Card >Fourth generation</Card>
		</div>
	</div>
  );
}

function Card(props) {
	const [url, setUrl] = useState(null);
	async function getapi()
	{
		let number = Math.ceil(Math.random() * 150) + 1;
		console.log(number);
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
		var data = await response.json();
		setUrl(data.sprites.front_default);
	}
	return (
		<div>
			<button className="Card Btn br" onClick={getapi}>
				<h3 className='Theme Case br'>{props.children}</h3>
				{url && <img src={url}/>}
			</button>
		</div>
	);
  }