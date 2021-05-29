import Form from './components/Form';
import Display from './components/DisplayForm';
import './App.css';

function App(){
  return (
    <div>
      <div className="heading">
        ProGrad Notes
      </div>
      <Form />
      <Display />
    </div>
  );
}

export default App;