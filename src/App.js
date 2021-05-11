import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
        <Header />
    {/*    Header component     */}

        <div className="app__body">
            <Sidebar />
            {/*    Sidebar      */}
            {/*    Feed     */}
            {/*        Widgets*/}
        </div>


    </div>
  );
}

export default App;
