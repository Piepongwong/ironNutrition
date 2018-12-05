import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foodbox from "./Foodbox.js"
import foods from './foods.json'
import AddFoodForm from './AddFoodForm.js'

class App extends Component {

  constructor(props) {
    super(props)
  }
  state = {
    search: "",
    modalActive:false,
    name: "name",
    image: "image",
    calories: "calories",
    foods: foods
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}) 
  }

  toggleModal = () => {
      this.setState({modalActive: !this.state.modalActive}, function() {
          
      })
  }

  handleAdd = (event)=> {
    
    var newFoodAttr = {} 
    var keyName = event.target.name
    var inputFieldValue =  event.target.value
    newFoodAttr[keyName] = inputFieldValue

    this.setState(newFoodAttr, function() {
      
    })
  }

  addIt = ()=> {

    var currentFoods = this.state.foods
    var newFoodItem = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    }

    currentFoods.push(newFoodItem)
    
    this.setState({foods: currentFoods}, function() {
      debugger
    })
    this.toggleModal()
  }
  render() {

    if(this.state.modalActive) {
      var classNames = "modal is-active"
    } else {
        var classNames = "modal"
    }

    var foodBoxes = this.state.foods
    .filter((food)=> 
      food.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
    .map((food)=> 
       <Foodbox name={food.name} cal={food.calories} image={food.image} />
    )

    return (
      <div className="App">
        <div>
            <button onClick={this.toggleModal} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
            <div className={classNames}>
                <div className="modal-background"></div>
                <div className="modal-content">
                      <input name="name" onChange={this.handleAdd} placeholder={this.state.name} />
                      <input name="image" onChange={this.handleAdd} placeholder={this.state.image} />
                      <input name="calories" onChange={this.handleAdd} placeholder={this.state.calories} />
                </div>
                <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
                <button onClick={this.addIt} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
            </div>
        </div>
        <input onChange={this.handleChange} name="search" placeholder={this.state.search}/>
        {foodBoxes}
      </div>
    );
  }
}

export default App;

