import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  Genders: string[] = [
    'Male',
    'Female'
  ]
  fgAddDoctor!: FormGroup;
  isDataLoading = false;
  constructor(private router: Router,private formBuilder: FormBuilder,) {
    this.createFormGroup();
    
   }

  ngOnInit(): void {
  }
  createFormGroup() {
    this.fgAddDoctor = this.formBuilder.group({
      firstname: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required],
      phoneno: ['', Validators.required],
      designation: [''],
      gender: ['', Validators.required],
    });
  }
  createAppointment(){

  }
  navigateToListAppointmentScreen() {
    this.router.navigate(['admin/dashboard/listDoctor']);
  }
}