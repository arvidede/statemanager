# Redux 0.1

---

### Primitive state manager implementation using React Context


### Notes
- Current implementation causes the root node to re-render on every state change triggered by child component, which basically throws the whole point of React out the window :))
- Barely any logic separation due to each component dispatching events directly, instead of using action creators.
- It works
