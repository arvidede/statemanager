import React from 'react'
import { withState } from '../state/context.js'

export const Header = withState(
    ({ title }) => <header>{title}</header>,
    state => ({ title: state.title })
)
