# weather-kun

Weather Kun is a web application in its initial development stage. It aims to provide real-time weather information for any location using React, Node.js, and the OpenWeatherMap API.

<img src="./client/public/assets/weather-kun.png" />

## Features (Planned)

- Get real-time weather information based on IP geolocation
- Search functionality to find weather data for specific locations
- Display temperature, humidity, wind speed, and weather conditions

## Technologies Used

- React
- Node.js
- Express
- OpenWeatherMap API

## Installation

1. Fork the repository by clicking the "Fork" button on the GitHub repository page.

2. Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/YourUsername/weather-kun.git
   ```

3. Create a `.env` file in the `server` directory with the following content:

   ```env
   API_KEY=your_openweathermap_api_key
   UNITS=metric
   DEFAULT_CITY=your_default_city
   ```

   Replace `your_openweathermap_api_key` with your OpenWeatherMap API key, `metric` with your preferred unit of measurement (e.g., `standard`, `metric`, `imperial`), and `your_default_city` with the default city for weather information.

### Server

1. Navigate to the server directory:

   ```bash
   cd weather-kun/server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node index.js
   ```

   The server will start running on [http://localhost:4000](http://localhost:4000).

### Client

1. Navigate to the client directory:

   ```bash
   cd weather-kun/client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The client application will open in your preferred web browser at [http://localhost:3000](http://localhost:3000).

## Usage

- The application is currently in its early development stage, and key features are yet to be implemented. You can explore the code and contribute to its development.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository. If you would like to contribute code, you can fork the repository, make your changes, and submit a pull request.

## Roadmap

The following features and enhancements are planned for future development:

- Implement IP geolocation to fetch weather data based on user's location
- Enhance search functionality to allow users to manually enter a location
- Display detailed weather information including temperature, humidity, wind speed, and weather conditions
- Improve user interface and add CSS styling for an enhanced user experience

## Star the Repository

If you find this project interesting, please consider giving it a star. Your support is greatly appreciated and it helps boost my dopamine!

## License

This project is licensed under the [MIT License](LICENSE).
