import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

function App() {
    const user = true;

  return (
    <div className="app">
        {!user ? <h1>Login</h1> : (
            <>
                <Header />
            {/*    Header component     */}

                <div className="app__body">
                <Sidebar />
            {/*    Sidebar      */}
                <Feed />
            {/*    Feed     */}
                <Widgets />
            {/*        Widgets*/}

                </div>
            </>
        )}



    </div>
  );
}

export default App;
