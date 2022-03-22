import React, { useState } from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const [atTop, setAtTop] = useState(true)

  const toggleSwitchInactive = {
    left: '0'
  }
  const toggleSwitchActive = {
    left: 'initial',
    right: '0'
  }
  const containerClassTop = 'toggle-container top'
  const containerClassNotTop = 'toggle-container not-top'

  window.addEventListener('scroll', () => setAtTop(window.pageYOffset <= 1))

  return (
    <div
      className={atTop ? containerClassTop : containerClassNotTop}
      style={{ display: 'flex', alignItems: 'center', margin: '0 0 3em 0' }}
    >
      <p className='dark-mode-toggle-title'>Dark Mode</p>
      <div className='dark-mode-toggle-container' onClick={() => setDarkMode(!darkMode)}>
        <div
          className='dark-mode-toggle'
          style={darkMode ? toggleSwitchActive : toggleSwitchInactive}
        />
      </div>
    </div>
  )
}

export default DarkModeToggle
