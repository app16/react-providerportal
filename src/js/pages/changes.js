
          if(patreq.category=="Medication"){
            patreq.patdata.MedID='MED'+patreq.patdata.MedID;
          } else if(patreq.category=="Lifestyle"){
            patreq.patdata.LifeID='LIFE'+patreq.patdata.LifeID;
          } else if (patreq.category=="History"){
            patreq.patdata.HistID='HIST'+patreq.patdata.HistID;
          }



{
                    patientData.map((patdata)=>{
                      return <div>
                          <p>{patdata}</p>
                      </div>
                    })
                  }




    viewData(Req, PatientID, Category,CategoryID,e){
      var response = '' ;
      var reqparam='reqID='+Req;
      var patIDparam='patID='+PatientID;
      var catparam='category='+Category;
      var catIDparam='categoryID='+CategoryID;
      console.log('The ViewData button was clicked. ');
      console.log(this.ap);
       fetch('http://130.147.175.222:8099/proview?'+`${reqparam}`+'&'+`${param}`,{
         method: 'get',
         headers: {'Access-Control-Allow-Origin':'*'}
       }).then(res =>{if (res.status>=200 && res.status<300) {
         console.log("1"+this.ap);
        return res.json();
      }
     else {
       console.log('sometihng went wrong');
          }
        }).then(function (json){
          console.log("2"+this.ap);
          if(json.result =="true"){

            fetch('http://130.147.175.222:8099/queryproview?'+`${patIDparam}`+'&'+`${catparam}`+'&'+`${catIDparam}`,{
             method: 'get',
             headers: {'Access-Control-Allow-Origin':'*'}
           }).then(res =>{if (res.status>=200 && res.status<300) {
             console.log("3"+this.ap);
            return res.json();
          }
         else {
           console.log('sometihng went wrong');
              }
            }).then(function (json){
              console.log("4"+this.ap);
              var temp = JSON.stringify(json);
              console.log(temp);

            });
          }
          else {
              console.log("Couldn't Fetch Data");
          }
        });

  }

viewData(Req, PatientID, Category,CategoryID,e){
      var response = '' ;
      var reqparam='reqID='+Req;
      var patIDparam='patID='+PatientID;
      var catparam='category='+Category;
      var catIDparam='categoryID='+CategoryID;
      console.log('The ViewData button was clicked. ');
      console.log(this.ap);
       fetch('http://130.147.175.222:8099/proview?'+`${reqparam}`+'&'+`${param}`,{
         method: 'get',
         headers: {'Access-Control-Allow-Origin':'*'}
       }).then(res =>{
          if (res.status>=200 && res.status<300) {
                console.log("1"+this.ap);
                console.log("2"+this.ap);
                var json = res.json();
                    console.log("T/F: "+json);
                    if(json.result =="true"){
                        fetch('http://130.147.175.222:8099/queryproview?'+`${patIDparam}`+'&'+`${catparam}`+'&'+`${catIDparam}`,{
                            method: 'get',
                            headers: {'Access-Control-Allow-Origin':'*'}
                        }).then(res =>{
                              if (res.status>=200 && res.status<300) {
                                var json2=res.json();
                                console.log("patdata: "+json2);
                              }
                              else {
                                console.log('Data not found');
                              }
                            });
                    }
                    else{
                      console.log('Request is not accepted ');
                    }
          }
          else {
            console.log('something went wrong');
          }
        });

      }