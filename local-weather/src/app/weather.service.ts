import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ICurrentWeatherData } from './icurrent-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string){
    this.httpClient.get<ICurrentWeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${environment.API_KEY}`)
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather{
    
  }
}
