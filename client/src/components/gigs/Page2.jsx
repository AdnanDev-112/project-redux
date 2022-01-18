
const Page2 = ({ formData, setFormData }) => {
    return (
        <>
            <label className="h4 me-3">Gig Banner</label>
            <input type="file" id='inputfile' />
            <div className='img-view mt-2' id='imgview'>
                <img src="" alt="" className='img-view__img' />
                <span className="img-view__def-txt"> Image Preview </span>
            </div>
        </>
    )
}

export default Page2
