import React , {Component} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Axios from 'axios';


class Meats extends Component{

    state = {
        meats: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({meats:res.data[2].products})} )
    }

    render(){

        const {meats} = this.state;
        const meatslist = meats.map( (meatsitem) => {
       
            return(
       <div key={meatsitem.id} >
           <Link to={meatsitem.name} >
           <div className='category'>
               <img title={meatsitem.name} alt={meatsitem.name} src={meatsitem.product_img} />
               <p>{meatsitem.name}</p>
               </div>
               </Link>
       </div>
         )
        } )

        return(
            <div>
                <Link className='btn btn-primary' to='/'>Back</Link>
                <p className='title' >Meats</p>
                {meatslist}
            </div>
        )
    }
}

export default Meats;
