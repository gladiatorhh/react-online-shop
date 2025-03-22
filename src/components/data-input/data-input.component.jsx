import { FormGroup, FormInputLabel, FormInput } from "./data-input.styles";

const DataInput = ({ label, ...otherProps }) => {
    return (
        <FormGroup>
            <FormInput {...otherProps} />
            {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
        </FormGroup>);
}

export default DataInput;