import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
<<<<<<< HEAD
  
=======
>>>>>>> c1debfa7ff77dd83e9c5a69b64b7985715ebc150

params:any;
  //response: any;
  SQL_QUERY:any;
  API_KEY = "48a7d6de5276f50b8e4e4e709c7d9cb2d208e6ab75fbbbb3cecc57297ffb6357"

  PDL_URL = "https://api.peopledatalabs.com/v5/person/search"

  H = {
    'Content-Type': "application/json",
    'X-api-key': this.API_KEY
  }
  resArrayProfile=[];
  currentItem: any;
  interval: any;
  pointer=0;
  responseProfile: any;
  resArrayTitle=[];
  responseTitle: any;
  responseCompany: any;
  resArrayCompany=[];

  

  /* P = {
    'sql': this.SQL_QUERY,
    'size': 10,
    'pretty': true
  } */
  constructor(public http: HttpClient) {

  }
<<<<<<< HEAD
  getPeopleDataLabsProfile(profileData){
    console.log("profile data",profileData);
    this.interval = setInterval(() => {
      this.currentItem = profileData[this.pointer];
      this.pointer++;
      if (this.pointer < profileData.length) {
        if(profileData?.FirstName !== ''&& profileData?.LastName==''&& profileData?.City==''){
          this.SQL_QUERY = `SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.FirstName !== ''&& profileData?.LastName==''){
           this.SQL_QUERY = `SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_locality='${profileData[this.pointer]?.City}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.LastName==''&& profileData?.City==''){
        this.SQL_QUERY=`SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND first_name='${profileData[this.pointer]?.FirstName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
        console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.FirstName !== '' && profileData?.City==''){
         this.SQL_QUERY=`SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND last_name='${profileData[this.pointer]?.LastName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
         console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.FirstName==''){
          this.SQL_QUERY = `SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND last_name='${profileData[this.pointer]?.LastName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_locality='${profileData[this.pointer]?.City}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.LastName==''){
          this.SQL_QUERY=`SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND first_name='${profileData[this.pointer]?.FirstName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_locality='${profileData[this.pointer]?.City}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
        else if(profileData?.City==''){
          this.SQL_QUERY=`SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND first_name='${profileData[this.pointer]?.FirstName}' AND last_name='${profileData[this.pointer]?.LastName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
        else{
          this.SQL_QUERY=`SELECT * FROM person WHERE full_name='${profileData[this.pointer]?.FullName}' AND first_name='${profileData[this.pointer]?.FirstName}' AND last_name='${profileData[this.pointer]?.LastName}' AND job_company_name='${profileData[this.pointer]?.Company}' AND job_title_role='${profileData[this.pointer]?.TitleRole}' AND job_title_levels='${profileData[this.pointer]?.TitleLevel}' AND location_locality='${profileData[this.pointer]?.City}' AND location_region='${profileData[this.pointer]?.State}' AND location_country='${profileData[this.pointer]?.Country}';`
          console.log("sql",this.SQL_QUERY);
        }
      
    
    this.params = new HttpParams()
    .set('sql', this.SQL_QUERY)
    .set('size', '10')
    .set('pretty', 'true');
     this.http.get("https://api.peopledatalabs.com/v5/person/search", { headers: this.H, params: this.params }).subscribe(res=>{
      this.responseProfile = JSON.parse(res['_body']);
      console.log("resp profile",res);
      this.resArrayProfile.push(this.responseProfile);
    }) 
  }
    }, 300);
    this.pointer=0;
    return this.resArrayProfile;
  }
}
 /* getPeopleDataLabsProfile(profileData) {
=======
  

  getPeopleDataLabsProfile(profileData) {
>>>>>>> c1debfa7ff77dd83e9c5a69b64b7985715ebc150
    console.log("profile data",profileData);
    this.interval = setInterval(() => {
      this.currentItem = profileData[this.pointer];
      this.pointer++;
      if (this.pointer < profileData.length) { 
       // this.pointer = 0 
       this.SQL_QUERY = `SELECT * FROM person WHERE first_name='${profileData[this.pointer]?.FirstName}' OR last_name='${profileData[this.pointer]?.LastName}' OR full_name='${profileData[this.pointer]?.FullName}' OR job_company_name='${profileData[this.pointer]?.Company}';`
   console.log("sql",this.SQL_QUERY);
    this.params = new HttpParams()
    .set('sql', this.SQL_QUERY)
    .set('size', '10')
    .set('pretty', 'true');
    this.http.get("https://api.peopledatalabs.com/v5/person/search", { headers: this.H, params: this.params }).subscribe(res=>{
      this.responseProfile = JSON.parse(res['_body']);
      console.log("resp profile",res);
      this.resArrayProfile.push(this.responseProfile);
    })
      };
    }, 300);
    this.pointer=0;
    return this.resArrayProfile;
  }
<<<<<<< HEAD

=======
>>>>>>> c1debfa7ff77dd83e9c5a69b64b7985715ebc150
  getPeopleDataLabsCompany(companyData) {
    console.log("company data",companyData);
    this.interval = setInterval(() => {
      this.currentItem = companyData[this.pointer];
      this.pointer++;
      if (this.pointer < companyData.length) { 
       // this.pointer = 0 
       this.SQL_QUERY = `SELECT * FROM person WHERE job_company_name='${companyData[this.pointer]?.CompanyName}' OR job_title_role='${companyData[this.pointer]?.TitleRole}' OR job_title_levels='${companyData[this.pointer]?.TitleLevel}';`
   console.log("sql",this.SQL_QUERY);
    this.params = new HttpParams()
    .set('sql', this.SQL_QUERY)
    .set('size', '10')
    .set('pretty', 'true');
    this.http.get("https://api.peopledatalabs.com/v5/person/search", { headers: this.H, params: this.params }).subscribe(res=>{
      this.responseCompany = JSON.parse(res['_body']);
      console.log("resp",res);
      this.resArrayCompany.push(this.responseCompany);
    })
      };
    }, 300);
    this.pointer=0;
    return this.resArrayCompany;
  }
  getPeopleDataLabsTitle(titleData) {
    console.log("title data",titleData);
    this.interval = setInterval(() => {
      this.currentItem = titleData[this.pointer];
      this.pointer++;
      if (this.pointer < titleData.length) { 
       // this.pointer = 0 
       this.SQL_QUERY = `SELECT * FROM person WHERE job_title_role='${titleData[this.pointer]?.TitleRole}' OR job_title_levels='${titleData[this.pointer]?.TitleLevel}' OR location_locality='${titleData[this.pointer]?.City}' OR location_region='${titleData[this.pointer]?.State} OR location_country='${titleData[this.pointer]?.Country}';`
   console.log("sql",this.SQL_QUERY);
    this.params = new HttpParams()
    .set('sql', this.SQL_QUERY)
    .set('size', '10')
    .set('pretty', 'true');
    this.http.get("https://api.peopledatalabs.com/v5/person/search", { headers: this.H, params: this.params }).subscribe(res=>{
      this.responseTitle = JSON.parse(res['_body']);
      console.log("resp title",res);
      this.resArrayTitle.push(this.responseTitle);
    })
      };
    }, 300);
    this.pointer=0;
    return this.resArrayTitle;
  }
}
<<<<<<< HEAD
   for(var i=0;i<profileData.length;i++){
=======
  /*   for(var i=0;i<profileData.length;i++){
>>>>>>> c1debfa7ff77dd83e9c5a69b64b7985715ebc150
    this.SQL_QUERY = `SELECT * FROM person WHERE first_name='${profileData[i]?.FirstName}' AND last_name='${profileData[i]?.LastName}'AND full_name='${profileData[i]?.FullName}' AND job_company_name='${profileData[i]?.Company}';`
   console.log("sql",this.SQL_QUERY);
    this.params = new HttpParams()
    .set('sql', this.SQL_QUERY)
    .set('size', '10')
    .set('pretty', 'true');
    this.interval = setInterval(() => {
      this.currentItem = profileData[i];
    }, 3000);
    this.http.get("https://api.peopledatalabs.com/v5/person/search", { headers: this.H, params: this.params }).subscribe(res=>{
      //this.response = res
      console.log("resp",res);
    })
    //delay(randomInteger(500, 1500)
    
   // this.resArray.push(this.response);
    }
   */  
   

