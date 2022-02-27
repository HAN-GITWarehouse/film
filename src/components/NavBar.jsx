import React, { Component } from "react";

class NavBar extends Component {

    HandleClick = () => {
        this.props.gotoMineComponet()
    }

    render() {
        return (
            <div style={{ background: 'yellow', display: 'flex', justifyContent: 'space-between' }}>
                <button>返回</button>
                <span>卖座电影</span>
                <button onClick={this.HandleClick}>我的</button>
            </div>
        )
    }
}

export default NavBar