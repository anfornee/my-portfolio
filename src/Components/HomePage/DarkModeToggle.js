import React, { useState } from 'react'

const DarkModeToggle = props => {
  const [toggled, setToggled] = useState(false)
  const [atTop, setAtTop] = useState(true)

  const toggleSwitchStyle = {
    left: '0'
  }

  const toggleSwitchActive = {
    left: 'initial',
    right: '0'
  }

  const containerClassTop = 'toggle-container top'

  const containerClassNotTop = 'toggle-container not-top'

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= 1) {
      setAtTop(true)
    } else {
      setAtTop(false)
    }
  })

  const setDarkMode = () => {
    if (toggled) {
      props.setDarkMode(false)
    } else {
      props.setDarkMode(true)
    }
    setToggled(!toggled)
  }

  return (
    <div
      className={atTop ? containerClassTop : containerClassNotTop}
      style={{ display: 'flex', alignItems: 'center', margin: '0 0 3em 0' }}
    >
      <p className='dark-mode-toggle-title'>Dark Mode</p>
      <div className='dark-mode-toggle-container' onClick={setDarkMode}>
        <div
          className='dark-mode-toggle'
          style={toggled ? toggleSwitchActive : toggleSwitchStyle}
        />
      </div>
    </div>
  )
}

export default DarkModeToggle
