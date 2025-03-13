import { FormGroup, FormInputLabel, FormInput } from "./data-input.styles";

const DataInput = ({ label, ...otherProps }) => {
    return (
        <FormGroup>
            <FormInput {...otherProps} />
            {label && <FormInputLabel>{label}</FormInputLabel>}
        </FormGroup>);
}

export default DataInput;