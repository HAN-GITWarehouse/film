import React, { Component } from 'react';
import Film from './components/film';
import Cinema from './components/cinema';
import Mine from './components/mine';
import TabBar from './components/TabBar';
import NavBar from './components/NavBar';
import './App.css'

class App extends Component {

  state = {
    componentsID: 1
  }


  updataComponent = (id) => {
    console.log(id);
    this.setState({ componentsID: id })
  }

  gotoMineComponet = () => {
    this.setState({ componentsID: 3 })
  }

  switchComponents() {

    const { componentsID } = this.state

    switch (componentsID) {
      case 2:
        return <Cinema />
      case 3:
        return <Mine />
      default:
        return <Film />
    }
  }


  render() {
    return (
      <div className="Container">
        <NavBar gotoMineComponet={this.gotoMineComponet} />
        <div>
          {
            this.switchComponents()
          }
        </div>
        <TabBar componetId={this.state.componentsID} updataComponent={this.updataComponent} />
      </div>
    );
  }
}

export default App;
