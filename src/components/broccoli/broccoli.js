import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Broccoli extends Component{

    state = {
        broccoli: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({broccoli:res.data[0].products[2]})} )
    }

    render(){

        const {broccoli} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/vegetables'>Back</Link>
                <div className='product' key={broccoli.id} >
                <img title={broccoli.name} alt={broccoli.name} src={broccoli.product_img} />
                <p>Name : {broccoli.name}</p>
                <p>Weight : {broccoli.weight}</p>
                <p>Price : {broccoli.price}</p>
                </div>
            </div>
        )
    }
}

export default Broccoli;
