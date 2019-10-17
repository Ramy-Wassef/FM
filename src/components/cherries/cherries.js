import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Cherries extends Component{

    state = {
        cherries: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({cherries:res.data[1].products[2]})} )
    }

    render(){

        const {cherries} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/fruits'>Back</Link>
                <div className='product' key={cherries.id} >
                <img title={cherries.name} alt={cherries.name} src={cherries.product_img} />
                <p>Name : {cherries.name}</p>
                <p>Weight : {cherries.weight}</p>
                <p>Price : {cherries.price}</p>
                </div>
            </div>
        )
    }
}

export default Cherries;
