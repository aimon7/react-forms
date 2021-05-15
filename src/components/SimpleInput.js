import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    // We don't use both
    // Ref is better if you need validation in the submission (once)
    const nameInputRef = useRef();
    // State is better when you need validation in every keystroke and to reset the field
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredNameIsValid(true);

        setEnteredName('');
        // For ref:
        // nameInputRef.current.value = ''
        // but it is not ideal, because we are directly manipulating the DOM
    }

    const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
                {!enteredNameIsValid && <p className="error-text">Name must be not empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
