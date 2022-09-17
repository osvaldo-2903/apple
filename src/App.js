import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.php">Rocket</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.php">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="Create_email.php">Registrar</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="login_email.php">Iniciar Sesión</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
      
    </div>
  );
}

export default App;
