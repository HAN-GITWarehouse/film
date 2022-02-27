import React, { Component } from 'react';
import axios from "axios"

class Cinema extends Component {

    state = {
        CinemaList: [],
        queryValue: ''
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            headers: {
                'x-Client-Info': '{"a" : "300o" , "ch" : "1002", "v" : "5.0.4","e": "16395416565231270166529" , "bc" : "110100"}',
                'x-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            const { data: { data: { cinemas: CinemaList } } } = res || {}
            this.setState({
                CinemaList,
            })
        })
    }

    HandleInout = (event) => {
        this.setState({ queryValue: event.target.value })
    }

    FuzzyQueryCinemaList = () => {
        return this.state.CinemaList.filter(item => item.name.toUpperCase().includes(this.state.queryValue) || item.address.toUpperCase().includes(this.state.queryValue))
    }

    render() {
        return (
            <div className='Cinema-Container'>
                <input type="text" style={{ width: '99%', height: '50px', display: 'block' }} value={this.state.queryValue} onChange={this.HandleInout} />
                {
                    this.FuzzyQueryCinemaList().map(item => {
                        return <dl key={item.cinemaId} style={{ border: '1px solid #cecece', padding: '10px' }}>
                            <dt style={{ fontSize: '20px', lineHeight: '40px' }}>{item.name}</dt>
                            <dd style={{ fontSize: '14px', lineHeight: '20px' }}>{item.address}</dd>
                        </dl>
                    })
                }
            </div>
        );
    }
}

export default Cinema;
