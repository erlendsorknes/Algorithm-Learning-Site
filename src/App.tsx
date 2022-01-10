import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Frontpage from './pages/Frontpage'
import Algorithms from './pages/Algorithms'
import Footer from './components/Footer'
import MergeSortPage from './pages/MergeSortPage'
import PageNotFound from './pages/PageNotFound'

interface NavRouteProps {
  exact: boolean
  path: string
  component: React.ReactNode
}

const NavRoute: React.FC<NavRouteProps> = ({ exact, path, component }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      <div>
        <Navbar />
        {component}
        <Footer />
      </div>
    )}
  />
)

function App() {
  return (
    <div>
      <Switch>
        <NavRoute exact={true} path="/" component={<Frontpage />} />
        <NavRoute exact={true} path="/algorithms" component={<Algorithms />} />
        <NavRoute exact={true} path="/datastructures" component={<Frontpage />} />
        <NavRoute exact={true} path="/MergeSort" component={<MergeSortPage />} />
        <NavRoute exact={false} path="/" component={<PageNotFound />} />
      </Switch>
    </div>
  )
}

export default App
