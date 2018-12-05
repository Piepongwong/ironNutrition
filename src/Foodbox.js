import React, {Component} from "react"
import 'bulma/css/bulma.css';

class Foodbox extends Component {

    state = {
        quantity: 0
    }
    
    render() {
        var addFood = ()=> {

            var theFoodObject = {
                name: this.props.name,
                image: this.props.image,
                calories: this.props.cal,
                quantiy: this.state.quantity // note to self, make it possible to update later
            }
    
            this.props.addFood(theFoodObject)
    
         }

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{this.props.name}</strong> <br />
                        <small>{this.props.cal} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input
                            className="input"
                            type="number" 
                            value="1"
                        />
                        </div>
                        <div className="control">
                        <button onClick={addFood} className="button is-info">
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Foodbox