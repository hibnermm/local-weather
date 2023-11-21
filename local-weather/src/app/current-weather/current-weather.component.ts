import { Component } from '@angular/core'
import { ICurrentWeather } from '../icurrent-weather'
import { WeatherService } from '../weather.service'
/*import { CommonModule } from '@angular/common'; */

@Component({
  selector: 'app-current-weather',
  /* standalone: true,
  imports: [CommonModule],*/
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css',
})
export class CurrentWeatherComponent {
  current: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: '',
  }
  constructor(private WeatherService: WeatherService) {
    this.WeatherService.getCurrentWeather(${city}, ${country}).subscribe(data => this.current = data)     /*guessing ${city}, example used "cityName"
  }
}
