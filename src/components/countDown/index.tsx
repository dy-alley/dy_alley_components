import React, { Component } from 'react'
import { Iprops, IState } from './conf'

export default class CountDown extends Component<Iprops, IState> {
    timer:any;
    constructor(props:Iprops) {
        super(props)
        this.state = {
            h: '00',
            m: '00',
            s: '00',
        }
    }
    render() {
        const { className } = this.props;
        const { h, m, s } = this.state;
        return (
            <div className={className as ''}>{`${h}:${m}:${s}`}</div>
        )
    }
    dateToString = () => {
        var start = new Date();
        var end = new Date(this.props.endTime);
        var lefttime = parseInt(`${(end.getTime() - start.getTime()) / 1000}`);
        var h = this.addZero(parseInt(`${lefttime / (60 * 60)}`));
        var m = this.addZero(parseInt(`${lefttime / 60 % 60}`));
        var s = this.addZero(parseInt(`${lefttime % 60}`));
        this.setState({
            h,
            m,
            s,
        })
    }
    addZero = (n:number) => {
        return n < 10 ? "0" + n: n + "";
    }
    componentDidMount() {
        this.timer = setInterval(this.dateToString,1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}
