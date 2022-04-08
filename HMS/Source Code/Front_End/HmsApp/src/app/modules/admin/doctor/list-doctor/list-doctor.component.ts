import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {
  appointmentColumns: string[] = ['name', 'designation', 'mobileno', 'gender', 'email'];
  isDataLoading = false; // flag to hide/show loader
  dataSource: any = []; 
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * Method to navigate to edit appointment page
   * @param event 
   */
   editAppointment(event: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        appointmentData: JSON.stringify(event)
      }
    };
    this.router.navigate(['admin/dashboard/editAppointment'], navigationExtras);
  }

  /**
   * Method to delete existing appointment
   * @param event 
   */
  deleteAppointment(event: any) {
    //this.showDeleteAppointmentDialog(event);
  }

  navigateToAppointment() {
    this.router.navigate(["admin/dashboard/addDoctor"]);
  }


}