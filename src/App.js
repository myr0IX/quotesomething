import logo from './logo.svg';
import './App.css';

function Button (prop) {
	return (
		<button className='Btn Case br'>{prop.children}</button>
	)
}

export default function App() {
  return (
	<div>
		<div className="App">
			<Card title="Theme">ceci est la desciption : Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
			<Card title="Theme">Theme</Card>
		</div>
	</div>
  );
}

function Card(props) {
	async function getapi()
	{
	  const response = await fetch("https://api.quotable.io/quotes/random");
	  var data = await response.json();
	  console.log(data);
	  console.log(typeof data.content);
	}
	return (
	  <div>
		<button className="Card Btn br" onClick={getapi}>
		  <h3 className='Theme Case br'>{props.title}</h3>
		  <p className='Case br'>{props.children}</p>
		</button>
	  </div>
	);
  }