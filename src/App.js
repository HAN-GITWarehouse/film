import React, { Component } from 'react';
import Film from './components/film';
import Cinema from './components/cinema';
import Mine from './components/mine';
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state={
      navBar:[
        {
          id:1,
          text:'电影'
        },{
          id:2,
          text:"影院"
        },{
          id:3,
          text:"我的"
        }
      ],
      currentID:1,
    }
  }

  navBarTab=(id)=>{ 

    this.setState({
       currentID:id,
    })

  }


  switchComponents(id){
      switch(id){
        case 2:
          return <Cinema/>
        case 3:  
          return <Mine/>
        default:
          return <Film/>
      }
  }
  
  render() {
    const { navBar,currentID } =this.state
    return (
      <div className="Container">
         {
          this.switchComponents(currentID)
         }
         <ul className='navBar'>
            {
              navBar.map(item=>{
                return <li 
                          className={item.id===currentID?'Active':""} 
                          key={item.id} 
                          onClick={()=>{this.navBarTab(item.id)}}>
                          { item.text }
                       </li>
              })
            }
         </ul>
      </div>
    );
  }
}

export default App;
