import React, {useState} from 'react'
import {Container,Screen,Previous, Current,Button} from "../Styles/Main"
export const Calculator = () => {
    const [current,setCurrent] = useState("")
    const [previous,setPrevious] = useState("")
    const [operation,setOperation] = useState("")

   const AppendValueHandler = (el) => {
    const value = el.target.getAttribute("data")
    if(value === '.' && current.includes(value))
        return
    setCurrent(current + value)
   }
   const deleteHandler = () => {
        setCurrent(String(current).slice(0,-1))
   }
   const allClearHandler = () => {
    setCurrent('')
    setPrevious('')
    setOperation('')
   }
   const chooseOperationHandler = (el) => {
    if(current === "") return
    if (previous !== "") {
        let value = compute()
        setPrevious(value)
    }else {
        setPrevious(current)
    }
    setCurrent('')
    setOperation(el.target.getAttribute('data'))

   }
   const equalHandler = (el) =>{
    let value = compute()
    if(value === undefined || value === null) return
    setCurrent(value)
    setPrevious("")
    setOperation("")
   }
   const compute = () => {
    let result;
    let previousNumber = parseFloat(previous)
    let currentNumber = parseFloat(current)
    if (isNaN(previousNumber) || isNaN(currentNumber)) return
    switch (operation) {
      case "÷":
        result = previousNumber / currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      case "x":
        result = previousNumber * currentNumber;
        break;

      case "-":
        result = previousNumber - currentNumber;
        break;
        default: return
    }
    return result
   }
  return (
    <>
    <Container>
        <Screen>
            <Previous>
              {previous} {operation}
            </Previous>
            <Current>{current}</Current>
        </Screen>
        <Button gridSpan={2} onClick={allClearHandler}>AC</Button>
        <Button onClick={deleteHandler}>DEL</Button>
        <Button operation data={'÷'} onClick={chooseOperationHandler}>÷</Button>
        <Button data={7} onClick={AppendValueHandler}>7</Button>
        <Button data={8} onClick={AppendValueHandler}>8</Button>
        <Button data={9} onClick={AppendValueHandler}>9</Button>
        <Button data={'x'}  onClick={chooseOperationHandler} operation>x</Button>
        <Button data={4} onClick={AppendValueHandler}>4</Button>
        <Button data={5} onClick={AppendValueHandler}>5</Button>
        <Button data={6} onClick={AppendValueHandler}>6</Button>
        <Button data={'+'}  onClick={chooseOperationHandler} operation>+</Button>
        <Button data={1} onClick={AppendValueHandler}>1</Button>
        <Button data={2} onClick={AppendValueHandler}>2</Button>
        <Button data={3} onClick={AppendValueHandler}>3</Button>
        <Button data={'-'}  onClick={chooseOperationHandler}operation>-</Button>
        <Button data={'.'} onClick={AppendValueHandler}>.</Button>
        <Button data={0} onClick={AppendValueHandler}>0</Button>
        <Button gridSpan={2} data={'='} onClick={equalHandler}>=</Button>
    </Container>
    </>
  )
}
