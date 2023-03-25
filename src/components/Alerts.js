import React from 'react'

export default function Alerts(props) {

    const textCapatilize = (word) => {
        let text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

  return (
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert" style={{position: 'absolute', right: '15px', top: '70px' }}>
        <strong>{textCapatilize(props.alert.type)}</strong>, {props.alert.msg}
    </div>
  )
}
