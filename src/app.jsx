import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link ,Switch } from 'react-router-dom';

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="">
                componentA: 
                <Switch>
                    <Route exact path={`${this.props.match.path}`} 
                    render={(route)=>{
                        return <div>
                            当前组件A
                        </div>
                    }}/>     
                    <Route path={`${this.props.match.path}/sub`} render={(route)=>{
                        return(
                            <div>
                                当前组件是带sub的a组件
                            </div>
                        )
                    }}/> 
                     <Route path={`${this.props.match.path}/:id`} 
                    render={(route)=>{
                        return <div>
                            当前组件是带参数的A，参数是：{route.match.params.id}
                        </div>
                    }}/>
                </Switch> 
                
            </div>
        );
    }
} 
class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="">
                componentB:
            </div>
        );
    }
} 

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return (
            <div className="">
              <AuthButton />
                <Link to="/a">组件 A</Link>
                <br/>
                <Link to="/a/123">带参数的组件 A</Link>
                <br/>
                <Link to="/b">组件 B</Link>
                <br/>
                <Link to="/a/sub">组件 /a/sub</Link>
                <br/>
              
                {this.props.children}
            </div>
        );
    }
} 

ReactDom.render(
    <div>
        <Router>
            <Wrapper> 
                <Route path="/a" component={A}/>
                <Route path="/b" component={B}/>   
            </Wrapper>
        </Router>
    </div>,
    document.getElementById('app')
)
