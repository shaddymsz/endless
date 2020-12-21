import React, { Fragment, useState, useEffect, useCallback } from "react";
import Breadcrumb from "../../common/breadcrumb";
import CreateLead from "./create-lead/create-lead";
import FilterTable from "./datatable/lead-filter";
import {useHistory} from 'react-router-dom';
import AccordionTwo from "../../base/accordionComponent/accordianTwo";

function Leads() {
  const [data, setData] = useState([]); // will fetch data from api and
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/dashboard/create-lead'), [history]);

  // useEffect(() => {
  //   fetch("https://devmentor.live/api/examples/contacts?api_key=b7c58b") // input url
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:8080/leads").then((res) => res.json().then((data) => setData(data.leads))
    );
  }, []);
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Leads" />
      <div className="row float-right mb-4 mr-4">
        <button className="btn btn-block btn-secondary btn-outline-secondary " class="btn pull-right btn-block btn-primary text-center" type="button" onClick={handleOnClick}>Create Lead</button>
      </div>
      <div className="row container-fluid  ">
        <FilterTable data={data} />
      </div>
      <AccordionTwo/>
    </Fragment>
  );
}

export default Leads;
