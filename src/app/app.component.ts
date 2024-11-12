import { Component, OnInit } from '@angular/core';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'intInputNew';
  
  ngOnInit(): void {
    const inputElement = document.querySelector('#phone');
    if (inputElement) {
      const telInputInstance = intlTelInput(inputElement as HTMLInputElement, {
        initialCountry: 'us',
        separateDialCode: true,
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
      });

      // Log the instance for debugging
      console.log('IntlTelInput Instance:', telInputInstance);

      // Example of attaching a country change event listener
      inputElement.addEventListener('countrychange', () => {
        const fullNumber = telInputInstance.getNumber();
        console.log('Updated Full Phone Number:', fullNumber);
      });
    } else {
      console.error('Phone input field not found!');
    }
  }
}
