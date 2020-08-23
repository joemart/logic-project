import React, {useState, useEffect} from 'react';
import './App.css';

export default () => {

const [arr, setArr] = useState(Array.from(Array(3), ()=> Array(3)))


useEffect(()=>{

  const doubleArr = 
  [1,2,3,4,5,6,7,8,9]

  const double = a =>{
    let count = 0
    for(let i=0; i<a.length; i++){
      for(let j=0; j<a[i].length; j++){
        a[i][j] = doubleArr[count++]
      }
    }
    return a
  }

  setArr(a=>double(a))
  console.log(arr)

},[])
  

  return (
  <>
  Logic
  </>
  );
}


