import { useRef, useState } from 'react';

const SimpleInput = (props) => {
    // We don't use both
    // Ref is better if you need validation in the submission (once)
    const nameInputRef = useRef();
    // State is better when you need validation in every keystroke and to reset the field
    const [enteredName, setEnteredName] = useState('');

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName('');
        // For ref:
        // nameInputRef.current.value = ''
        // but it is not ideal, because we are directly manipulating the DOM
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    value={enteredName}
                />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
