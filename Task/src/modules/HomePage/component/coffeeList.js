import * as React from "react";
import {connect} from 'react-redux';
import {getCoffees} from '../actions';
import CoffeeCard from "./coffeeCard";

const CoffeeList =props=> {
    React.useEffect(()=>{
        props.getCoffees();
      },[props])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mt-5 mb-5">
        <h1 style={{color:'#AC3B61', fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>Coffee List</h1>
        <button className="btn btn-warning" style={{position:'absolute',right:"0",top:"0"}}>Orders</button>
        </div>
        {props.coffees.map((coffee) => {
          return (
            <CoffeeCard coffee={coffee} key={coffee.id}/>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state =>{
    return{
      coffees: state.coffees,
      isLoading:state.isLoading
    }
  }
  
  export default connect(mapStateToProps,{getCoffees})(CoffeeList)