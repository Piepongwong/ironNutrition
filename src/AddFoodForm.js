import React, {Component} from "react"
import 'bulma/css/bulma.css';

class AddFoodForm extends Component {

    state = {
        modalActive:false
    }
    toggleModal = () => {
       this.setState({modalActive: !this.state.modalActive}, function() {
           
       })
    }

    render() {
        
        if(this.state.modalActive) {
            var classNames = "modal is-active"
        } else {
            var classNames = "modal"
        }

        return(
            <div>
                <button onClick={this.toggleModal} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Launch example modal</button>
                <div className={classNames}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        {/* <!-- Any other Bulma elements you want --> */}
                    </div>
                    <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
                </div>
            </div>

        )
    }
}

export default AddFoodForm