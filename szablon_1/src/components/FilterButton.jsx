function FilterButton({setFilter, currentFilter, filterTitle, filterValue}) {
    return (<button className={currentFilter == filterValue ? "btn btn-primary m-2 active" : "btn btn-primary m-2"} onClick={() => {setFilter(filterValue)}}>
        {filterTitle}
        </button>)
}

export default FilterButton