import "./css/App.css";
import Navbar from "./componentes/Navbar";
import SearchBar from "./componentes/SearchBar";
function App(){
  return(
    <>
     <Navbar />
    <div className="app">
     
      <h1>THIS IS WEATHER APP...</h1>
      <SearchBar />
    </div>
    </>
  );
}
export default App;