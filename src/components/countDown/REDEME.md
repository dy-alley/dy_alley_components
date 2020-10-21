# CountDown基本使用

```react
import React from 'react'
import CountDown from 'CountDown'

class Demo extends React.Component{
    render(){
        return <CountDown endTime="2020-06-12 16:09:00"/>
    }
}
```

**参数**

| 参数      | 说明     | 类型                          | 默认类型 |
| --------- | -------- | ---------------------------- | -------- |
| endTime   | 结束时间 | string : 2020-06-12 16:09:00  | ---      |
| className | 样式     | string                        | ---      |

