import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

 class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: '' }; //Search term is defaulted to empty string

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value});

    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }


    render(){
        return (
            <form onSubmit={this.onFormSubmit} className= "input-group">
                <input 
                placeholder="Get a Five-Day forecast in your favorite cities"
                className="form-control"
                value={this.state.term} //Controlled field 
                onChange={this.onInputChange} /> 

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}
//"input-group": css classes *Check Documentation* 

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);