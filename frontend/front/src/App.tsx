import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";




import { Home } from "./pages/home"
import { CreateParty } from "./pages/createParty/index"

import './index.css'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="createParty" element={<CreateParty />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
