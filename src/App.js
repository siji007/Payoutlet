import './App.css';
import NavBar from './component/NavBar'
import Routes from './routes/index'
const App = () => {
  return(
    <>
      <NavBar/>
      <Routes/>
      <div style={{backgroundColor: "rgb(24, 5, 50)"}} className="footer py-6 mt-16">
        <h1 className="text-white text-center text-3xl">&copy; Copyright 2021</h1>
      </div>
    </>
  );
}

export default App;