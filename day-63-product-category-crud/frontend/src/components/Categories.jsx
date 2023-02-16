import {toast} from 'react-toastify'
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Categories() {
    const URL = "http://localhost:8083/category"
    const [ categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories(){
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json()
        if(FETCHED_JSON.status === 'success') {
            setCategories(FETCHED_JSON.data)
        }
    }

    async function handleCategoryDelete (categoryId) {
        console.log(categoryId)
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(
                {
                    categoryId: categoryId,
                },
            )
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json();
        if(FETCHED_JSON.status === 'success') {
            toast(`Category with id = ${categoryId} delete successfully`)
            console.log(FETCHED_JSON.data);
            setCategories(FETCHED_JSON.data);
        }
    }

    async function handleSearchSubmit(e) {
        e.preventDefault();
        const searchInput = e.target.search.value;
        const SEARCH_URL = `http://localhost:8083/search?value=${searchInput}`;
        const FETCHED_DATA = await fetch(SEARCH_URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        if(FETCHED_JSON.status === 'success') {
            setCategories(FETCHED_JSON.data);
        }
        
    }


  return (
    <div>
        <h1>Categorie list Page</h1>

        <form onSubmit={handleSearchSubmit} className="search-body">
            <input name="search" placeholder='search'/>
            <button type='submit'>Search</button>
        </form>

        <table className='table'>
            <thead className='thead'>
                <tr className='list-names'>
                    <td className='cat-id'>Category ID</td>
                    <td className='cat-id'>Category Name</td>
                    <td className='cat-id'>Edit</td>
                    <td className='cat-id'>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    categories && categories.map((category, index) => {
                    
                        return (
                        <tr key={index}>
                            <td className='border'>{category.id}</td>
                            <td className='border'>{category.name}</td>
                                <td className='border'>
                                    <Link to={`/category/edit/${category.id}`}><button className="editbtn">Edit</button></Link>
                                </td>
                                <td className='border'>
                                    <button onClick={() => handleCategoryDelete(category.id)} className="deletebtn">Delete</button>
                                </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
