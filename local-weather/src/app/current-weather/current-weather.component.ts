import { Component } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';
/*import { CommonModule } from '@angular/common'; */

@Component({
  selector: 'app-current-weather',
 /* standalone: true,
  imports: [CommonModule],*/
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  current: ICurrentWeather = {
    city: 'Redmond',
    country: 'US',
    date: new Date(),
    image: '',
    temperature: 50,
    description: 'Windy'
  }
}
