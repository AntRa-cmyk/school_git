function Image({data, handleDownload}) {
    return (<>
        <div className="col-12 col-sm-6 col-md-4">
            <img src={data.filename} alt={data.alt} className="img-fluid rounded" />
            <h4 className="h6 mt-2">Pobrań: {data.downloads}</h4>
            <button type="button" onClick={() => {handleDownload(data.id)}} className="btn btn-success btn-sm">Pobierz</button>
        </div>
    </>)
}

export default Image