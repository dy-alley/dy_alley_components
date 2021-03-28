import React, { FC, useState } from 'react'
import classNames from 'classnames';


export interface IProps {
    src:string;
    defaultUrl:string;
    style?:React.CSSProperties;
    className?:string;
    alt?:string;
}

export const Image:FC<IProps> = function Image({src, style = {}, className = '', defaultUrl, alt}) {
    const classname = classNames(className);
    const Img = React.useRef<HTMLImageElement>(null);
    // 新增一个状态，标记是否发生过错误
    const [imgError, setImgError] = useState(false)
    if(!imgError) {
        return (
            <img 
            ref={Img}
            style={style}
            src={src}
            className={classname}
            alt={alt}
            onError = {()=>{
                if (Img.current) setImgError(true)
            }}
            />
        )
    } else {
        // 当网络状况很差时，defaultImg也可能加载失败，这样onError就会陷入死循环,因此做容错处理
        return <img style={style} className={className} src={defaultUrl} alt={alt}/>;
    }
    
}
export default Image