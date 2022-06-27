
import './App.css';
import NavigationBar from './component/NavigationBar';
import Discover from "./component/Discover"
import Intro from "./component/Intro"
import "./style/LandingPage.css"


function App() {
  return (
    <div>

      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="discover">
        <Discover />
      </div>


    </div>
  )
}

export default App;
