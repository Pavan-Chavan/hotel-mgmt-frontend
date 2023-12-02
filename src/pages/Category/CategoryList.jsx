import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteCategory, getCategoryData, updateCategoryStatus } from "../../api/category";

const CategoryList = () => {

  const [Categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    async function fetchCategory() {
      setIsLoading(true)
      const temp = await getCategoryData();
      setCategories(temp);
      setIsLoading(false);
    }
    fetchCategory();
  },[]);

  const updateCategory = async (id,status) => {
    const resMsg = await updateCategoryStatus(id,status);
    window.alert(resMsg);
    window.location.reload();
  };

  const deleteCategoryId = async (id) => {
    const resMsg = await deleteCategory(id);
    window.alert(resMsg);
    window.location.reload();
  }

  const renderCategoryList = () => {
    return Categories.map((category) => 
    {
      const btnClass = category?.isDisable ? "btn-success" : "btn-danger";
      return <>
        <tr>
        <td>{category.name}</td>
        <td>{category.createdAt}</td>
        <td>
          <div className="template-demo">
            <button onClick={()=>{updateCategory(category?.categoryId,category?.isDisable)}} type="button" className={`me-5 btn ${btnClass} btn-md`}>{category.isDisable ?"Enable":"Disable"}</button>
            <button type="button" onClick={() => {deleteCategoryId(category?.categoryId)}} className="btn btn-danger btn-md">Delete</button>
            <Link className="btn btn-warning btn-md" state={category} to={`/category/edit/${category.categoryId}`}>Edit</Link>
          </div>
        </td>
      </tr>
      </>
    })
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Categories </h3>
          <nav aria-label="breadcrumb">
            <Link className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/category/create">+ Add New Categories</Link>
          </nav>
        </div>
        <div className="row w-100">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Category Name</th>
                        <th>Created At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoading && renderCategoryList()}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
