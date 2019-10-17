import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Turkey extends Component{

    state = {
        turkey: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({turkey:res.data[2].products[1]})} )
    }

    render(){

        const {turkey} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/meats'>Back</Link>
                <div className='product' key={turkey.id} >
                <img title={turkey.name} alt={turkey.name} src={turkey.product_img} />
                <p>Name : {turkey.name}</p>
                <p>Weight : {turkey.weight}</p>
                <p>Price : {turkey.price}</p>
                </div>
            </div>
        )
    }
}

export default Turkey;
