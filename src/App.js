// import React from "react";
// import UncontrolledExample from "./banner";
// import NavbarList from "./navlist";

// const App = () => {
//   return (
//     <div>
//       <NavbarList />
//       <UncontrolledExample />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import { Home } from "./Home";
import { Service } from "./Service";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
