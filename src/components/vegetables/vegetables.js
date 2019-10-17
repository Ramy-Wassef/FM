import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Vegetables extends Component{
    
    state = {
        vegetables: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({vegetables:res.data[0].products})} )
    }

    render(){

        const {vegetables} = this.state;
        const vegetableslist = vegetables.map( (vegetablesitem) => {
       
            return(
       <div key={vegetablesitem.id} >
           <Link to={vegetablesitem.name} >
           <div className='category'>
               <img title={vegetablesitem.name} alt={vegetablesitem.name} src={vegetablesitem.product_img} />
               <p>{vegetablesitem.name}</p>
               </div>
               </Link>
       </div>
         )
        } )

        return(
            <div>
<Link className='btn btn-primary' to='/'>Back</Link>
<p className='title' >vegetables</p>
            {vegetableslist}
            </div>
        )
    }
}

export default Vegetables;
