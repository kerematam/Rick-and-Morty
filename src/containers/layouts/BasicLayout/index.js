import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoadingPage from 'pages/LoadingPage'
import Header from 'containers/layouts/Header'

import styles from './BasicLayout.module.scss'

const CharacterListPage = lazy(() => import('pages/CharacterListPage'))
const CharacterPage = lazy(() => import('pages/CharacterPage'))

const BasicLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Redirect exact from="/" to="/characters" />
            <Route
              path="/characters"
              exact
              render={() => <CharacterListPage />}
            />
            <Route path="/characters/:id" render={() => <CharacterPage />} />
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default BasicLayout
