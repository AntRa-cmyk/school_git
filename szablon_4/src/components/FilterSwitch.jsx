function FilterSwitch({name, checked, handleAdd, handleRemove}) {
    function handleClick(e) {
        if(e.target.checked) {
            handleRemove(name)
        }
        else {
            handleAdd(name)
        }
    }

    return (<>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={`miasto-${name}`} checked={checked ? true : null} onClick={handleClick}></input>
            <label className="form-check-label" htmlFor={`miasto-${name}`}>{name}</label>
        </div>
    </>)
}

export default FilterSwitch