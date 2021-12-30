class MyApp extends React.Component{
    state={
        homePage:"Welcome All!",
        exitPage:"Thank you visit again",
        ishomePage:true
    }

    render(){
        let {homePage,exitPage,ishomePage}=this.state;
        let renderData=null

        if(ishomePage){
            renderData=<div>
                <h1>{homePage}</h1>
                <h1>Shop now</h1>
                <h1>Know More</h1>
            </div>
        }
        else{
            renderData=<div>
                <h1>{exitPage}</h1>
                <h1>Byeeeee</h1>
            </div>
        }
        return <div>
            {renderData}
            <button onClick={()=>{this.changeView()}}>{ishomePage ? "click here to exit":"click here to shop"}</button>
        </div>
    }

    changeView(){
       /* if(this.state.isAdmin){
            this.setState({
                isAdmin:false
            })
        }else{
            this.setState({
                isAdmin:true
            })
        }*/

        this.setState({
            ishomePage:!this.state.ishomePage
        })
    }
}

ReactDOM.render(<MyApp/>,document.getElementById('container'))