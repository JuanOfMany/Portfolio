import React from 'react'

export default function ProgressBar(props) {
  return (
    <div className="progress-container fixed-top">
      <span
        className="progress-bar"
        style={{ width: `${props.width}%`, height: '100%' }}
      ></span>
    </div>
  )
}
