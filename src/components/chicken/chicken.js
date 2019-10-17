import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Chicken extends Component{

    state = {
        chicken: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({chicken:res.data[2].products[0]})} )
    }

    render(){

        const {chicken} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/meats'>Back</Link>
                <div className='product' key={chicken.id} >
                <img title={chicken.name} alt={chicken.name} src={chicken.product_img} />
                <p>Name : {chicken.name}</p>
                <p>Weight : {chicken.weight}</p>
                <p>Price : {chicken.price}</p>
                </div>
            </div>
        )
    }
}

export default Chicken;
