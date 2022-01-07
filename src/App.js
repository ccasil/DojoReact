import './App.css';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-4 bg-primary text-white">
          <p className="m-0 lead fw-bold">White</p>
        </div>
        <div className="col-4 bg-danger text-primary">
          <p className="m-0 lead fw-bold">Blue</p>
        </div>
        <div className="col-4 bg-info text-success">
          <p className="m-0 lead fw-bold">Green</p>
        </div>
      </div>
    </div>
  );
}

export default App;
