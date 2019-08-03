# Redux?

---

### Primitive state manager implementation using React Context

### Notes 0.0.2
- No renders! Current implementation uses the hook useMemo to prevent unnecessary renders, but depends on the order of the keys and values stored in state (I think, that's what Dan told me)
- The HOC withState takes an object mapStateToProps as second argument.

### Notes 0.0.1
- Current implementation causes the root node to re-render on every state change triggered by child component, which basically throws the whole point of React out the window :))
- Barely any logic separation due to each component dispatching events directly, instead of using action creators.
- It works
