import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

export const Donate = () => {
    return(
        <div id = 'donateField'>
            <h2>FAITES UN DON</h2>
            <p>
                Veuillez entrer le montant
            </p><br />
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Append>
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <div style={{ display : 'flex', flexDirection : 'row', justifyContent : 'space-around'}}>
                <p className = 'fundEntry'>10 $</p>
                <p className = 'fundEntry'>100 $</p>
                <p className = 'fundEntry'>1.000 $</p>
            </div>
            <button
                type = 'button'
                className = 'donateBtn'
                onClick = {() => console.log('Ok')}
            >
                Donate Now
            </button>
        </div>
    )
}