import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CharacterListPage from 'pages/CharacterListPage'
import CharacterPage from 'pages/CharacterPage'
import Header from 'containers/layouts/Header'
import styles from './BasicLayout.module.scss'

const BasicLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div>
        <Switch>
          <Redirect exact from="/" to="/characters" />
          <Route
            path="/characters"
            exact
            render={() => <CharacterListPage />}
          />
          <Route path="/characters/:id" render={() => <CharacterPage />} />
        </Switch>
      </div>
    </div>
  )
}

export default BasicLayout
