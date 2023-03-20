import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>{{title}}</h2>'
})

export class StudentsComponent {
    // title = "My List of Students";
    currentDate: Date = new Date();


    // getTitle() {
    //     return this.title;
    // }
    getCurrentDate(): string {
        const currentDate = new Date();
        return currentDate.toLocaleDateString();
      }
    
      title = `My List of Students (${this.getCurrentDate()})`;


}