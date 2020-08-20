import React, {useState, useEffect} from 'react';
import './App.css';

export default () => {

const [arr, setArr] = useState([[]])


useEffect(()=>{
  // let myArr = [1,2,3]
  // setArr(a=> {
  //   for(let i =0; i<3; i++){
  //     a[i] = myArr[i]
  // }})
  // console.log(arr)


  let doubleArr = 
  [1,2,3,4,5,6,7,8,9]

  // console.log(doubleArr.length/3)
  setArr(a=>{
    let count = 0
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        a[i][j] = doubleArr[count++]
      }
    }
  })
  // console.log(arr)

},[])
  

  return (
  <>
  Logic
  </>
  );
}


