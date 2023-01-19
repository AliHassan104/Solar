import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solar-ui';
  flag = false
  page = 1;
  lat = 0
  lng = 0

  // pageSize = 25;
  // api_key = 'YOUR API KEY';
  // url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;
  // ipAddress = '';
  // city = '';
  // region = '';
  // country = '';

  // constructor(private http:HttpClient) { }

  // ngOnInit() {
  //   this.getGeolocationData();
  // }

  // getGeolocationData(){
  //   this.http.get(this.url).subscribe((res:any)=>{
  //     console.log(res.data)
  //   });

  //   this.http.get(this.url).subscribe((res:any)=>{
  //     this.ipAddress = res.data.ip_address;
  //     this.city = res.data.city;
  //     this.region = res.data.region;
  //     this.country = res.data.country;
  //   });
  // }

  ngOnInit() {
    // this.getUserLocation();
 }


 userAddress: string = ''
  userLatitude: string = ''
  userLongitude: string = ''

  nextPage(){
    this.page++
  }

  @ViewChild("placesRef") placesRef : GooglePlaceDirective | undefined;




  handleAddressChange(address: any) {
    this.userAddress = address.formatted_address
    this.userLatitude = address.geometry.location.lat()
    this.userLongitude = address.geometry.location.lng()
  }

 getUserLocation() {
  console.log(navigator.geolocation.watchPosition(p=>{console.log(p);}));
  this.flag = true
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        console.log(position);


         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

         console.log(this.lat +" "+ this.lng);

       });
 }else {
    console.log("User not allow")
 }
}


userForm = new FormGroup({
  firstname : new FormControl(),
  lastname : new FormControl(),
  company : new FormControl(),
  address : new FormControl(),
  country : new FormControl(),
  email : new FormControl(),
  phonenumber : new FormControl(),
  consumption : new FormControl(),
  notes : new FormControl(),

  // address : new FormGroup({
  //   street : new FormControl(),
  //   postalcode : new FormControl(),
  //   city : new FormControl()
  // })
})

onSubmit(){
  console.log(this.userForm.value);
}



}

