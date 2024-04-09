import logo from './logo.svg';
import './App.css';
import AddReciepe from './components/AddReciepe';
import SearchReciepe from './components/SearchReciepe';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddReciepe/>
      <SearchReciepe/>
      <ViewAll/>
    </div>
  );
}

export default App;
