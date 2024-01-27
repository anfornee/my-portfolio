import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.scss'

const App = () => {
  // const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  // if (darkMode) document.body.classList.add('dark')
  // else document.body.classList.remove('dark')

  return (
    <div className='App'>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <p>hello there...</p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <p>General Kenobi!</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
