const Course = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalUsedCredits, setTotalUsedCredits] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [remaining, setRemaining] = useState(20);

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then((data) => setAllCourses(data))


    }, []);

    return (
        <div className="container">
            <h1>Course Registration</h1>
            <div className="home-container">

                <div className="card-container">
                    {
                        allCourses.map((course) => (<div key={course.id} className="card">
                            <div className="card-img">
                                <img className="photo" src={course.image} alt="" />
                            </div>
                            <div><h5 className='title'>{course.title}</h5>
                                <p className='description'><small>{course.description}</small></p>
                                <div className="info">

                                    <p><i class="fa-solid fa-dollar-sign"></i><small> Price : {course.price}</small></p>
                                    <p>  <i class="fa-solid fa-book-open"></i><small> Credit: {course.credit}hr</small></p>
                                </div>
                            </div>
                            <button onClick={() => handleSelectCourses(course)} className="card-btn">Select</button>
                            <ToastContainer />


                        </div>))
                    }
                </div>


                <div className="cart">
                    <Cart selectedCourses={selectedCourses} totalPrice={totalPrice} totalUsedCredits={totalUsedCredits} remaining={remaining}></Cart>
                </div>




            </div>
        </div>
    );
};

export default Home;
