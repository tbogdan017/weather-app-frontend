export default class State {
    constructor() {
    }
    city: string = '';
    currentCity: string = '';
    temperature: number = 0;
    description: string = '';
    humidity: number = 0;
    feelsLike: number = 0;
    wind: number = 0;
    pressure: number = 0;
    uvIndex: number = 0;
    sunrise: string = '';
    sunset: string = '';
    maxTemp: number = 0;
    minTemp: number = 0;
    date: string = ''; 
    date1: string = ''; 
    date2: string = ''; 
    maxTemp1: number = 0;
    minTemp1: number = 0;
    maxTemp2: number = 0;
    minTemp2: number = 0;
    description1: string = '';
    description2: string = '';
    isDay: number = 0;
    isLoading: boolean = false;
    isError: boolean = false;

    async getData() {
        const url = `http://localhost:5000/city/:${this.city}`;
        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            const data = await res.json();
            this.city = data.location.name;
            this.temperature = data.current.temp_c;
            this.description = data.current.condition.text;
            this.humidity = data.current.humidity;
            this.feelsLike = data.current.feelslike_c;
            this.wind = data.current.wind_kph;
            this.pressure = data.current.pressure_mb;
            this.uvIndex = data.current.uv;
            this.sunrise = data.forecast.forecastday[0].astro.sunrise;
            this.sunset = data.forecast.forecastday[0].astro.sunset;
            this.maxTemp = data.forecast.forecastday[0].day.maxtemp_c;
            this.minTemp = data.forecast.forecastday[0].day.mintemp_c;
            this.date = data.forecast.forecastday[0].date;
            this.date1 = data.forecast.forecastday[1].date;
            this.date2 = data.forecast.forecastday[2].date;
            this.maxTemp1 = data.forecast.forecastday[1].day.maxtemp_c;
            this.minTemp1 = data.forecast.forecastday[1].day.mintemp_c;
            this.maxTemp2 = data.forecast.forecastday[2].day.maxtemp_c;
            this.minTemp2 = data.forecast.forecastday[2].day.mintemp_c;
            this.description1 = data.forecast.forecastday[1].day.condition.text;
            this.description2 = data.forecast.forecastday[2].day.condition.text;
            this.isDay = data.current.is_day;
            this.currentCity = this.city;
            this.isLoading = true;
        } catch (error) {
            if (error) {
                this.isLoading = false;
                this.isError = true;
                console.error(error);
            }
        }
    }
}