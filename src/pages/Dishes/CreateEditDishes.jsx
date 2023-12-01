import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDishes, loadCategoriesData, resetState, updateDishes } from "../../store/slice/DishesSlice";
import { createDish, updateDish } from "../../api/dishes";
import { getCategoryData } from "../../api/category";
import Loader from "../../components/Loader";
import { async } from "q";

const renderFormTitle = (mode) => {
  if(mode === "edit") {
    return "Edit";
  } else {
    return "Create";
  }
}

export default function CreateEditDishes() {
  const location = useLocation();
  const mode = location.pathname.split("/")[2];
  const dispatchAction = useDispatch();
  const state = useLocation().state;
  const dishesData = useSelector((state) => {return state.dishes})
  const navigate = useNavigate();

  useEffect(()=>{
    async function loadCategoriesDataApi () {
      const tablesData = await getCategoryData();
      dispatchAction(loadCategoriesData(tablesData));
    }
    if(mode === "edit") {
      loadDishesData();
    } else {
      dispatchAction(resetState({}));
    }
    loadCategoriesDataApi();
  },[]);

  const loadDishesData = () => {
    dispatchAction(getDishes(state));
  }

  const updateField = (value,field) => {
    dispatchAction(updateDishes({value,field}));
  }

  const postDishes = () => {
    if(mode === "edit") {
      updateDish(dishesData.dishes);
    } else {
      createDish(dishesData.dishes);
    }
    navigate("/dishes");
  }

  const renderDishesForm = () =>{
    return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">{renderFormTitle(mode)} Dishes</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{renderFormTitle(mode)} Dishes</h4>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="PermissionName">Dish Name</label>
                    <input type="text" name="name" className="form-control" value={dishesData?.dishes.name || ""} id="permissionName" onChange={(e)=>{updateField(e.target.value,e.target.name)}} placeholder="Dish Name"/>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Category</label>
                    <select class="form-control" name="isDisable" value={dishesData?.dishes.isDisable} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      {dishesData.categories.map((category)=>(<option value={category === dishesData?.dishes?.category }>{category.name}</option>))}
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleSelectGender">Status</label>
                    <select class="form-control" name="isDisable" value={dishesData?.dishes.isDisable} onChange={(e)=>{updateField(e.target.value,e.target.name)}}>
                      <option value={true}>Disable</option>
                      <option value={false}>Enable</option>
                    </select>
                  </div>
                  <button type="submit"  onClick={postDishes} className="btn btn-primary mr-2">Submit</button>
                  <Link className="btn btn-dark" to={"/dishes"}>Cancel</Link>
                </form>
              </div>
            </div>
            </div>
            </div>
      </div>
    </div>)
  }
  return (
    <>
      {dishesData.isLoading && <Loader/>}
      {!dishesData.isLoading && renderDishesForm()}
    </>
  )
}
