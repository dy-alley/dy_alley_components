//import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { InputHTMLAttributes } from 'react'
type InputSize = 'lg' | 'sm';

/*
    Omit的作用是用来移除或者忽略掉一个只
    因为input默认是有size属性的 而我们自定义的size与InputHTMLAttributes中的size是有冲突的
    因此我们需要用到Omit   第二个参数是忽略或者移除掉那个属性
*/
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean;
    size: InputSize;
  //  icon?: IconProp;
    prepand?: string | React.ReactElement;
    append?: string | React.ReactElement;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}