class Parent extends React.Component{
    state={
        company:"XYZ",
        
    }

    render(){
        return <div>
            <h1>I am Parent</h1>
            <h2> {this.state.company}</h2>
            
            <Child action={this.getDataFromChild.bind(this)}/>
        </div>
    }

    //chocolate
    getDataFromChild(childData){
    console.log(childData);
    

    this.setState({
        company:childData,
       
    })
    }
}


function Child(props){
    let str="ThoughtFocus";
    
    return <div>
        <h1>I am Child</h1>
        <button onClick={()=>{props.action(str)}}>Click</button>
    </div>
}

ReactDOM.render(<Parent/>,document.getElementById('container'))
