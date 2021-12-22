import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost';
import {originals, action, comdey, romance, horror} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' isSmall />
      <RowPost url={action} title='Action' />
      <RowPost url={comdey} title='Comedy' />
      <RowPost url={horror} title='Horror' />
    </div>
  );
}

export default App;
