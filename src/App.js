import Person from './components/Person';
import {Man,Women} from './components/Man';
import Demo from './components/Demo';
import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      
      <Person/>
      
     
    </div>
    <div className='man'>
    <Man mname="jamshed" age='23' reg='NIM' />
    
    </div>
    <div className='women'>
      <Women wname="shanza" age='21' reg='NIM'/>
    </div>
    <div className='demo'>
      <Demo demo="this is demo div" tit="this is the demo title"/>
    </div>
    </>
  );
}

export default App;
