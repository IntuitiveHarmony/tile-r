import {useState} from 'react'
import './App.css';

const App = () => {
  const [tile, setTile] = useState()
  const [size, setSize] = useState(300)

  const handleTile = (event) => {
    setTile(event.target.value)
  }

  const handleResize = (event) => {
    setSize(event.target.value)
  }

  return (
    <>
      <div className='back' style={{
            backgroundImage: "url(" + tile + ")",
            backgroundSize: size + 'px',
            height: '100vh'
          }}>
        <div className='info'>
          <div className='input'>
            <label>Image Url:</label><br/>
            <input type='text' onChange={handleTile} placeholder='paste url...'></input>
          </div>
          <div className='input'>
            <label>Resolution: {size}px</label><br/>
            <input onChange={handleResize} type='range' min='10' max='1000' ></input>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;
