import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Studio } from "./pages"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/studio" element={<Studio />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App