import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
  render() {
    let now = new Date();
    let now_date = [now.getFullYear(), now.getMonth()+1, now.getDate()].join('-');
    let now_time = [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
    return(
        <h2>{now_date} {now_time}</h2>
    );
  }
}

export default Clock;