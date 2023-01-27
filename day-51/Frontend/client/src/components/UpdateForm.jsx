export default function UpdateForm ({setCurrentData, currentData}) {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
    }

    function handleFormName (e) {
        setCurrentData({...currentData , name: e.target.value});
    }

    function handleFormAge (e) {
        setCurrentData({...currentData , age: e.target.value});
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input name="name" placeholder="Name" value={currentData.name} onChange={handleFormName}/>
                </label>
                    <br/>
                <label>Age: 
                    <input name="age" placeholder="Age" value={currentData.age} onChange={handleFormAge}/>
                </label>
                    <br/>
                <button>Update</button>
            </form>
        </div>
    )
}