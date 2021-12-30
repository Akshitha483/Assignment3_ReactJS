class Parent extends React.Component{
    state={
        text:''
    }

    render(){
        return <div>
            <h1>I have cough</h1>
            <h2>Quarantine required: {this.state.text}</h2>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //chocolate
    getDataFromChild(childData){
    console.log(childData);

    this.setState({
        text:childData
    })
    }
}


function Child(props){
    let str="Yes";
    let str1="No"
    return <div>
        <h1>I have cold</h1>
        <button onClick={()=>{props.action(str)}}>Positive</button>
        <button onClick={()=>{props.action(str1)}}>Negative</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
