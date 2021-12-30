class Parent extends React.Component{
    state={
        suggestion:"Medical"
    }

    render(){
        return <div>
            <h1>I am Parent</h1>
            <h2> What should i choose??{this.state.suggestion}</h2>
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //chocolate
    getDataFromChild(childData){
    console.log(childData);

    this.setState({
        suggestion:childData
    })
    }
}


function Child(props){
    let str="Engineering";
    return <div>
        <h1>I am Child</h1>
        <button onClick={()=>{props.action(str)}}>Decide</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
