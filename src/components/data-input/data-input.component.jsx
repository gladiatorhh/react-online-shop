import "./data-input.styles.scss"

const DataInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
        </div>);
}

export default DataInput;