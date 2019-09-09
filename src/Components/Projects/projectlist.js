import countdown from '../../assets/images/project-images/countdown.png';
import weather from '../../assets/images/project-images/react-weather.png';
import todo from '../../assets/images/project-images/angular-todo.png';
import expressProfile from '../../assets/images/project-images/express-profile.png';
import responsive from '../../assets/images/project-images/responsive-example.png';
import lumdb from '../../assets/images/project-images/lumdb.png';

export const projects = [
    {
        "title": "React Countdown",
        "description": "React front end retrieves events from MongoDB using Express and displays the title and date as well as a countdown until that day. Can add new events.",
        "image": countdown,
        "link": "https://github.com/anfornee/countdown-react-express-mongodb-app",
        "id": 1
    },
    {
        "title": "React Weather",
        "description": "React front end using OpenWeatherMap and MapQuest APIs gets current weather for specified location",
        "image": weather,
        "link": "https://github.com/anfornee/react-weather-app",
        "id": 2
    },
    {
        "title": "Angular Todo",
        "description": "Add and view details of todo. Also be able to complete/remove todo from list.",
        "image": todo,
        "link": "https://github.com/anfornee/todo-list",
        "id": 3
    },
    {
        "title": "Express Profile",
        "description": "Create a profile and write/edit post using RESTful system.",
        "image": expressProfile,
        "link": "https://github.com/anfornee/express-profile-project",
        "id": 4
    },
    {
        "title": "Responsive Template",
        "description": "Template responsive website completely built with HTML/CSS and minimal JavaScript.",
        "image": responsive,
        "link": "https://github.com/anfornee/responisive-template",
        "id": 5
    },
    {
        "title": "React Movie Database",
        "description": "React app hitting a movie database API and displaying clickable images. Uses React Overdrive.",
        "image": lumdb,
        "link": "https://github.com/anfornee/simple-movie-db",
        "id": 6
    }
]