import React, {useState} from 'react'
import {Container,Screen,Previous, Current,Button} from "../Styles/Main"
export const Calculator = () => {
    const [current,setCurrent] = useState("")


   const AppendValueHandler = (el) => {
    const value = el.target.getAttribute("data")
    console.log(value)
   }
  return (
    <>
    <Container>
        <Screen>
            <Previous>
                10+
            </Previous>
            <Current>10</Current>
        </Screen>
        <Button gridSpan={2}>AC</Button>
        <Button>DEL</Button>
        <Button operation>÷</Button>
        <Button data={7} onClick={AppendValueHandler}>7</Button>
        <Button data={8} onClick={AppendValueHandler}>8</Button>
        <Button data={9} onClick={AppendValueHandler}>9</Button>
        <Button operation>x</Button>
        <Button data={4} onClick={AppendValueHandler}>4</Button>
        <Button data={5} onClick={AppendValueHandler}>5</Button>
        <Button data={6} onClick={AppendValueHandler}>6</Button>
        <Button operation>+</Button>
        <Button data={1} onClick={AppendValueHandler}>1</Button>
        <Button data={2} onClick={AppendValueHandler}>2</Button>
        <Button data={3} onClick={AppendValueHandler}>3</Button>
        <Button operation>-</Button>
        <Button data={'.'} onClick={AppendValueHandler}>.</Button>
        <Button data={0} onClick={AppendValueHandler}>0</Button>
        <Button gridSpan={2}>=</Button>
    </Container>
    </>
  )
}
