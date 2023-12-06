import { Component, Input } from '@angular/core'
import { ICurrentWeather } from '../icurrent-weather'
// import { WeatherService } from '../weather.service'
// /*import { CommonModule } from '@angular/common'; */

@Component({
  selector: 'app-current-weather',
  // /* standalone: true,
  // imports: [CommonModule],*/
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css',
})
export class CurrentWeatherComponent {
  @Input() current: ICurrentWeather = {
    //receives data from parent component
    city: '',
    country: '',
    date: new Date(),
    image: '',
    temperature: 0,
    description: '',
  }
}
// also need a COPY of this data "current: ICurrentWeather " in Parent, will rename

//   Move this to Parent Component
// constructor(private WeatherService: WeatherService) {
//     this.WeatherService.getCurrentWeather(userinput, userinput).subscribe(data => this.current = data)
//     /*guessing ${city}, example used "cityName" */
//   }
// }
