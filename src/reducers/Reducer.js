class Reducer {
    constructor(setState) {
        this.setState = setState
    }

    handleAction = (type, payload, state) => {
        this.setState({ ...state, [type]: payload })
    }
}

export default Reducer
