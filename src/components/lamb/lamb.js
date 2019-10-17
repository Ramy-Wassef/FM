import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Lamb extends Component{

    state = {
        lamb: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({lamb:res.data[2].products[2]})} )
    }

    render(){

        const {lamb} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/meats'>Back</Link>
                <div className='product' key={lamb.id} >
                <img title={lamb.name} alt={lamb.name} src={lamb.product_img} />
                <p>Name : {lamb.name}</p>
                <p>Weight : {lamb.weight}</p>
                <p>Price : {lamb.price}</p>
                </div>
            </div>
        )
    }
}

export default Lamb;
