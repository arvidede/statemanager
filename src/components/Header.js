import React from 'react'
import { withState } from '../context.js'

export const Header = withState(({ rootState }) => {
    const { title } = rootState
    return <header>{title}</header>
})

