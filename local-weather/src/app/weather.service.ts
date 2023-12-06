import { Injectable } from '@angular/core'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { environment } from '../environments/environment'
import { ICurrentWeatherData } from './icurrent-weather-data'
import { map } from 'rxjs/operators'
import { ICurrentWeather } from './icurrent-weather'

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(search: string | number, country?: string) {
    let uriParams = ''
    if (typeof search == 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if (country) {
      uriParams = `${uriParams},${country}`
    }
    this.httpClient
      .get<ICurrentWeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${uriParams}&appid=${environment.appID}`
      )
      .pipe(map((data) => this.transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: new Date(data.dt * 1000),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: (data.main.temp * 9) / 5 - 459.67,
      description: data.weather[0].description,
    }
  }
}

// /*
// current weather (model)
//   city: string
//   country: string
//   date: Date
//   image: string
//   temperature: number
//   description: string     #weather is array [ ].description

//   current weather data (api)
//     weather:[{
//     description: string;
//     icon: string}],         #image in list[ ]
//   main: {
//     temp: number   #convert form Klevin
//   },
//   dt: number,    #listed as number in seconds, need to eventually convert to data
//   sys: {
//     country:string
//   },
//   name: string
// }
//   */
