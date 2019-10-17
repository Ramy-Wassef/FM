import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Crab extends Component{

    state = {
        crab: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({crab:res.data[3].products[1]})} )
    }

    render(){

        const {crab} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/seafood'>Back</Link>
                <div className='product' key={crab.id} >
                <img title={crab.name} alt={crab.name} src={crab.product_img} />
                <p>Name : {crab.name}</p>
                <p>Weight : {crab.weight}</p>
                <p>Price : {crab.price}</p>
                </div>
            </div>
        )
    }
}

export default Crab;
