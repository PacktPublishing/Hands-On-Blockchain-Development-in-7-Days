import React, { Component } from 'react'
import { withRouter }       from 'react-router-dom'
import { Tabs, Tab }        from 'material-ui'
import ThumbIcon             from 'material-ui/svg-icons/action/thumb-up'
import FundsIcon             from 'material-ui/svg-icons/action/swap-vert'

/* component styles */
import { styles } from './styles.scss'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentRoute: ''
    }
  }

  componentDidMount() {
    const { pathname } = this.props.location
    this.handleChange(pathname, false)
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = nextProps.location
    this.handleChange(pathname, false)
  }

  handleChange=(pathname, updateURL) => {
    let path

    if(pathname === '/') {
      path = '/home'
    } else {
      path = pathname
    }

    this.setState({ currentRoute: path })

    if(updateURL !== false) { this.pushRoute(path) }
  }

  pushRoute(path){
    const { history } = this.props
    history.push(path)
  }

  render() {
    const { currentRoute } = this.state


    return(
      <div className={styles}>
        <Tabs
          className="tabs"
          value={currentRoute}
          onChange={this.handleChange}>
          <Tab
            icon={<ThumbIcon />}
            label="Let's Play A Game"
            value={'/home'}>
          </Tab>
        </Tabs>
      </div>
    )
  }

}

export default withRouter(Navigation)