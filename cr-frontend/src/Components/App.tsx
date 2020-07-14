import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter ,Switch,Route} from "react-router-dom";
function App() {
    const props = {
        firstname : "Chanokchon",
        surname : "Chen",
        // age : 20
    }
    return  (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/about"><About {...props}/></Route>
                <Route path="/"><Home /></Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;