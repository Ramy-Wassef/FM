import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Onions extends Component{

    state = {
        onions: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({onions:res.data[0].products[1]})} )
    }

    render(){

        const {onions} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/vegetables'>Back</Link>
                <div className='product' key={onions.id} >
                <img title={onions.name} alt={onions.name} src={onions.product_img} />
                <p>Name : {onions.name}</p>
                <p>Weight : {onions.weight}</p>
                <p>Price : {onions.price}</p>
                </div>
            </div>
        )
    }
}

export default Onions;
