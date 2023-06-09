import React from 'react'
// import DeleteImage from './component/deleteimage/DeleteImage'
import Container from './container/Container'
// import Header from './component/header/Header'
// import Banner from './component/banner/Banner'
// import Footer from './component/footer/Footer'
// import LifeCycle from './component/lifecycle/LifeCycle'
// import Logical from './logical/Logical.jsx'
// import Conditional from './if-else/Conditional.jsx'
// import Loop1 from './looping/Loop1.jsx'
// import Loop2 from './looping/Loop2.jsx'
// import Loop3 from './looping/Loop3.jsx'
// import Operators from './operators/Operators.jsx'
// import Relational from './relational/Relational.jsx'
// import Array from './array/Array.jsx'
// import Map from './functionmap/Map.jsx'
import Form from './container/form/Form'
// import Grid from './container/grid/Grid'
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Week 2
// import ChangeColor from './container/changecolor/ChangeColor'
// import PropsParent from './container/propsparent/PropsParent'
const App = () => {
  return (
    <Router>

    <div>

    <Switch>

      <Route exact path='/' component={Form} />
      <Route path='/home' component={Container} />

    </Switch>

    {/* <Header /> */}
    {/* <Container /> */}
    {/* <Grid /> */}
    {/* <PropsParent /> */}
    {/* <ChangeColor /> */}

    {/* <LifeCycle /> */}
    {/* <DeleteImage /> */}
    {/* <Footer /> */}
    {/* <Form /> */}
    </div>
    </Router>
    // <div>
    //   <Banner />
    // </div>
    // <div>
    // </div>
  )
}

export default App