import {Redirect, Route} from 'react-router-dom'

import Cookie from 'js-cookie'

const ProductedRoute = props => {
  const tokenjwt = Cookie.get('jwtnxtyt')

  if (tokenjwt === undefined) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}
export default ProductedRoute
