import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Seafood extends Component{

    state = {
        seafood: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({seafood:res.data[3].products})} )
    }

    render(){

        const {seafood} = this.state;
        const seafoodlist = seafood.map( (seafooditem) => {
       
            return(
       <div key={seafooditem.id} >
           <Link to={seafooditem.name} >
           <div className='category'>
               <img title={seafooditem.name} alt={seafooditem.name} src={seafooditem.product_img} />
               <p>{seafooditem.name}</p>
               </div>
               </Link>
       </div>
         )
        } )

        return(
            <div>
                <Link className='btn btn-primary' to='/'>Back</Link>
                <p className='title' >Seafood</p>
         {seafoodlist}
            </div>
        )
    }
}

export default Seafood;
