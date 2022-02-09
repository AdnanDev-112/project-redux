import { Link } from "react-router-dom";

const CategoryCard = (props) => {
    const { data } = props;

    return (
        <>
            <div className="col">
                <div className="card p-2 m-2" style={{ width: "16rem" }}>
                    <img src={data.image} className="card-img-top rounded-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{data.name} </h5>
                        <p className="card-text">{data.description}</p>
                        <Link to={`gig/${data.gigID}`} className="btn btn-primary rounded-pill">View</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CategoryCard
