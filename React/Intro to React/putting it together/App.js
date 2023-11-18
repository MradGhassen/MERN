import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Doe" } lastName={ "Jane" } initialAge={45} hairColor = {'Black'} />
      <PersonCard firstName={ "Smith" } lastName={ "John" } initialAge={88} hairColor = {'Brown'} />
      <PersonCard firstName={ "Fillmore" } lastName={ "Millard" } initialAge={50} hairColor = {'Brown'} />
      <PersonCard firstName={ "Smith" } lastName={ "Maria" } initialAge={62} hairColor = {'Brown'} />

    </div>
  );
}

export default App;
