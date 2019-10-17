import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Beef extends Component{

    state = {
        beef: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({beef:res.data[2].products[3]})} )
    }

    render(){

        const {beef} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/meats'>Back</Link>
                <div className='product' key={beef.id} >
                <img title={beef.name} alt={beef.name} src={beef.product_img} />
                <p>Name : {beef.name}</p>
                <p>Weight : {beef.weight}</p>
                <p>Price : {beef.price}</p>
                </div>
            </div>
        )
    }
}

export default Beef;
