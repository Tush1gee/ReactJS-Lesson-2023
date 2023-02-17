import React from "react";

class ClassCounter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({count: this.state.count + 1})
    }
    componentDidMount = () => {
        console.log("Class Component mounted");
    }
    componentWillUnmount = () => {
        console.log("Class Component unmounted");
    }

    render() {
        return (
            <div style={{margin: "50px"}}>
                <h2>{this.state.count}</h2>
                <button onClick={this.increase}>Add</button>
            </div>
        )
    }
}
export {ClassCounter}