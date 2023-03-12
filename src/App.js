import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      <div className="container">
        <TextForm heading="Enter your text here to get desired output" />
      </div>
    </>
  );
}

export default App;
