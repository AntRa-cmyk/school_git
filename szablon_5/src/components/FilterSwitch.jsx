function FilterSwitch({value, set, label}) {
    return (<div className="form-check form-switch m-2">
        <input onChange={() => set(!value)} className="form-check-input" type="checkbox" role="switch" checked={!value} />
        <label className="form-check-label">{label}</label>
    </div>)
}

export default FilterSwitch