import React, { Component, useState } from 'react'
import './styles/App.css'
import StateContext, { withState } from './context.js'
import Reducer from './reducers/'
import { Header, Input } from './components/'

const ROOTSTATE = {
    title: 'Statemanager 2000X',
    title2: 'The State'
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
                    dispatch: (type, payload) => this.reducer.handleAction(type, payload, this.state)
                }}
            >
                <div className="App">
                    <Header />
                    <Header2 />
                    <Input />
                </div>
            </StateContext.Provider>
        )
    }
}

export const Header2 = withState(({ rootState }) => {
    const { title2 } = rootState
    return <header>{title2}</header>
})


export default App
