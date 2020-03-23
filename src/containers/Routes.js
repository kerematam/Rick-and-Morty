import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import BasicLayout from './layouts/BasicLayout'
import NotFoundPage from 'pages/NotFoundPage'

export default () => (
  <Switch>
    <Route exact path={['/', '/characters', '/characters/:id']}>
      <BasicLayout />
    </Route>
    <Route path="/404" component={NotFoundPage} />} />
    <Redirect to="/404" />
  </Switch>
)
