import React from "react";
import {check} from 'react-icons-kit/feather/check'
import {x} from 'react-icons-kit/feather/x'
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import { Icon } from 'react-icons-kit'
export default class ProviderPermissions extends React.Component {
  render() {


    console.log("featured");
    return (
      <div class="well well-lg">
        <div class ="panel panel-primary">
              <div class="panel-heading">
                <b>Requested Patients Status</b>
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
                        <th scope="col">Status</th>
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
