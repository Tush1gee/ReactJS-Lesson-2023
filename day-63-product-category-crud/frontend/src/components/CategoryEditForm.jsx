import React from "react";
import { useEffect, useState  } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function CategoryEditForm() {
    const URL = 'http://localhost:8083/category'
    const navigate = useNavigate();
    const {id} = useParams()
    console.log(id);

    const [category, setCategory] = useState({
        name: "Test"
    });

    async function fetchCategory () {
        const options = {
            method: "PUT",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                categoryId: id,
            }),
        }
        const FETCHED_DATA = await fetch(URL, options);
        const FETCHED_JSON = await FETCHED_DATA.json();
        if(FETCHED_JSON.status == 'success') {
            setCategory(FETCHED_JSON.data);
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    function handleInputChange(e) {
        setCategory(e.target.value);
    }


    async function handleEditSubmit(e) {
        e.preventDefault()
        console.log(e.target.categoryName.value);
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                categoryId: id,
                categoryName: e.target.categoryName.value,
                isEdit: true,
            }),
        };

        const FETCHED_DATA = await fetch (URL, options);
        const FETCHED_JSON = FETCHED_DATA.json()
        if(FETCHED_JSON.status === "success") {
            setCategory(FETCHED_JSON.data)
            navigate("/category/list")
        }
        
    }

  return (
    <div>
        <h1>Category edit form page</h1>
        <form onSubmit={handleEditSubmit}>
            <input name="categoryName" value={category.name} onChange={handleInputChange}/>
            <button>Edit Saved</button>
        </form>
    </div>
  )
}
