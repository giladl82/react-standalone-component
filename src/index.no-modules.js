class Fancy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        color: this.props.color ? this.props.color : ''
      }
    }
  }


  handleMouseOut = () => {
    if(this.props.overColor) {
      this.setState({
        style: {color: this.props.color}
      })
    }
  }

  handleMouseOver = () => {
    if(this.props.overColor) {
      this.setState({
        style: {color: this.props.overColor}
      })
    }
  }

  render() {
    return (
      <div style={this.state.style} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className='fancy' >This is so Fancy!</div>
    );
  }
}

window.fancyComp = (selector, options) => {
  ReactDOM.render(
    React.createElement(Fancy, options), 
    document.querySelector(selector));
}
