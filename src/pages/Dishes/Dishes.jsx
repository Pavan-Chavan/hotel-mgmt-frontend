import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deleteDish, getDishesData, updateDishStatus } from "../../api/dishes";

const Dishes = () => {

  const [Dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    async function fetchDishes() {
      setIsLoading(true)
      const temp = await getDishesData();
      setDishes(temp);
      setIsLoading(false);
    }
    fetchDishes();
  },[]);

  const updateDishStatus = async (id,status) => {
    const resMsg = await updateDishStatus(id,status);
    window.alert(resMsg);
    window.location.reload();
  };

  const deleteDishId = async (id) => {
    const resMsg = await deleteDish(id);
    window.alert(resMsg);
    window.location.reload();
  }

  const renderDishes = () => {
    return Dishes.map((dishes) => 
    {
      const btnClass = dishes?.isDisable ? "btn-success" : "btn-danger";
      return <>
        <tr>
        <td>{dishes.name}</td>
        <td>{dishes.createdAt}</td>
        <td>
          <div className="template-demo">
            <button onClick={()=>{updateDishStatus(dishes?.dishId,dishes?.isDisable)}} type="button" className={`me-5 btn ${btnClass} btn-md`}>{dishes.isDisable ?"Enable":"Disable"}</button>
            <button type="button" onClick={() => {deleteDishId(dishes?.dishId)}} className="btn btn-danger btn-md">Delete</button>
            <Link className="btn btn-warning btn-md" state={dishes} to={`/dishes/edit/${dishes.dishId}`}>Edit</Link>
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
          <h3 className="page-title"> Dishes </h3>
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
                        <th>Dish Name</th>
                        <th>Created At</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!isLoading && renderDishes()}
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

export default Dishes;
