import React, { Component } from "react";

class TabBar extends Component {

    constructor() {
        super()
        this.state = {
            navBar: [
                {
                    id: 1,
                    text: '电影'
                }, {
                    id: 2,
                    text: "影院"
                }, {
                    id: 3,
                    text: "我的"
                }
            ]
        }
    }


    navBarTab = (id) => {
        this.props.updataComponent(id)
    }

    render() {
        const { navBar } = this.state
        const { componetId } = this.props;
        return (
            <ul className='navBar'>
                {
                    navBar.map(item => {
                        return <li
                            className={item.id === componetId ? 'Active' : ""}
                            key={item.id}
                            onClick={() => { this.navBarTab(item.id) }}>
                            {item.text}
                        </li>
                    })
                }
            </ul>
        )
    }
}

export default TabBar