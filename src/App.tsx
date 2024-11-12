import Radial from "./Radial";

import npmIcon from './npm.png';
import gitIcon from './github.png';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexFlow: 'column'
    }}>
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '36px',
        fontWeight: 500,
        marginTop: '50px'
      }}>
        Animated gradient DEMO
      </div>
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '26px',
        fontWeight: 500,
        marginTop: '20px'
      }}>
        Author: Josef Krajkář
      </div>
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '26px',
        fontWeight: 500,
        marginTop: '30px'
      }}>
        <div style={{
          flex: '0 0 300px',
          height: '300px',
          border: '1px solid #3C3C3C',
          margin: '10px'
        }}>
           <Radial>
            Click me!
          </Radial>
        </div>
      </div>
      <div style={{
        flex: '0 0 auto',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        marginTop: '80px'
      }}>
        <a href='https://www.npmjs.com/package/animated-gradient' target='new'>
          <img
            src={npmIcon}
            style={{
              width: '80px',
              height: 'auto',
              marginRight: '30px'
            }}
            alt='NPM'
          />
        </a>
        <a href='https://github.com/josefkrajkar/animated-gradient-demo' target='new'>
          <img
            src={gitIcon}
            style={{
              width: '80px',
              height: 'auto'
            }}
            alt='GITHUB'
          />
        </a>
      </div>
    </div>
  )
}

export default App
