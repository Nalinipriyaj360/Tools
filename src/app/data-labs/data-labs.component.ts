import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
//import { jsonexport } from 'jsonexport';
import * as jsonexport from "jsonexport/dist"
import { saveAs } from 'file-saver';
//import { fs } from 'fs';
@Component({
  selector: 'app-data-labs',
  templateUrl: './data-labs.component.html',
  styleUrls: ['./data-labs.component.css']
})
export class DataLabsComponent implements OnInit {
  user: any;
  profileFile: any;
  profile: any;
  company: any;
  title: any;
  clicked = false;
  clicked1 = false;
  clicked2 = false;
  public profileData: Profile[] = [];
  companyFile: any;
  //public companyData: Company[] = [];
  titleFile: any;
  //response: any[];
 // public titleData: Title[] = [];
  responseProfile: any;
  responseCompany: any;
  responseTitle: any;
  workemails: any;
  emails: any;
  mobileno: any;
  phoneno: any;
  date: any;
  emailOne: any;
  emailSix: any;
  emailFive: any;
  emailFour: any;
  emailThree: any;
  emailTwo: any;
  phoneno1: any;
  phoneno3: any;
  phoneno2: any;
  objArray = [];
  constructor(public service: DataServiceService, public datepipe: DatePipe) { }
  public ngForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    profileFile: new FormControl('')
  })
  public ngForm1 = new FormGroup({
    file: new FormControl('', [Validators.required]),
    companyFile: new FormControl('')
  })
  public ngForm2 = new FormGroup({
    file: new FormControl('', [Validators.required]),
    titleFile: new FormControl('')
  })
  ngOnInit(): void {

    this.date = this.datepipe.transform(new Date(), 'MMMM dd,yyyy');
    console.log("user", this.user, this.date);
  }
  onChangeProfile(files: FileList) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      this.profileFile = file;
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.profile = reader.result as string;
        let csvToRowArray = this.profile.split("\n");
        console.log(csvToRowArray);
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          //  console.log("row",row);
          this.profileData.push(new Profile(row[0], row[1], row[2], row[3],row[4],row[6],row[7],row[8],row[9]));
        }
        console.log(this.profileData);
      }
    }
    console.log("file profile", this.profileFile);
    this.ngForm.value.profileFile = this.profileFile.name;
  }
  profileSubmit() {
    //alert("profile")
    console.log("profile file", this.profileFile.name);
    this.responseProfile = this.service.getPeopleDataLabsProfile(this.profileData);
    /*  
    this.responseProfile.forEach(profileRes => {
      this.workemails = profileRes?.work_email;
      //this.emails=profileRes?.emails;
      this.mobileno = profileRes?.mobile_phone;
      //this.phoneno=profileRes?.phone_numbers;

      this.emailOne = profileRes?.emails[0];
      this.emailTwo = profileRes?.emails[1];
      this.emailThree = profileRes?.emails[2];
      this.emailFour = profileRes?.emails[3];
      this.emailFive = profileRes?.emails[4];
      this.emailSix = profileRes?.emails[5];

      this.phoneno1 = profileRes?.phone_numbers[0];
      this.phoneno2 = profileRes?.phone_numbers[1];
      this.phoneno3 = profileRes?.phone_numbers[2];
 */
     /* var obj = {
        FirstName: profileRes?.first_name,
        LastName: profileRes?.last_name,
        FullName: profileRes?.full_name,
        CurrentCompany: profileRes?.job_company_name,
        CurrentCompanyPosition: profileRes?.job_title_role,
        CurrentLocation: profileRes?.location_name,
        LastUpdates: profileRes?.job_last_updated,
        WorkEmails: this.workemails,
        Emails1: this.emailOne,
        Emails2: this.emailTwo,
        Emails3: this.emailThree,
        Emails4: this.emailFour,
        Emails5: this.emailFive,
        Emails6: this.emailSix,
        MobileNumber: this.mobileno,
        PhoneNumbers1: this.phoneno1,
        PhoneNumbers2: this.phoneno2,
        PhoneNumbers3: this.phoneno3,
        LinkedInURL: profileRes?.linkedin_url,
        LinkedInID: profileRes?.linkedin_id,
        Facebook_URL: profileRes?.facebook_url,
        Date: this.date,
        User: this.user
      }*/
     var obj = {
        FirstName: 'John',
        LastName: 'Smith',
        FullName:'John Smith',
        CurrentCompany: 'IBM',
        CurrentCompanyPosition: 'Technical implementation support',
        CurrentLocation: 'Los Angles,California,US',
        LastUpdates: '2020-09-08',
        WorkEmails: 'johnsmith@ibm.com',
        Emails1: 'john819@gmail.com',
        Emails2: '',
        Emails3: '',
        Emails4: 'johnsmith@gmail.com',
        Emails5: this.emailFive,
        Emails6: this.emailSix,
        MobileNumber: '9080706645',
        PhoneNumbers1: '8907652341',
        PhoneNumbers2: '9908763452',
        PhoneNumbers3: this.phoneno3,
        LinkedInURL: null,
        LinkedInID: null,
        Facebook_URL: "facebook.com/johnsmith",
        Date: this.date,
        User: this.user
      }
      this.objArray.push(obj);
  //  })
    
      const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(this.objArray[0]);
    let csv = this.objArray.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "PeopleDataLabs.csv");
    //});
  }
 
}
 /* onChangeProfile(files: FileList) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      this.profileFile = file;
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.profile = reader.result as string;
        let csvToRowArray = this.profile.split("\n");
        console.log(csvToRowArray);
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          //  console.log("row",row);
          this.profileData.push(new Profile(row[0], row[1], row[2], row[3]));
        }
        console.log(this.profileData);
      }
    }
    console.log("file profile", this.profileFile);
    this.ngForm.value.profileFile = this.profileFile.name;
  }
  onChangeCompany(files: FileList) {
    //this.company = event.target.files[0]
    if (files && files.length > 0) {
      let file: File = files.item(0);
      this.companyFile = file;
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.company = reader.result as string;
        let csvToRowArray = this.company.split("\n");
        console.log(csvToRowArray);
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          //  console.log("row",row);
          this.companyData.push(new Company(row[0], row[1], row[2]));
        }
        console.log(this.companyData);
      }
    }
    console.log("file company", this.companyFile.name);
    this.ngForm1.value.companyFile = this.companyFile.name;
  }
  onChangeTitle(files: FileList) {
    //this.title = event.target.files[0]
    if (files && files.length > 0) {
      let file: File = files.item(0);
      this.titleFile = file;
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.title = reader.result as string;
        let csvToRowArray = this.title.split("\n");
        console.log(csvToRowArray);
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(",");
          //  console.log("row",row);
          this.titleData.push(new Title(row[0], row[1], row[5], row[6], row[7]));
        }
        console.log(this.titleData);
      }
    }
    console.log("file title", this.titleFile.name);
    this.ngForm2.value.titleFile = this.titleFile.name;
  }
  profileSubmit() {
    //alert("profile")
   // console.log("profile file", this.profileFile.name);
  /*   this.responseProfile = this.service.getPeopleDataLabsProfile(this.profileData);
    this.responseProfile.forEach(profileRes => {
      this.workemails = profileRes?.work_email;
      //this.emails=profileRes?.emails;
      this.mobileno = profileRes?.mobile_phone;
      //this.phoneno=profileRes?.phone_numbers;

      this.emailOne = profileRes?.emails[0];
      this.emailTwo = profileRes?.emails[1];
      this.emailThree = profileRes?.emails[2];
      this.emailFour = profileRes?.emails[3];
      this.emailFive = profileRes?.emails[4];
      this.emailSix = profileRes?.emails[5];

      this.phoneno1 = profileRes?.phone_numbers[0];
      this.phoneno2 = profileRes?.phone_numbers[1];
      this.phoneno3 = profileRes?.phone_numbers[2];
 */
     /* var obj = {
        FirstName: profileRes?.first_name,
        LastName: profileRes?.last_name,
        FullName: profileRes?.full_name,
        CurrentCompany: profileRes?.job_company_name,
        CurrentCompanyPosition: profileRes?.job_title_role,
        CurrentLocation: profileRes?.location_name,
        LastUpdates: profileRes?.job_last_updated,
        WorkEmails: this.workemails,
        Emails1: this.emailOne,
        Emails2: this.emailTwo,
        Emails3: this.emailThree,
        Emails4: this.emailFour,
        Emails5: this.emailFive,
        Emails6: this.emailSix,
        MobileNumber: this.mobileno,
        PhoneNumbers1: this.phoneno1,
        PhoneNumbers2: this.phoneno2,
        PhoneNumbers3: this.phoneno3,
        LinkedInURL: profileRes?.linkedin_url,
        LinkedInID: profileRes?.linkedin_id,
        Facebook_URL: profileRes?.facebook_url,
        Date: this.date,
        User: this.user
      }*/
   /*   var obj = {
        FirstName: 'John',
        LastName: 'Smith',
        FullName:'John Smith',
        CurrentCompany: 'IBM',
        CurrentCompanyPosition: 'Technical implementation support',
        CurrentLocation: 'Los Angles,California,US',
        LastUpdates: '2020-09-08',
        WorkEmails: 'johnsmith@ibm.com',
        Emails1: 'john819@gmail.com',
        Emails2: '',
        Emails3: '',
        Emails4: 'johnsmith@gmail.com',
        Emails5: this.emailFive,
        Emails6: this.emailSix,
        MobileNumber: '9080706645',
        PhoneNumbers1: '8907652341',
        PhoneNumbers2: '9908763452',
        PhoneNumbers3: this.phoneno3,
        LinkedInURL: null,
        LinkedInID: null,
        Facebook_URL: "facebook.com/johnsmith",
        Date: this.date,
        User: this.user
      }
      this.objArray.push(obj);
  //  })
    
      const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(this.objArray[0]);
    let csv = this.objArray.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "PeopleDataLabs.csv");
    //});
  }
  companySubmit() {
    console.log("company file", this.companyFile.name);
   // this.responseCompany = this.service.getPeopleDataLabsCompany(this.companyData);
   var obj = {
    FirstName: 'John',
    LastName: 'Smith',
    FullName:'John Smith',
    CurrentCompany: 'IBM',
    CurrentCompanyPosition: 'Technical implementation support',
    CurrentLocation: 'Los Angles,California,US',
    LastUpdates: '2020-09-08',
    WorkEmails: 'johnsmith@ibm.com',
    Emails1: 'john819@gmail.com',
    Emails2: '',
    Emails3: '',
    Emails4: 'johnsmith@gmail.com',
    Emails5: this.emailFive,
    Emails6: this.emailSix,
    MobileNumber: '9080706645',
    PhoneNumbers1: '8907652341',
    PhoneNumbers2: '9908763452',
    PhoneNumbers3: this.phoneno3,
    LinkedInURL: null,
    LinkedInID: null,
    Facebook_URL: "facebook.com/johnsmith",
    Date: this.date,
    User: this.user
  }
  this.objArray.push(obj);
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(this.objArray[0]);
    let csv = this.objArray.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "PeopleDataLabs.csv");
  }
  titleSubmit() {
    console.log("title file", this.titleFile.name);
   // this.responseTitle = this.service.getPeopleDataLabsCompany(this.titleData);
   var obj = {
    FirstName: 'John',
    LastName: 'Smith',
    FullName:'John Smith',
    CurrentCompany: 'IBM',
    CurrentCompanyPosition: 'Technical implementation support',
    CurrentLocation: 'Los Angles,California,US',
    LastUpdates: '2020-09-08',
    WorkEmails: 'johnsmith@ibm.com',
    Emails1: 'john819@gmail.com',
    Emails2: '',
    Emails3: '',
    Emails4: 'johnsmith@gmail.com',
    Emails5: this.emailFive,
    Emails6: this.emailSix,
    MobileNumber: '9080706645',
    PhoneNumbers1: '8907652341',
    PhoneNumbers2: '9908763452',
    PhoneNumbers3: this.phoneno3,
    LinkedInURL: null,
    LinkedInID: null,
    Facebook_URL: "facebook.com/johnsmith",
    Date: this.date,
    User: this.user
  }
  this.objArray.push(obj);
  
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(this.objArray[0]);
    let csv = this.objArray.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
      let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "PeopleDataLabs.csv");
  }*/

export class Profile {
  FirstName: String;
  LastName: String;
  FullName: String;
  Company: String;
  TitleRole:String;
  TitleLevel:String;
  City:String;
  State:String;
  Country:String;
  constructor(FullName: String,FirstName: String, LastName: String,TitleRole:String,TitleLevel:String,Company: String,Country:String,City:String,State:String) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.FullName = FullName;
    this.Company = Company;
    this.TitleRole = TitleRole;
    this.TitleLevel= TitleLevel;
    this.City = City;
    this.State = State;
    this.Country = Country;
  }

}
/* export class Profile {
  FirstName: String;
  LastName: String;
  FullName: String;
  Company: String;
  constructor(FirstName: String, LastName: String, FullName: String, Company: String) {
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.FullName = FullName;
    this.Company = Company;
  }
}
export class Company {
  CompanyName: String;
  TitleRole: String;
  TitleLevel: String;
  constructor(CompanyName: String, TitleRole: String, TitleLevel: String) {
    this.CompanyName = CompanyName;
    this.TitleRole = TitleRole;
    this.TitleLevel = TitleLevel;
  }
}
export class Title {
  TitleRole: String;
  TitleLevel: String;
  City: String;
  State: String;
  Country: String;
  constructor(TitleRole: String, TitleLevel: String, City: String, State: String, Country: String) {
    this.TitleRole = TitleRole;
    this.TitleLevel = TitleLevel;
    this.City = City;
    this.State = State;
    this.Country = Country;
  }
} */