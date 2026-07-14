import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public isSubmitting = false;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) {}

  public onSubmit(contactForm: NgForm): void {
    // If the form is valid, submit message to Formspree API
    if (contactForm.valid) {
      this.isSubmitting = true;
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mbjekwey',
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers})
        .pipe(finalize(() => this.isSubmitting = false))
        .subscribe({
          next: () => this.afterEmailSent(contactForm),
          error: () => this.snackBar.open(
            'Your message could not be sent. Please try again or email me directly.',
            'Dismiss',
            { duration: 7000, horizontalPosition: 'end' }
          )
        });
    }
  }

  private afterEmailSent(contactForm: NgForm): void {
    // Open snackbar to alert the user
    this.snackBar.open('Your email was sent!', 'Dismiss', {
      duration: 5000,
      horizontalPosition: 'end',
      panelClass: ['email-sent-snackbar']
    });

    contactForm.resetForm();
  }
}
