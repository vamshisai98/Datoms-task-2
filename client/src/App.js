import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inp, setInp] = useState('null');
  let colorMe = () => {
    let x = document.getElementById(inp);
    x.style.background = 'red';
  };
  const handleClick = () => {
    colorMe();
  };

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  // useEffect(() => {
  //   colorMe();
  // }, [inp]);
  return (
    <div className='App'>
      <div className='container'>
        <div className='left'>
          <div className='input-box'>
            <input type='number' value={inp} onChange={handleChange} />
            <button onClick={handleClick}>Color Me</button>
          </div>
        </div>
        <div className='right'>
          <div className='content'>
            <div className='table'>
              <table>
                <tr>
                  <td id='1'>1</td>
                  <td id='2'> 2</td>
                  <td id='3'>3</td>
                </tr>
                <tr>
                  <td id='4'>4</td>
                  <td id='5'>5</td>
                  <td id='6'>6</td>
                </tr>
                <tr>
                  <td id='7'>7</td>
                  <td id='8'>8</td>
                  <td id='9'>9</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
