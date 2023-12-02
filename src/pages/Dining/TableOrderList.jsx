import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { getTablesData } from "../../api/tables";

const TableOrderList = () => {
  const [tables,setTables] = useState({data:[],isLoading:true});
  useEffect(()=>{
    async function fetchTables() {
      const tablesData = await getTablesData();
      setTables({data:tablesData,isLoading:false});
    }
    fetchTables();
  },[]);


  const renderTables = () =>{
    return(
      <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Tables </h3>
          <nav aria-label="breadcrumb">
            <Link className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="/dishes/create">+ Add New Tables</Link>
          </nav>
        </div>
        <div class="row">
          {renderTableCard()}
        </div>
      </div>
    </div>
    );
  }

  const renderTableCard = () => {
    return (
      tables.data.map((table)=>{
        const isTaken = table.isTaken ? "text-danger" : "text-success"
        return (
          <div class="col-sm-4 grid-margin" id={table?.tableId || null}>
            <div class="card">
              <div class="card-body">
                {table?.tableName || ""}
                <div class="row">
                  <div class="col-8 col-sm-12 col-xl-8 my-auto">
                    <div class="d-flex d-sm-block d-md-flex align-items-center">
                      <h2 class="mb-0">$32123</h2>
                      <p class="text-success ms-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                    <h6 class="text-muted font-weight-normal">11.38% Since last month</h6>
                  </div>
                  <div class="col-4 col-sm-12 col-xl-4 text-center text-xl-right">
                    <i class={`icon-lg mdi mdi-codepen ${isTaken} ms-auto`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    );
  };
  return (
    <>
    {tables.isLoading && <Loader/>}
    {!tables.isLoading && renderTables()}
    </>
  );
}

export default TableOrderList;