import { useState } from 'react';
import './App.css';

function App() {
  const [inp, setInp] = useState(null);
  const handleClick = () => {};
  return (
    <div className='App'>
      <div className='container'>
        <div className='left'>
          <div className='input-box'>
            <input type='number' />
            <button onClick={handleClick}>Color Me</button>
          </div>
        </div>
        <div className='right'>
          <div className='content'>
            <div className='table'>
              <table>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
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
