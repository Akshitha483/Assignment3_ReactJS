//parent component
function NewApp(props){
    return <div>
        <h1>Good Morning, {props.User}</h1>

        <Home appName="FLIPKART" userName={props.User}/>
    </div>
}

//child component
function Home(props){
    return <div>
        <h1>{props.appName}</h1>
        <h2>Hi,{props.userName} Happy Shopping</h2>
    </div>
}

ReactDOM.render(<NewApp User="Akshitha"/>,document.getElementById('container'))