class Parent extends React.Component{
    state={
        text:'Smile'
    }

    render(){
        return <div>
            <h1>I am Akshitha</h1>
            <h2>Shake hands: {this.state.text}</h2>
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
    let str="Hello";
    let str1="Hi"
    let str2="Bye"
    return <div>
        <h1>I am Anusha</h1>
        <button onClick={()=>{props.action(str)}}>Say Hello</button>
        <button onClick={()=>{props.action(str1)}}>Say Hi</button>
        <button onClick={()=>{props.action(str2)}}>Leave</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
