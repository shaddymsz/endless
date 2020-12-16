import React, { Fragment } from "react";
import ReactTable from "react-table";
import Profile from "../lead-profile/lead-profile";
import { useHistory } from "react-router-dom";
import Checkbox from "react-input-range";

const Datatable = ({ data }) => {
  const history = useHistory();

  const pagination = true;
  const pageSize = 20;
  const Headers = [
    {
      Header: "",
      accessor: "",
      Cell: (row) => {
        return <input type="checkbox" style={{ marginLeft: 3 }} />;
      },
    },
    {
      Header: "ID",
      accessor: "_id",
    },

    {
      Header: "First Name",
      accessor: "First_Name",
    },
    {
      Header: "Last Name",
      accessor: "Last_Name",
    },

    {
      Header: "Gender",
      accessor: "Gender",
    },
    {
      Header: "Age",
      accessor: "Age",
    },
    {
      Header: "Marital Status",
      accessor: "Marital_Status",
    },
    {
      Header: "Spouse Name",
      accessor: "Spouse_Name",
    },
    {
      Header: "Yearly Income",
      accessor: "Yearly_Income",
    },
    {
      Header: "City",
      accessor: "City",
    },
    {
      Header: "State",
      accessor: "State",
    },
  ];

  const handleChange = () => {
    alert("checked");
  };
  const onRowClick = (state, rowInfo, column, instance) => {
    return {
      onClick: (e) => {
        history.push({
          pathname: "/dashboard/lead-profile",
          search: "?the=search",
          state: { info: rowInfo },
        });
        console.log("It was in this row:", state);
      },
    };
  };

  // const columns = data[0] && Object.keys(data[0]);
  return (
    <Fragment>
      <div className="container-fluid mt-4 responsive-table">
        {/* <table class="table  table-hover mt-5">
                <thead>
                    <tr>{data[0] && columns.map((heading)=> <th>{heading}</th>)} </tr>
                </thead>
                <tbody>
                    {data.map((row) =>(
                        <tr>
                            {columns.map((column)=>(
                                <td onClick={handleClick}>
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table> */}
        <div>
          <ReactTable
            data={data}
            columns={Headers}
            defaultPageSize={pageSize}
            showPagination={pagination}
            getTrProps={onRowClick}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Datatable;

// recomendations
