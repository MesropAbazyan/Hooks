import './App.css';
import {useEffect, useState} from 'react';
import useFakeData from './useFakeData';

function App() {
        // if (!value) {
        //   useEffect(() => {
        //   }, [value]);
        // }
        // "hooks" should always be outside conditions and loops
        // the code should be written so that all "hooks" 
        // are called once, no matter what

  // we can create our own "hook"
  const [value, setValue] = useState('');

        // const [data, setData] = useState();
        // useEffect(() => {
        //   if (isFinite(value) && value > 0 && value <= 200 && !value.includes('.')) {
        //     fetch(`https://jsonplaceholder.typicode.com/todos/${value}`)
        //       .then(stream => stream.json())
        //       .then(data => setData(data));
        //   }
        // }, [value]);
  const data = useFakeData(value);

  let title = '';
  if (data) {
    title = data.title;
  }

  return (
    <div className="App">
      <input 
        type='text'
        value={value}
        onChange={(evt) => setValue(evt.target.value)}  
      />

      <h3>Title: {title}</h3>
    </div>
  );
}

export default App;
