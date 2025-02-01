import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <div className="links">
          <div className="link">Link 1</div>
          <div className="link">Link 2</div>
          <div className="link">Link 3</div>
        </div>

        <div className="content">
          <div className="sidebar left"></div>
          <button className="button">Reverse</button>
          <div className="sidebar right"></div>
        </div>

        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
