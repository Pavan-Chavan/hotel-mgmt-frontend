import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, resetState, updateCategory } from "../../store/slice/CategorySlice";
import { createCategory, updateCategoryAPI, updateCategoryStatus } from "../../api/category";

const renderFormTitle = (mode) => {
  if(mode === "edit") {
    return "Edit";
  } else {
    return "Create";
  }
}

export default function CreateEditCategory() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const dispatchAction = useDispatch();
  const state = useLocation().state;
  const CategoryData = useSelector((state) => {return state.category})
  const navigate = useNavigate();

  useEffect(()=>{
    if(mode === "edit") {
      loadCategoryData();
    } else {
      dispatchAction(resetState({}));
    }
  },[]);

  const loadCategoryData = () => {
    dispatchAction(getCategory(state));
  }

  const updateField = (value,field) => {
    dispatchAction(updateCategory({value,field}));
  }

  const postCategory = () => {
    if(mode === "edit") {
      updateCategoryAPI(CategoryData.category);
    } else {
      createCategory(CategoryData.category);
    }
    navigate("/category");
  }

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">{renderFormTitle(mode)} Categories</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{renderFormTitle(mode)} Categories</h4>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="categoryName">Category Name</label>
                    <input type="text" name="name" className="form-control" value={CategoryData?.category.name || ""} id="categoryName" onChange={(e)=>{updateField(e.target.value,e.target.name)}} placeholder="Category Name"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Status</label>
                    <select class="form-control" name="isDisable" value={CategoryData?.category.isDisable} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      <option value={true}>Disable</option>
                      <option value={false}>Enable</option>
                    </select>
                  </div>
                  <button type="submit"  onClick={postCategory} className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-dark" to={"/category"}>Cancel</Link>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>
  )
}
