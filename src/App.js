import logo from './logo.svg';
import './App.css';

function Button (prop) {
	return (
		<button>{prop.children}</button>
	)
}

export default function App() {
  return (
    <div className="App">
		<Card />
    </div>
  );
}

function Card() {
	return (
	  <div className="Card">
		  <h2 className='Theme'>Thème</h2>
		  <p>ceci est la desciption</p>
		  <Button>Button</Button>
	  </div>
	);
  }