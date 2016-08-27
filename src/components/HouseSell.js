import React, {Component} from 'react'
import HouseActions from '../actions/HouseActions'

export default class HouseSell extends Component{

  constructor(){
    super();
    this.state ={
      address:'',
      sqft:'',
      baths:'',
      beds:'',
      price:'',
      location:'',
      imageurl:''
    }
    this.submitHouse=this.submitHouse.bind(this);
  }

   resetForm(){
    this.setState({ address:'',
                    sqft:'',
                    baths:'',
                    beds:'',
                    price:'',
                    location:'',
                    imageurl:''});
  }


  submitHouse(e){
    console.log("inside submit House")
    e.preventDefault();
    let house ={
      address:this.state.address,
      sqft:this.state.sqft,
      baths:this.state.baths,
      beds:this.state.beds,
      price:this.state.price,
      location:this.state.location,
      imageurl:this.state.imageurl
    }
    console.log(house,{house});
    HouseActions.createHouse(house)
    this.setState({house:''});
    this.resetForm();
  }
 
  render(){
     let {house}= this.state;
    return (
      <div className ="maindiv">
     <form onSubmit={this.submitHouse}>
      <div className="container form-group ">
      <input type="text" value = {this.state.imageurl} placeholder="Image URL" className="form-control input-lg"
      onChange={e=>this.setState({imageurl:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.address} placeholder ="Address" className="form-control input-lg"
      onChange={e=>this.setState({address:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.location} placeholder="Location" className="form-control input-lg"
      onChange={e=>this.setState({location:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.sqft} placeholder="Sqft" className="form-control input-lg"
      onChange={e=>this.setState({sqft:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.baths} placeholder="Baths" className="form-control input-lg"
      onChange={e=>this.setState({baths:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.beds} placeholder="Beds" className="form-control input-lg"
      onChange={e=>this.setState({beds:e.target.value})}/>
      </div>

      <div className="container form-group">
      <input type="text" value = {this.state.price} placeholder="Price" className="form-control input-lg"
      onChange={e=>this.setState({price:e.target.value})}/>
      </div>

      <div  className="container form-group">
      <button id = "hsesbtid" type="submit"  className="btn btn-primary btn-lg">Submit</button>
      </div>
      

     </form>
      
    </div>)
  }
}