function Student (props){
    const getData=()=>{
        console.log('You clicked the button');
        console.log(props.firstName);
    }
    return(
        <div>
            <button onClick={()=>getData()}>Click here</button>
        </div>
    )
}

ReactDOM.render(<Student firstName="Akshitha"/>,document.getElementById('container'))