import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Shrimp extends Component{

    state = {
        shrimp: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({shrimp:res.data[3].products[2]})} )
    }

    render(){

        const {shrimp} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/seafood'>Back</Link>
                <div className='product' key={shrimp.id} >
                <img title={shrimp.name} alt={shrimp.name} src={shrimp.product_img} />
                <p>Name : {shrimp.name}</p>
                <p>Weight : {shrimp.weight}</p>
                <p>Price : {shrimp.price}</p>
                </div>
            </div>
        )
    }
}

export default Shrimp;
