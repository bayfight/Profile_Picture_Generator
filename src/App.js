import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      profil : "",
      input : "",
    }
  }
  render() {
    let klik = (e) => {
      // let nama = document.getElementById('tol').value
      this.setState({
        profil: `https://robohash.org/${this.state.input}`
      })
    }

    let berubah = (e) => {
      this.setState({
        input: e.target.value 
      })
    }

    return (
      <div>
        <div className="col-lg-12">
        <div className="row">
        <div className="container">
        <div className="col-lg-6 ml">
        <div id="cardRobot" class="card text-center">
          <div class="card-body">
            <input type="text" placeholder="Ketik nama Anda..." onChange={berubah} ></input>
            <br></br>
            <button type="button" class="btn btn-success mt-2" onClick={klik}>Buat Profil Picture</button>
            <br></br>
            <img className="rounded-circle mt-3 bg-white" src={this.state.profil}/>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
