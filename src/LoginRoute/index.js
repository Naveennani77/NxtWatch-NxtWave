import {Component} from 'react'
import Cookie from 'js-cookie'

import {
  Logincont,
  LoginCard,
  Formelement,
  Forminputelements,
  Labelelemnts,
  Inputelement,
  Formcheckboxelementcont,
  Buttoncont,
  Inputcheckboxelement,
  Checkboxlabelinput,
  Errormsgpara,
} from './Loginstylingcomponent'

class LoginRoute extends Component {
  state = {username: '', password: '', Errmessage: '', isusererror: false}

  gettingusername = event => {
    console.log('hi naveen')
    this.setState({username: event.target.value})
  }

  gettinguserpassword = event => {
    this.setState({password: event.target.value})
  }

  gettingfailureview = errormsg => {
    console.log(errormsg)

    this.setState({Errmessage: errormsg, isusererror: true})
  }

  gettingsuccesview = jwttoken => {
    const {history} = this.props
    console.log(jwttoken)

    Cookie.set('jwtnxtyt', jwttoken, {expires: 4})

    history.push('/')
  }

  submittinguserform = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userobj = {
      username,
      password,
    }

    const requestingobj = {
      method: 'POST',
      body: JSON.stringify(userobj),
    }

    const serverresponse = await fetch(
      'https://apis.ccbp.in/login',
      requestingobj,
    )
    console.log(serverresponse)
    const dataresponse = await serverresponse.json()
    console.log(dataresponse)

    if (serverresponse.ok === true) {
      this.gettingsuccesview(dataresponse.jwt_token)
    } else {
      console.log('hi')
      this.gettingfailureview(dataresponse.error_msg)
    }
  }

  render() {
    const {Errmessage, isusererror} = this.state
    console.log(Errmessage)
    return (
      <Logincont>
        <LoginCard>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <Formelement onSubmit={this.submittinguserform}>
            <Forminputelements>
              <Labelelemnts for="username">USERNAME</Labelelemnts>
              <Inputelement
                id="username"
                placeholder="Username"
                type="text"
                onChange={this.gettingusername}
              />
            </Forminputelements>
            <Forminputelements>
              <Labelelemnts for="password">PASSWORD</Labelelemnts>
              <Inputelement
                id="password"
                placeholder="Password"
                type="password"
                onChange={this.gettinguserpassword}
              />
            </Forminputelements>
            <Formcheckboxelementcont>
              <Inputcheckboxelement type="checkbox" id="showpascheck" />
              <Checkboxlabelinput for="showpascheck">
                Show Password
              </Checkboxlabelinput>
            </Formcheckboxelementcont>
            <Buttoncont type="submit">Login</Buttoncont>
            {isusererror && <Errormsgpara>*{Errmessage}</Errormsgpara>}
          </Formelement>
        </LoginCard>
      </Logincont>
    )
  }
}

export default LoginRoute
