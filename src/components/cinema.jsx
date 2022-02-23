import React, { Component } from 'react';
import axios from "axios"

class Cinema extends Component {

    state={
      CinemaList:[]
    }

    componentDidMount(){
        axios({
            method:'GET',
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            headers:{
               'x-Client-Info': '{"a" : "300o" , "ch" : "1002", "v" : "5.0.4","e": "16395416565231270166529" , "bc" : "110100"}',
               'x-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data.data.cinemas);
            const { data:{data:{cinemas:CinemaList}} }=res || {}
            this.setState({
                CinemaList
            })
        })
    }

    render() {
        const { CinemaList }=this.state
        return (
            <div className='Cinema-Container'>
            {
            CinemaList.map(item=>{
                return <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dd>{item.address}</dd>
                      </dl>
            })
            }
              <dl>
                  <dt></dt>
                  <dd></dd>
              </dl>
            </div>
        );
    }
}

export default Cinema;
