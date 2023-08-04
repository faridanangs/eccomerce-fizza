import React from 'react'

export const metadata = {
  robots: {
    index: false,
    nocache: true 
  }
}

export default function Layout(props) {
  return (
    <div>
        {props.children}
        <div>
            {props.user}
            {props.admin}
        </div>
    </div>
  )
}
