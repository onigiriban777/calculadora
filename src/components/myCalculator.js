import React, {useState} from 'react';
import './myCalculator.css';
import {Grid, Typography} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function SetId(numeros) {
    switch(numeros){
        case 1:
                return 'one';
                break;
        case 2:
                return 'two';
                break;
        case 3:
                return 'three';
                break;
        case 4:
                return 'four';
                break;  
        case 5:
                return 'five';
                break;
        case 6:
                return 'six';
                break;
        case 7:
                return 'seven';
                break;   
        case 8:
                return 'eight';
                break;    
        case 9:
                return 'nine';
                break;
        case 0:
                return 'zero';
                break;
        case '+':
                return 'add';
                break;
        case '-':
                return 'substract';
                break;
        case 'X':
                return 'multiply';
                break;
        case '/':
                return 'divide';
                break;
        case 'CE':
                return 'clear';
                break
        case 'C':
            return 'clear';
            break
        default:
                break;
    }
    }



export default function MyCalculator() {
const numbers = [7,8,9,4,5,6,1,2,3,0,'.'];
const [input, setInput] = useState('');


function BorrarResultado() {
    setInput('');
}


    return(

        <React.Fragment>
            <Container id='mi-calculadora'>
                <Row xs={12}>
                    <Typography variant='h2' id='title-calc' >Hi! I'm a Calculator!</Typography>
                </Row>
                <Row>
                    <Typography variant='h5'id='display'>{input}</Typography>
                </Row>
                <Row xs={3} id='numbers-container'>
                {numbers.map(numbers => (
                        <button onClick={(event)=>{
                            setInput(input + event.target.value)
                        }}
                        value={numbers}
                        key={numbers}
                        id={SetId(numbers)}
                        className='buttons'
                        >{''}{numbers}</button>
                ))}
                     <button
          onClick={(event) => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (event) {
              console.log(event);
            }
          }}
          value="="
          id='equal'
        >
          =
        </button>
                </Row>
                <Row xs={12}>
                <button id='clear' onClick={BorrarResultado}>CLEAR</button>
                <button id='add' className='operaciones' onClick={(event) => setInput(input + event.target.value)} value="+" >+</button>
                <button id='substract' className='operaciones' onClick={(event) => setInput(input + event.target.value)} value="-">{" "}-{" "}</button>
                <button id='multiply' className='operaciones' onClick={(event) => setInput(input + event.target.value)} value="*" >{" "}
          X</button>
                <button id='divide' className='operaciones' onClick={(event) => setInput(input + event.target.value)} value="/">{" "}/</button>
                </Row>
            </Container>
        </React.Fragment>
    )
}