import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Notice from './Notice'
interface IProps {

}

interface IState {
    notices:any[];
}

class Notification extends Component<IProps,IState> {
    transitionTime:number;
    constructor(props:IProps){
        super(props)
        this.state = {
            notices:[]
        }
        this.transitionTime = 300;
    }

    // 获取key
    getNoticeKey = () => {
        const { notices } = this.state;
        return `notice-${new Date().getTime()}-${notices.length}`
    }
    // 添加
    addNotice = (notice:any) => {
        const { notices } = this.state;
        notice.key = this.getNoticeKey();
        // 不存在
        if(notices.every(item=>item.key !== notice.key)) {
            notices.push(notice);
            this.setState({
                notices
            })

            if(notice.duration > 0) {
                setTimeout(() => {
                    this.removeNotice(notice.key)
                }, notice.duration)
            }
        } 
        
        return () => {
            this.removeNotice(notice.key)
        }
    }
    // 移除
    removeNotice = (key:string) => {
        this.setState(state=>({
            notices:state.notices.filter((notice:any)=>{
                if(notice.key === key){
                    if (notice.onClose) {
                        setTimeout(notice.onClose,this.transitionTime)
                    };
                    return false;
                }
                return true;
            })
        }))
    }

    render() {
        const { notices } = this.state;
        return (
            <div>
                {
                    notices.map((notice:any)=>(
                        <Notice {...notice} />
                    ))
                }
            </div>
        )
    }
}


const createNotification = () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const mount:any = React.createRef();
    ReactDOM.render(<Notification ref={mount}/>,div);

    return {
        addNotice(notice:any){
            return mount.current?.addNotice(notice)
        },
        destroy(){
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    }
}

export default createNotification();