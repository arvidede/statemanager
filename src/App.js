import React, { Component, useState } from 'react'
import './styles/App.css'
import StateContext from './state/context.js'
import Reducer from './reducers/'
import { Header, Input } from './components/'

const ROOTSTATE = {
    title: 'Statemanager 2000X'
}

class App extends Component {
    constructor() {
        super()

        this.state = { ...ROOTSTATE }
        this.reducer = new Reducer(this.setState.bind(this))
    }

    render() {
        return (
            <StateContext.Provider
                value={{
                    rootState: this.state,
                    dispatch: (type, payload) =>
                        this.reducer.handleAction(type, payload, this.state)
                }}
            >
                <div className="App">
                    <Header />
                    <Input />
                    <button onClick={() => this.setState({ title2: 'ok' })} />
                </div>
            </StateContext.Provider>
        )
    }
}

export default App
