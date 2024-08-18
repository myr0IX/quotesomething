import logo from './logo.svg';
import './App.css';

function Button (prop) {
	return (
		<button className='Btn Case br'>{prop.children}</button>
	)
}

export default function App() {
  return (
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
  );
}

function Card(props) {
	return (
	  <div className="Card br">
		  <h3 className='Theme Case br'>{props.title}</h3>
		  <p>{props.children}</p>
		  <Button>Generate</Button>
	  </div>
	);
  }