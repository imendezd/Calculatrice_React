import PropTypes from 'prop-types';
import { useState } from 'react';


const CalculatorForm = (props) => {
    
    const [nb1, setNb1] = useState('');
    const [operation, setOperator] = useState('');
    const [nb2, setNb2] = useState('');
    const [result, setResult] = useState('');

    const regexValidNb = /^\d*\.?\d*$/; 

    const handleNb1 = (e) => {
        const { value } = e.target;
        if (regexValidNb.test(value)) {
            setNb1(value);
        }
    }

    const handleNb2 = (e) => {
        const { value } = e.target;
        if (regexValidNb.test(value)) {
            setNb2(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Annule le comportement "submit" du formulaire (refresh de la page)

        const data = {
            nb1: parseInt(nb1),
            operation: operation,
            nb2: parseInt(nb2)
        }
        switch (operation){
            case '+':
                setResult (parseInt(nb1) + parseInt(nb2));
            break;
            case '-':
                setResult (parseInt(nb1) - parseInt(nb2));
            break;
            case 'X':
                setResult (parseInt(nb1) * parseInt(nb2));
            break;
            case '/':
                setResult (parseInt(nb1) / parseInt(nb2));
             break;
        }
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nb1">Number </label>
                <input id="nb1" type="text" onChange={handleNb1} value={nb1}  />
                <label htmlFor="operation"> Operation </label>
                <select name="operation" id="operation" onChange={(e) => setOperator(e.target.value)} value={operation}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">X</option>
                    <option value="/">/</option>
                </select>
                <label htmlFor="nb2"> Number </label>
                <input id="nb2" type="text" onChange={handleNb2} value={nb2}  />
            
            <button type="submit">Calculate</button>
            <label htmlFor="result"> Result </label>
                <input id="result" type="text" disabled value={result}  />
            </div>   
        </form>
    )
}

export default CalculatorForm;