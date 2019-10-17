import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Mangos extends Component{

    state = {
        mangos: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({mangos:res.data[1].products[3]})} )
    }

    render(){

        const {mangos} = this.state;
       
        return(
            <div>
                <Link className='btn btn-primary' to='/fruits'>Back</Link>
                <div className='product' key={mangos.id} >
                <img title={mangos.name} alt={mangos.name} src={mangos.product_img} />
                <p>Name : {mangos.name}</p>
                <p>Weight : {mangos.weight}</p>
                <p>Price : {mangos.price}</p>
                </div>
            </div>
        )
    }
}

export default Mangos;
