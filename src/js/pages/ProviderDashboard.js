import React from "react";
import Img from 'react-image';
import { Icon } from 'react-icons-kit';
import {edit} from 'react-icons-kit/feather/edit';


export default class ProviderDashboard extends React.Component {
  render() {
    console.log("Upload Data");
    return (
        <div class="well well-lg">
           <div class ="panel panel-primary">
                  <div class="panel-heading">
                    <b>Patients List</b>
                  </div>
                  <div class="panel-body">
                    <div class="table-hover">
                      <table class ="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">PatientID</th>
                            <th scope="col">PatientName</th>
                            <th scope="col">Category</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
            </div>
        </div>
    );
  }
}
