class Reducer {
    constructor(setState) {
        this.setState = setState
    }

    handleAction = (type, payload, state) => {
        this.setState({ [type]: payload })
    }
}

export default Reducer
