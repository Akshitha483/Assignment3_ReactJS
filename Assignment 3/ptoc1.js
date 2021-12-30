//parent component
function App(props){

    const data=['C','C++','Java','C#','JS','HTML','CSS','JS']

    return <div>
        <h1>Hello, {props.userName}</h1>
        <List langs={data}/>
    </div>
}

//child component
function List(props){
    return <div>
       <h2>Technical Skills</h2>

       {props.langs.map((val,idx)=>{
           return <li key={val+idx}>{val}</li>
       })}
    </div>
}


ReactDOM.render(<App userName="Akshitha"/>,document.getElementById('container'))