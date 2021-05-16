import { useState } from 'react';

const SimpleInput = (props) => {
    // State is better when you need validation in every keystroke and to reset the field
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== '';
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const nameInputBlurHandler = event => {
        setEnteredNameTouched(true);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);

        setEnteredName('');
        setEnteredNameTouched(false);
    }

    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && <p className="error-text">Name must be not empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
