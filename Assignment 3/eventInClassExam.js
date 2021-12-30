class Student extends React.Component{
    render(){
        return <div>
            <h1>Welcome, {this.props.firstName} </h1>
            <button onClick={this.getData}>Click here</button>
            <button onClick={()=>{this.getName()}}>Student Name</button>
            <button onClick={()=>{this.getInfo("Excellent")}}>Student Performance</button>
        </div>
    }


getData(){
    console.log("Student Details");
}

getName(){
    console.log(this);
}

getInfo(data){
    console.log(data);
}
}

ReactDOM.render(<Student firstName="John"/>, document.getElementById('container'))