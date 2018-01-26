// import React from 'react';
import style from './style.css'

class Fancy extends React.Component {
  render() {
    const style = {
      color: this.props.color ? this.props.color: ''
    }

    return (
      <div style={style} className='fancy'>This is so Fancy!</div>
    );
  }
}

export default Fancy;