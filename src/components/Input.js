import React, { useState } from 'react'
import { withState } from '../context.js'
import * as ACTIONS from '../actions/'

export const Input = withState(({ dispatch }) => {
    const [input, setInput] = useState('')

    return (
        <React.Fragment>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={() => dispatch(ACTIONS.NEW_TITLE, input)} />
        </React.Fragment>
    )
})
