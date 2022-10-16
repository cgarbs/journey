import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import Map from './components/Map';
import Timeline from './components/Timeline';
import Upload from './components/Upload';

class App extends Component {

  // state = {
  //   user: {}
  // }

  // async componentDidMount() {
  //   let user = await actions.getUser()
  //   console.log('user is ', user)
  //   this.setState({ user })
  // }

  // setUser = (user) => {
  //   this.setState({ user })
  // }

  render() {
    return (
      <main className="App">

        <h1>JOURNEY</h1>
        <Home />

        {/* <h1>🧨 Iron Plate 🚀</h1>
        <h2>{this.state.user?.email} <img src={this.state.user?.imageUrl} /></h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-post">Add Post</Link>
          {this.state.user.email ? <Link to="/profile">Profile</Link> : <Link to="/auth"> Log In</Link>}


        </nav>


        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          <Route exact path='/add-post' render={(props) => <AddPost {...props} />} />
          <Route exact path='/auth' render={(props) => <Auth setUser={this.setUser} {...props} />} />
          <Route exact path='/profile' render={(props) => <Profile user={this.state.user} setUser={this.setUser} {...props} />} />

        </Switch> */}


      </main>
    );
  }
}

export default App;