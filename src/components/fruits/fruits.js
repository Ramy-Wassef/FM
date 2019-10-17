import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Fruits extends Component{

    state = {
        fruits: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({fruits:res.data[1].products})} )
    }

    render(){

        const {fruits} = this.state;
        const fruitslist = fruits.map( (fruitsitem) => {
       
            return(
       <div key={fruitsitem.id} >
           <Link to={fruitsitem.name} >
           <div className='category'>
               <img title={fruitsitem.name} alt={fruitsitem.name} src={fruitsitem.product_img} />
               <p>{fruitsitem.name}</p>
               </div>
               </Link>
       </div>
         )
        } )

        return(
            <div>
<Link className='btn btn-primary' to='/'>Back</Link>
<p className='title' >Fruits</p>
      {fruitslist}
            </div>
        )
    }
}

export default Fruits;
