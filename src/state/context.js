import React, { useContext, useMemo } from 'react'

// Pass initial rootstate?
const StateContext = React.createContext(null)

export const withState = (Component, mapStateToProps) => props => {
    const context = useContext(StateContext)
    const componentState = mapStateToProps(context.rootState)
    return useMemo(
        () => {
            return <Component
                {...componentState}
                {...props}
                dispatch={context.dispatch}
            />
        },
        /*
        OK, so this approach prevents re-renders only if
        the state or props doesn't change order. Not perfect, but hey, Redux
        */
        [
            ...Object.values(componentState),
            ...Object.values(props)
        ]
    )
}

export default StateContext
