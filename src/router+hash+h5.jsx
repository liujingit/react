import React from 'react';
import ReactDom from 'react-dom';
 

class App extends React.Component {
     //构造函数
     constructor(props) {
        super(props);  
    } 
    render() {
        return ( 
            <div>
                 <h3>你好世界！</h3>
                 <div>
                     页面路由
                     <pre>
                     {`
                     window.location.href='http://www.baidu.com';
                     history.back()后退
                     history.forward()前进
                     `}
                     </pre>
                 </div>
                 <div>
                     hash 路由
                    <pre>
                    {`
                        window.location="#hash";
                        window.onhashchange=function(){
                            console.log('current hash:',window.location.hash)
                        }
                        `}
                    </pre>
                 </div>
                 <div>
                     h5路由
                     <pre>
                     {`
                        推进一个状态
                         history.pushState('name',null,'/path')
                        替换一个状态
                        history.replaceState('name',null,'/path')
                        popstate()激活当状态发生变化
                        window.onpoptate=function(){
                            window.location.href
                            .pathname
                            .hash
                            .search
                        }
                        `}
                     </pre>
                 </div>
            </div> 
        );
    }
} 

ReactDom.render(
    <div>
        <App/> 
    </div>,
    document.getElementById('app')
)

