
const CategoryCard = (props) => {
    const { data, id } = props;

    return (
        <>
            <div className="col">
                <div className="card p-2 m-2" style={{ width: "16rem" }} key={id}>
                    <img src={data.image} className="card-img-top rounded-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name} </h5>
                        <p className="card-text">{data.description}</p>
                        <a href="#" className="btn btn-primary rounded-pill">View {data.name}</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CategoryCard
