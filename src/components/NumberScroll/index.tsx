import React, { useEffect, useRef, FC, useState } from "react";
import styles from "./_numberScroll.module.scss";

interface IProps {
  number?: number;
  max?:number;
}
// 最大数字
const MAX_LEN = 8;
export const NumberScroll: FC<IProps> = ({ number,max }) => {
  const [numberList, setNumberList] = useState<string[]>(new Array(max).fill(0));
  const numberRef = useRef<HTMLSpanElement>(null);
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const core = () => {
      console.log(numberRef.current)
    let random = getRandomNumber(0, 10);
    if(!numberRef.current)return;
    (numberRef.current as HTMLSpanElement).style.transform = `translate(-50%, -${
      random * 10
    }%)`;
  };
  const numberSplit = () => {
    var numStr = number?.toString();
    var list:any[] = [];
    for(var i=0;i<(numStr as string).length;i++) {
        list.push((numStr as string)[i]);
    }
    setNumberList(list);
  }
  useEffect(() => {
    core();
  }, [numberList]);
  useEffect(() => {
    numberSplit()
  }, [number]);
  return (
    <div>
      {
          numberList.map((item,index)=>(
            <div className={styles.container}> 
                <span key={index}>
                  <i ref={numberRef}>{item}</i>
                </span>
            </div>
          ))
      }
    </div>
  );
};
NumberScroll.defaultProps = {
  number: 12345678,
  max:MAX_LEN
};
export default NumberScroll;


// // 定时增长数字
// increaseNumber () {
//     let self = this
//     this.timer = setInterval(() => {
//       self.newNumber = self.newNumber + getRandomNumber(1, 100)
//       self.setNumberTransform()
//     }, 3000)
//   },
//   // 设置每一位数字的偏移
//   setNumberTransform () {
//     let numberItems = this.$refs.numberItem
//     let numberArr = this.computeNumber.filter(item => !isNaN(item))
//     for (let index = 0; index < numberItems.length; index++) {
//       let elem = numberItems[index]
//       elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
//     }
//   }