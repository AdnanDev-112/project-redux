import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getAllProfiles,
    fetchCatProfiles,
} from "../../features/categories/categoriesSlice";
import CategoryCard from "./CategoryCard";
// import { userLogged } from "../../features/userProfile/userProfileSlice";



const Category = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCatProfiles());
    }, [dispatch]);


    const data = useSelector(getAllProfiles);
    let renderCards = "";
    renderCards = data.Response === "False" ? (<><h1>Loading....</h1></>) :
        (data.map((cards, index) => {
            return <CategoryCard id={index} data={cards} />
        }));

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {renderCards}
                </div>
                {/* {console.log(data)} */}
            </div>
        </>)

        ;
};

export default Category;
