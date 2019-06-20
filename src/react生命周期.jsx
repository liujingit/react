import React from 'react';
import React from 'react';
import ReactDom from 'react-dom';
 
class Component extends React.Component {
    //构造函数
    constructor(props) {
        super(props);
        console.log('初始化数据','constructor')
        this.state = {
            data:'Old state'
        };
    }
    //组件将要加载
    componentWillMount(){
        console.log('componentWillMount') 
    }
    //组件加载完成
    componentDidMount(){
        console.log('componentDidMount') 
    }
    //将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    //子组件是不是应该更新
    shouldComponentUpdate(){ 
        console.log("shouldComponentUpdate");
        return false;
    }
    //组件将要更新
    componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    //组件更新完成
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    //删除组件之前进行清理操作
    componentWillUnmount(){
        console.log('componentWillUnmount')
    } 
    //处理点击事件
    handleclick(){
        console.log("更新数据");
        this.setState({
            data:' NEW state'
        })
    }
    //渲染
    render() {
        console.log('render')
        return (
            <div>
                <h2>props:{this.props.data}</h2>
                <button onClick={(e)=>{this.handleclick(e)}}>更新组件</button>
            </div>
        );
    }
} 

class App extends React.Component {
     //构造函数
     constructor(props) {
        super(props); 
        this.state = {
            data:'Old Props',
            haschild:true
        };
    }
    onPropsChange(){
        console.log("更新props")
        this.setState({
            data:'New Props'
        })
    }
    onDestoryChild(){
        console.log("干掉子组件");
        this.setState({
            haschild:false
        })
    }
    render() {
        return (
            <div>
                {this.state.haschild?<Component data={this.state.data}/>:''} 
                <button onClick={(e)=>{this.onPropsChange(e)}}>改变props</button>
                <button onClick={(e)=>{this.onDestoryChild(e)}}>销毁</button>
            </div>
        );
    }
}

export default app;

ReactDom.render(
    <div>
        <App/> 
    </div>,
    document.getElementById('app')
)

