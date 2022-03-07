import './App.css';
import NavBar from './component/NavBar'
import Routes from './routes/index'
const App = () => {
  return(
    <>
      <NavBar/>
      <Routes/>
      {/* <footer style={{backgroundColor: "rgb(24, 5, 50)"}} className="footer py-6  ">
        <h1 className="text-white text-center text-3xl">&copy; Copyright 2021</h1>
      </footer> */}
    </>
  );
}

export default App;