import { useState } from "react";

export default initInputValue => {

    const [formInputValue, setFormInputValue] = useState(initInputValue);

    const handleInputChange = (evt) => {
        setFormInputValue(evt.target.value)
    };

    const resetInputValue = () => {
        setFormInputValue('');
    };

    return [formInputValue, handleInputChange, resetInputValue];
}
