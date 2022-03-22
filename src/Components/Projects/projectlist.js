import apMusic from '../../assets/images/project-images/music-site.png'
import apMusicDemo from '../../assets/images/project-demos/music-site-demo.mp4'
import check2check from '../../assets/images/project-images/c2c.png'
import check2checkDemo from '../../assets/images/project-demos/check2check-demo.mp4'
import sozoPro from '../../assets/images/project-images/sōzōpro.png'
import sozoProDemo from '../../assets/images/project-demos/sozopro-demo.mp4'
import soundbridge from '../../assets/images/project-images/soundbridge.png'
import soundbridgeDemo from '../../assets/images/project-demos/soundbridge-demo.mp4'
import responsive from '../../assets/images/project-images/responsive-example.png'
import responsiveDemo from '../../assets/images/project-demos/template-demo.mp4'
import lumdb from '../../assets/images/project-images/lumdb.png'
import lumdbDemo from '../../assets/images/project-demos/moviedb-demo.mp4'

export const projects = [
  {
    title: 'Music Portfolio',
    description: 'For my music stuff. Built on React using HTML canvas for some cool star stuff!',
    image: apMusic,
    demo: apMusicDemo,
    link: 'https://github.com/anfornee/anthony-pereira-muisic-V2',
    url: 'https://anthonypereiramusic.com/',
    id: 1
  },
  {
    title: 'Check2Check',
    description: 'Create a profile and track your finances with this web app built with React, Express and using MongoDB.',
    image: check2check,
    demo: check2checkDemo,
    link: 'https://github.com/anfornee/check2check-frontend',
    url: 'https://check2check.netlify.app/',
    id: 2
  },
  {
    title: 'SōzōPro Twitter App',
    description: 'Tweet your creative process without distraction, talking things out and sharing solutions. ReactJS, ExpressJS, Twitter API',
    image: sozoPro,
    demo: sozoProDemo,
    link: 'https://github.com/anfornee/sozopro-frontend',
    id: 3
  },
  {
    title: 'Soundbridge',
    description: 'Full MERN stack web app using the Spotify API allowing users to share what they\'re listening to and interact with other users.',
    image: soundbridge,
    demo: soundbridgeDemo,
    link: 'https://github.com/bethel-school-of-technology/soundbridge-frontend',
    id: 4
  },
  {
    title: 'Responsive Template',
    description: 'Template responsive website completely built with HTML/CSS and minimal JavaScript.',
    image: responsive,
    demo: responsiveDemo,
    link: 'https://github.com/anfornee/responisive-template',
    id: 5
  },
  {
    title: 'React Movie Database',
    description: 'React app using TMDB API and displaying clickable images. Uses React Overdrive.',
    image: lumdb,
    demo: lumdbDemo,
    link: 'https://github.com/anfornee/simple-movie-db',
    id: 6
  }
]
