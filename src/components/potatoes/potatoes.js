import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Potatoes extends Component{

    state = {
        potatoes: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({potatoes:res.data[0].products[0]})} )
    }

    render(){

        const {potatoes} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/vegetables'>Back</Link>
                <div className='product' key={potatoes.id} >
                <img title={potatoes.name} alt={potatoes.name} src={potatoes.product_img} />
                <p>Name : {potatoes.name}</p>
                <p>Weight : {potatoes.weight}</p>
                <p>Price : {potatoes.price}</p>
                </div>
            </div>
        )
    }
}

export default Potatoes;
