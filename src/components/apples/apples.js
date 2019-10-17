import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Apples extends Component{

    state = {
        apples: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({apples:res.data[1].products[0]})} )
    }

    render(){

        const {apples} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/fruits'>Back</Link>
                <div className='product' key={apples.id} >
                <img title={apples.name} alt={apples.name} src={apples.product_img} />
                <p>Name : {apples.name}</p>
                <p>Weight : {apples.weight}</p>
                <p>Price : {apples.price}</p>
                </div>
            </div>
        )
    }
}

export default Apples;
