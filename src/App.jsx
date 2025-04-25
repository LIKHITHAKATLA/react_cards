import './App.css'
import {Java} from './components/backend/Java'
import {PHP} from './components/backend/PHP'
import {Python} from './components/backend/Python'
import {Ruby} from './components/backend/Ruby'
import Django from './components/database/Django'
import Firebase from './components/database/Firebase'
import Mongodb from './components/database/Mongodb'
import SQL from './components/database/SQL'
import Bootstrap from './components/frontend/Bootstrap'
import CSS from './components/frontend/CSS'
import HTML from './components/frontend/HTML'
import Javascript from './components/frontend/Javascript'

function App() {

  return (
    <div className='container'>
     
      <div id='Frontend'>
        <HTML></HTML>
        <CSS></CSS>
        <Javascript></Javascript>
        <Bootstrap></Bootstrap>
      </div>
      <div id="Backend">
        <Python></Python>
        <Java></Java>
        <PHP></PHP>
        <Ruby></Ruby>
      </div>
      <div id='Database'>
        <SQL></SQL>
        <Django></Django>
        <Mongodb></Mongodb>
        <Firebase></Firebase>
      </div>
    </div>
    
    
  )
}

export default App
