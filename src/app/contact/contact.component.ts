import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) {}

  public onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mbjekwey',
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers}).subscribe(response => {
            if (response) {
              this.snackBar.open('Your email was sent!', 'Dismiss', {
                duration: 5000,
                horizontalPosition: 'end',
                panelClass: ['email-sent-snackbar']
              })
            }
          }
        );
    }
  }
}
