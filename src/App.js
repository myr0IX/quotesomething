import logo from './logo.svg';
import './App.css';

function Button (prop) {
	return (
		<button className='Btn Case'>{prop.children}</button>
	)
}

export default function App() {
  return (
    <div className="App">
		<Card>Theme</Card>
		<Card>Theme</Card>
		<Card>Theme</Card>
		<Card>Theme</Card>
		<Card>Theme</Card>
		<Card>Theme</Card>
		<Card>Theme</Card>
    </div>
  );
}

function Card(props) {
	return (
	  <div className="Card">
		  <h2 className='Theme Case'>{props.children}</h2>
		  <p>ceci est la desciption</p>
		  <Button>Generate</Button>
	  </div>
	);
  }