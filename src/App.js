import SideBar from "./components/sidebar/index.js";
import TopBar from "./components/topBar.js";
import './app.css'
function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others">Other pages</div>
      </div>
    </div>
  );
}

export default App;
