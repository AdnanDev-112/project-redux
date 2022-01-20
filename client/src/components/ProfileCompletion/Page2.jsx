import { useState } from 'react';
import Api from './taskapi';
const OccData = [...new Set(Api.map((curElem) => {
    return curElem.category
}))]


const Page2 = ({ formData, setFormData }) => {

    const [apiData, setapiData] = useState(Api)
    const [newData, setnewData] = useState(OccData)
    const filterItem = (category) => {

        const Updatedlist = Api.filter((curElem) => {
            return curElem.category === category
        });
        setapiData(Updatedlist);

    };

    // Occu List Ends Here 


    // Check Box State 
    const [checkedState, setcheckedState] = useState(
        new Array(apiData.length).fill(false)
    );


    const handleOnCheck = (position) => {
        const updateCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setcheckedState(updateCheckedState);

        let selectedOccupation = updateCheckedState.map((element, index) => {
            if (element === true) {

                return apiData[index].category
            }
        }).filter(function (element) {
            return element !== undefined;
        });
        setFormData({ ...formData, occupation: selectedOccupation })

    }



    return (
        <>
            <hr className="featurette-divider" />
            <div className="">
                <div className="">
                    <h4 className="h4">Your Occupation</h4>

                    <div className="dropdown my-2">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                            {newData.map((curElem) => {
                                return (
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <li><a className="dropdown-item " href="#" key={curElem.id} onClick={() => filterItem(curElem)}>{curElem}</a></li>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                {apiData.map((curElem, index) => {
                    const { id, category } = curElem;
                    return (

                        <div className="form-check" key={id}>
                            <input className="form-check-input" type="checkbox" onChange={() => handleOnCheck(index)} checked={checkedState[index]} value={category} id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {category}
                            </label>
                        </div>
                    )
                })
                }


            </div>
            <hr className="featurette-divider" />
            {/* <div className="">
                <label className="h4"> Skills</label>

            </div> */}

        </>
    )
}

export default Page2
