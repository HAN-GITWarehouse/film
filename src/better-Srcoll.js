import React, { Component } from 'react';
import BetterScroll from 'better-scroll'

class App1 extends Component {

    state={
      list:[]
    }

    HandClick=()=>{
        
       const list=[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20]
       this.setState({list},()=>{
           new BetterScroll('.wrapper')
       })         
    }

    render() {
        const { list } =this.state
        return (
            <div>
               <button onClick={()=>this.HandClick()}>点击查看</button>
               <div className='wrapper' style={{height:'200px',background:'yellow',overflow:'hidden'}}>
                    <ul className='content'>
                            {
                                list.map((item,index)=>{
                                    return <li key={index}>{item}</li>
                                })
                            }
                    </ul>
               </div>
               
            </div>
        );
    }
}

export default App1;
