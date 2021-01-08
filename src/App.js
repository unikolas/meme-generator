import React, {Component} from "react"
import Header from "./components/Header"
import MemeGenerator from "./components/MemeGenerator"

class App extends Component {
    constructor() {
        super()
        this.state = {
            question: "who disss?"
        }
    }
    render() {
        return (
            <div style={{padding: 40}}>
                <Header />
                <MemeGenerator />
            </div>
        )
    }
}

export default App