 
import React from 'react';
import ReactDom from 'react-dom';
// 首次写样式代码
    // import 'font-awesome/css/font-awesome.min.css';
    // import './index.css';
    // import './index.scss';
    // ReactDom.render(
    //     <div>
    //         <i className="fa fa-address-book"></i>
    //          <h1>hello world!</h1>,
    //     </div>,
    
    //     document.getElementById('app')
    // )
// end 结束

import './index.scss'
// let style={
    // color:'pin'+'k',
    // fontSize:'100pt'
    // }
// let jsx=<div className="jsx" style={style}> jsx....</div>;

// let name="liujin";
//     let names= ["liuqian","liupeng","liujie","liujing"];
//     let frag=false;
//     let jsx=(
//         <div>
//         {/* 条件判断 */}
//              { frag ? <p> I am {name}</p> : <p> I am no {name}</p>}
//         {/* 数组循环 */}
//             {
//                 names.map((name,index)=><p key={index}> hello , I am {name}</p>)
//             }
//         </div> 
// );
// ReactDom.render(jsx,document.getElementById('app'))
// status与props
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            name:'liujin',
            age:18
        };
        // this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    settimeoutchange(){
        setTimeout(() => {
            this.setState({
              name:'liujin66666'
            })
        }, 2000)
        
    }
    componentDidMount(){
        // 第二种是加载到生命周期里面 ---但是在dom中无法事件onload加载事件
        this.settimeoutchange();
    }
    render() {  
        // 第一种直接加到render函数里面
        // setTimeout(() => {
        //     this.setState({
        //         name:'liujin11111'
        //     })
        // }, 2000); 
        return ( 
            <div>
                <h1>I am {this.state.name} </h1> 
                <h2>I am {this.state.age} year old! </h2>
                <button onClick={(e)=>this.handleClick(e)}>改变岁数</button> 
            </div>
        ) ; 
    }
}
class Es6Component extends React.Component {
    render() {
        return (
            <h1>I am es6  liujin</h1>
        );
    } 
}
class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return (
            <p>{this.props.children}</p>
        );
    } 
}
class App extends React.Component { 
    render() {
        return (
            <div style={{background:'#e4393c'}}>  
             <fieldset>
                    <legend>容器试组件</legend>
                {/* 容器试组件 */}
                {/* <Title title='app title'/>  */}
                <Title>
                    <span>app script</span>
                    <a href="">link</a>
                </Title> 
                    {/* 单纯组件 */}
                   <Component/> 
                </fieldset>
            </div>
        );
    }
}

// 以下是父子组件通信
class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            bgColor:'#999',
            childbgcolor:'#ddd'
         };
    }
    fatherbgcolor(color){
        this.setState({
            bgColor:color,
            childbgcolor:color
        })
    }
    render() {
        return (
            <div style={{background:this.state.bgColor}}>
                <fieldset>
                    <legend>父子组件的通讯</legend>
                    <h1>hello world ! 你好世界 ！ spring summer autumn winter east north </h1>
                    <Child bgColor={this.state.bgColor} childbgcolor={this.state.childbgcolor}  changebgcolor={(color)=>{this.fatherbgcolor(color)}}/>
                </fieldset>
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            fontSize:'12px'
        };
    }
    handlebgcolor(){
        this.props.changebgcolor('red')
    }
    render() {
        return (
            <div style={{fontSize:this.state.fontSize,background:this.props.childbgcolor}}>
                <h1>父组件的背景色：{this.props.bgColor}</h1>
                <button onClick={(e)=>{this.handlebgcolor(e)}}>改变背景色</button>
            </div>
        );
    }
}
// 总结：在father中state设置，到子组件中 命名=this.state.名字 使用props在子组件中引用
//      在child中设置点击事件 onclick={(e)=>{方法名}} 在方法中使用this.props.给父组件的方法名(带的实参)，在子组件上标注方法名(形参)，在父组件中写的方法调用
//  使用this.setState在方法对象中应用形参。

// 兄弟组件通讯 ---在父组件中变量的状态提升
class Brother extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            child2bgcolor:'pink'
        };
    }
    Brotherbgcolor(color){
        this.setState({
            child2bgcolor:color
        })
    }
    render() {
        return (
            <div>
                <fieldset>
                    <legend>兄弟组件的通信</legend>
                    <Child1 changeChild2Color={(color)=>{this.Brotherbgcolor(color)}}/>
                    <Child2 bgColor={this.state.child2bgcolor}/>
                </fieldset>
            </div>
        );
    }
}
class Child1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    handlebrother(){
        this.props.changeChild2Color("green")
    }
    render() {
        return (
            <div >
                <h2>Child1:</h2>
                <button onClick={(e)=>{this.handlebrother(e)}}>改变Child2中的背景色</button>
            </div>
        );
    }
}
class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
        };
    } 
    render() {
        return (
            <div style={{background:this.props.bgColor}}>
                <h2>Child2: {this.props.bgColor}</h2>
            </div>
        );
    }
}
 

ReactDom.render(
    <div>
        <Component/> 
        <Es6Component/>
        <App/>
        <Father/>
        <Brother/>
    </div>,
    document.getElementById('app')
)

