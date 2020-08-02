import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import reducer from '../reducer'
import * as actions from '../actions'

import LoginForm from './loginForm'

@connect(reducer, actions)
class LoginModal extends Component {
  render () {
    return (
      <div class="custom-modal-wrapper">
        <div class="custom-modal">
          <button class="btn btn-default btn-lg btn-icon close-icon" onClick={this.props.toggleLoginModal}>
            <i class="oi oi-x"></i>
          </button>
          <div class="container">
            <div class="form-wrapper">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginModal
