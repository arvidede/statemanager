import React from 'react'

// Pass initial rootstate?
const StateContext = React.createContext(null)

export const withState = Component => props => (
    <StateContext.Consumer>
        {state => <Component {...props} {...state} />}
    </StateContext.Consumer>
)

export default StateContext
