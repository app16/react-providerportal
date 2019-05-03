import React from "react";
import Img from 'react-image';
import { Icon } from 'react-icons-kit';
import {edit} from 'react-icons-kit/feather/edit';
import {plus} from 'react-icons-kit/ikons';
import {check} from 'react-icons-kit/feather/check'
import {x} from 'react-icons-kit/feather/x'
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap'

const patientUploads = [];

const blockdata =[];
const TableRow4 = ({ SrNo, blockNumber, prevHash, currentHash}) => {
  return (
    <tr>
      <td>{SrNo}</td>
      <td>{blockNumber}</td>
      <td>{prevHash}</td>
      <td>{currentHash}</td>
    </tr>
  );
}

export default class ProviderDashboard extends React.Component {
  constructor (props){
    super(props);
    this.state={
      counter:0,
      reqResponse:{},
    };
    this.handleRequest = this.handleRequest.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.putblockdata = this.putblockdata.bind(this);
}

putblockdata(){
  fetch('http://130.147.175.222:8099/chaindashboard',{
   method: 'get'
 }).then(res =>{if (res.status>=200 && res.status<300) {
   return res.json();
}
else {
 console.log('sometihng went wrong');
    }
  }).then(function (json){
    var count = 1;
    for (var i in json){
      let blocks={
        srno:count,
        block:json[i]
      };
      blockdata.push(blocks);
      count = count +1;
    }
    console.log(blockdata)
  });
}

  handleRequest(PatientID, Category,CategoryID) {
    console.log('The button was clicked. ');
    var reqCounter = 'REQ'+this.state.counter;
    var reqPayload = {
      "reqID": reqCounter,
      "proID": 'PR0',
      "patID": PatientID,
      "category": Category,
      "categoryID":CategoryID
    };

     fetch('http://130.147.175.222:8099/request',{
       method: 'post',
       body : JSON.stringify(reqPayload),
       headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'}
     }).then(res =>{if (res.status>=200 && res.status<300) {
       return res.json();
     }
   else {
     console.log('sometihng went wrong');
        }
      }).then(data =>{
        this.setState({reqResponse:data});
        console.log(this.state.reqResponse);
      }).catch(err => err);
    console.log(reqPayload);
    var updatedCounter = this.state.counter + 1;
    this.setState({counter:updatedCounter});
    console.log(this.state);
  }

  componentDidMount(){
    fetch('http://130.147.175.222:8099/querydb',{
     method: 'get'
   }).then(res =>{
        if (res.status>=200 && res.status<300) {
            return res.json();
          }
        else {
            console.log('sometihng went wrong');
        }
    }).then(function (json){
      var count=1;
      for(var i in json){
        for(var j in json[i].data){
          if(json[i].category=='Medication'){
            let patreq={
              id:count,
              category:json[i].category,
              patID:json[i].data[j].PatientID,
              categoryID:'MED'+json[i].data[j].MedID
             };
             patientUploads.push(patreq);
          }
          else if (json[i].category=='History'){
            let patreq={
              id:count,
              category:json[i].category,
              patID:json[i].data[j].PatientID,
              categoryID:'HIST'+json[i].data[j].HistID
            };
            patientUploads.push(patreq);
          }
          else {
              let patreq={
                id:count,
                category:json[i].category,
                patID:json[i].data[j].PatientID,
                categoryID:'LIFE'+json[i].data[j].LifeID
              };
              patientUploads.push(patreq);
            }
            count = count +1;
          }
        }
          console.log(patientUploads);
        }
    );

    this.putblockdata();
  }

  render() {
    console.log(this.state.requestID);
    console.log("Upload Data");

    const TableRow = ({ SrNo, PatientID, Category, CategoryID}) => {
        return (
          <tr>
            <td>{SrNo}</td>
            <td>{PatientID}</td>
            <td>{Category}</td>
            <td>{CategoryID}</td>
            <td>
            <ButtonToolbar>
              <button type="button" onClick={()=>this.handleRequest(PatientID, Category,CategoryID)} class="btn btn-primary"><Icon size={'18'} icon={plus}/></button>
            </ButtonToolbar>
            </td>
          </tr>
        );
      }

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
                            <th scope="col">Category</th>
                            <th scope="col">CategoryID</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                         {
                           patientUploads.map((upload) => {
                             return (
                                 <TableRow
                                   key={upload.id}
                                   SrNo={upload.id}
                                   PatientID={upload.patID}
                                   Category={upload.category}
                                   CategoryID={upload.categoryID}
                                 />
                             );
                           })
                         }
                        </tbody>
                      </table>
                    </div>
                  </div>
            </div>
            <div class ="col-12">
    <div class ="row-1">
        <div class="panel-heading"> BLOCKS</div>
           <div class ="panel panel-primary">
          <div class="panel-body">
           <div class="table-hover">
            <table class ="table" style={{fontSize:'15px'}}>
            <thead>
           <tr>
           <th scope="col">#</th>
           <th scope="col">Block Number</th>
           <th scope="col">Previous Hash</th>
           <th scope="col">Current Hash</th>
           </tr>
           </thead>
           <tbody style={{'wordBreak': 'break-all'}}>
            {
               blockdata.map((upload) => {
                 return (
                     <TableRow4
                       key={upload.srno}
                       SrNo={upload.srno}
                       blockNumber={upload.block.blockNumber}
                       prevHash={upload.block.prevHash}
                       currentHash={upload.block.dataHash}
                     />
                 );
               })
             }

           </tbody>
           </table>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
