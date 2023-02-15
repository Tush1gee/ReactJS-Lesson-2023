import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Categories from "./components/Categories";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>DAY - 63 CATEGORY CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={null} />
        <Route path="/category/delete/:id" element={null} />
      </Routes>
    </div>
  );
}

export default App;
