import countdown from '../../assets/images/project-images/countdown.png'
import countdownGif from '../../assets/images/project-images/countdownGif.gif'
import weather from '../../assets/images/project-images/react-weather.png'
import weatherGif from '../../assets/images/project-images/weatherGif.gif'
import todo from '../../assets/images/project-images/angular-todo.png'
import soundbridge from '../../assets/images/project-images/soundbridge.png'
import soundbridgeGif from '../../assets/images/project-images/soundbridgeDemo.gif'
import responsive from '../../assets/images/project-images/responsive-example.png'
import lumdb from '../../assets/images/project-images/lumdb.png'
import testGif from '../../assets/images/project-images/source.gif'

export const projects = [
  {
    title: 'React Countdown',
    description: 'React front end retrieves events from MongoDB using Express.',
    image: countdown,
    gif: countdownGif,
    link: 'https://github.com/anfornee/countdown-react-express-mongodb-app',
    id: 1
  },
  {
    title: 'React Weather',
    description: 'React front end using OpenWeatherMap and MapQuest APIs gets current weather for specified location',
    image: weather,
    gif: weatherGif,
    link: 'https://github.com/anfornee/react-weather-app',
    id: 2
  },
  {
    title: 'Angular Todo',
    description: 'Add and view details of todo. Also be able to complete/remove todo from list.',
    image: todo,
    gif: testGif,
    link: 'https://github.com/anfornee/angular-todo',
    id: 3
  },
  {
    title: 'Soundbridge',
    description: 'Full MERN stack web app hitting the Spotify API for user data.',
    image: soundbridge,
    gif: soundbridgeGif,
    link: 'https://github.com/bethel-school-of-technology/soundbridge-frontend',
    id: 4
  },
  {
    title: 'Responsive Template',
    description: 'Template responsive website completely built with HTML/CSS and minimal JavaScript.',
    image: responsive,
    gif: testGif,
    link: 'https://github.com/anfornee/responisive-template',
    id: 5
  },
  {
    title: 'React Movie Database',
    description: 'React app hitting a movie database API and displaying clickable images. Uses React Overdrive.',
    image: lumdb,
    gif: testGif,
    link: 'https://github.com/anfornee/simple-movie-db',
    id: 6
  }
]
