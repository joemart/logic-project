import React, {useState, useEffect} from 'react';
import './App.css';

export default () => {

  const [arr, setArr] = useState(Array.from(Array(3), ()=> Array(3)))
  const [doubleArr] = useState(['x','x','x','x','x','x','x','x','x'])
  
  //checks left and right
  const toLeftRight = (arr, i) => {
    return arr[i].every(x=>x==='x')
  }
  //checks up and down
  const toUpDown = (arr, j) =>{
    let temp = arr.map(a=>a[j])
    return temp.every(x=>x==='x')
  }

  //checks top left towards bottom right
  const fromTopLefttoBottomRight = (arr, i, j) =>{
    //left() -> return all from the left
    let temp = [];
    (() =>{
      let x = i
      let y = j
      while(arr[x] !== undefined && arr[x][y] !== undefined)
      {
        temp.push(arr[x--][y--])
      }
    })();
    //right() -> return all from the right
    (() =>{
      let x = i
      let y = j
      while(arr[x+1] !== undefined && arr[x+1][y+1] !== undefined)
      {
        temp.push(arr[++x][++y])
      }
    })();
    //compare strings and array size
    return temp.every(x=>x===arr[i][j]) && temp.length == 3
  }

  //checks top right towards bottom left

  const fromTopRighttoBottomLeft = (arr, i, j) =>{
    //left() -> return all from the left
    let temp = [];
    (() =>{
      let x = i
      let y = j
      while(arr[x] !== undefined && arr[x][y] !== undefined)
      {
        temp.push(arr[x++][y--])
      }
    })();
    //right() -> return all from the right
    (() =>{
      let x = i
      let y = j
      while(arr[x-1] !== undefined && arr[x-1][y+1] !== undefined)
      {
        temp.push(arr[--x][++y])
      }
    })();
    //compare strings and array size
    return temp.every(x=>x===arr[i][j]) && temp.length == 3
  }


  const double = a =>{
    let count = 0
    for(let i=0; i<a.length; i++){
      for(let j=0; j<a[i].length; j++){
        a[i][j] = doubleArr[count++]
      }
    }
    return a
  }

  useEffect(()=>{
  setArr(a=>double(a))
  
  console.log(fromTopRighttoBottomLeft(arr,0,0))
  console.log(fromTopRighttoBottomLeft(arr,1,0))
  console.log(fromTopRighttoBottomLeft(arr,2,0))
  console.log(fromTopRighttoBottomLeft(arr,0,1))
  console.log(fromTopRighttoBottomLeft(arr,1,1))
  console.log(fromTopRighttoBottomLeft(arr,2,1))
  console.log(fromTopRighttoBottomLeft(arr,0,2))
  console.log(fromTopRighttoBottomLeft(arr,1,2))
  console.log(fromTopRighttoBottomLeft(arr,2,2))

  console.log(arr)
  },[])

  return (
  <>
  Logic
  </>
  );
}


