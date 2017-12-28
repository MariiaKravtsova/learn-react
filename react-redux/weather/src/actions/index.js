import { API_KEY } from '../../config'
import { FETCH_WEATHER } from './types'
import axios from 'axios'

export function fetchWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}