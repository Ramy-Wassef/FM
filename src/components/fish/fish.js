import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Fish extends Component{

    state = {
        fish: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({fish:res.data[3].products[0]})} )
    }

    render(){

        const {fish} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/seafood'>Back</Link>
                <div className='product' key={fish.id} >
                <img title={fish.name} alt={fish.name} src={fish.product_img} />
                <p>Name : {fish.name}</p>
                <p>Weight : {fish.weight}</p>
                <p>Price : {fish.price}</p>
                </div>
            </div>
        )
    }
}

export default Fish;
