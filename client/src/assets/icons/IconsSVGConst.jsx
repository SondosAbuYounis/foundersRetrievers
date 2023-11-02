import React from 'react'

export const Plus = () => {
        // SVG hover - white
        const SVGBtnHover = {
            ':hover': {
                color: '#fff', 
              },
        }
  return (
    <svg  width="12" height="13" viewBox="0 -2 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9H17" stroke="#FBE62E" stroke-width="2" stroke-linecap="round" style={SVGBtnHover}/>
    <path d="M9 17L9 1" stroke="#FBE62E" stroke-width="2" stroke-linecap="round" style={SVGBtnHover}/>
    </svg>
  )
}

export const Minus = () => {
  return (
    <svg width="12" height="12" viewBox="0 -2 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1H17" stroke="#E83434" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

export const LinkIcon = () => {
  return (
    <svg width="12" height="12" viewBox="0 -2 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.81465 9.18517C7.96016 10.3306 9.81739 10.3307 10.9629 9.18517L13.9259 6.22221C15.0714 5.07674 15.0714 3.21955 13.9259 2.07407C12.7804 0.928593 10.9232 0.928592 9.77769 2.07407L8.29617 3.55555" stroke="#18E074" stroke-width="2" stroke-linecap="round"/>
    <path d="M9.18535 6.81483C8.03984 5.66935 6.18261 5.66935 5.0371 6.81483L2.07407 9.77779C0.928565 10.9233 0.928565 12.7805 2.07407 13.9259C3.21958 15.0714 5.07681 15.0714 6.22231 13.9259L7.70383 12.4445" stroke="#18E074" stroke-width="2" stroke-linecap="round"/>
    </svg>
  )
}

