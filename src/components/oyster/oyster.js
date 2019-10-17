import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Oyster extends Component{

    state = {
        oyster: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({oyster:res.data[3].products[3]})} )
    }

    render(){

        const {oyster} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/seafood'>Back</Link>
                <div className='product' key={oyster.id} >
                <img title={oyster.name} alt={oyster.name} src={oyster.product_img} />
                <p>Name : {oyster.name}</p>
                <p>Weight : {oyster.weight}</p>
                <p>Price : {oyster.price}</p>
                </div>
            </div>
        )
    }
}

export default Oyster;
