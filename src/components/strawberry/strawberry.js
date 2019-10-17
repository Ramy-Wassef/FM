import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Strawberry extends Component{

    state = {
        strawberry: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({strawberry:res.data[1].products[1]})} )
    }

    render(){

        const {strawberry} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/fruits'>Back</Link>
                <div className='product' key={strawberry.id} >
                <img title={strawberry.name} alt={strawberry.name} src={strawberry.product_img} />
                <p>Name : {strawberry.name}</p>
                <p>Weight : {strawberry.weight}</p>
                <p>Price : {strawberry.price}</p>
                </div>
            </div>
        )
    }
}

export default Strawberry;
