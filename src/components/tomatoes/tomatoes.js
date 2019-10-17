import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Tomatoes extends Component{

    state = {
        tomatoes: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({tomatoes:res.data[0].products[3]})} )
    }

    render(){

        const {tomatoes} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/vegetables'>Back</Link>
                <div className='product' key={tomatoes.id} >
                <img title={tomatoes.name} alt={tomatoes.name} src={tomatoes.product_img} />
                <p>Name : {tomatoes.name}</p>
                <p>Weight : {tomatoes.weight}</p>
                <p>Price : {tomatoes.price}</p>
                </div>
            </div>
        )
    }
}

export default Tomatoes;
