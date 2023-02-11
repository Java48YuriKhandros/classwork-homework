import React from 'react'
import { api_key, base_url } from '../utils/constants'
import Form from './Form'
import Weather from './Weather'

class Data extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            weatherInfo: {},
            message: 'Enter city name'
        }
    }

    getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    },
                    message: ''
                })
            })
            .catch(e => {
                this.setState({
                    message: 'Enter correct city name'
                })
            })
    }

    render() {
        return (
            <div>
                <Form getWeather={this.getWeather} />
                <Weather info={this.state.weatherInfo} message={this.state.message} />
            </div>
        )
    }

}

export default Data