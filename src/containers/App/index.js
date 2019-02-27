import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import injectTapEventPlugin   from 'react-tap-event-plugin'
import MuiThemeProvider       from 'material-ui/styles/MuiThemeProvider'
import muiTheme               from './styles/theme/mui-theme'
import { HashRouter,
         Route,
         Redirect,
         Switch }             from 'react-router-dom'
import Web3                   from 'web3'

/*
 * Import global styles into entire app
 */
import './styles/app.scss'

/* actions */
import * as providerActionCreators from 'core/actions/actions-provider'


/* application containers & components */
import Header           from 'containers/Header'

injectTapEventPlugin()

export class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { actions } = this.props

    /** ***** Set the Provider *******/
    if (typeof window.web3 !== 'undefined') {
      const currentProvider = window.web3.currentProvider
      const web3Provider = new Web3(currentProvider)
      actions.provider.setProvider(web3Provider)
    }
  }

  render() {
    const { ui } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <HashRouter>
            <div>
              <Header />
              <div className="container">
                <div id="main">
                  <Switch>
                    <Redirect from="/" to="/home" />
                  </Switch>
                </div>
              </div>
            </div>
          </HashRouter>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object,
  ui: PropTypes.object
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      provider: bindActionCreators(providerActionCreators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
