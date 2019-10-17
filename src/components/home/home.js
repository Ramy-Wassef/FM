import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

class Home extends Component{

    state = {
        home: []
    }

    componentDidMount(){
        Axios.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
        .then( (res) => {this.setState({home:res.data})} )
    }

    render(){


        const {home} = this.state;
        const homelist = home.map( (homeitem) => {
       
            return(
       <div key={homeitem.id} >
           <Link to={homeitem.name} >
               <div className='category'>
               <img title={homeitem.name} alt={homeitem.name} src={homeitem.category_img} />
               <p>{homeitem.name}</p>
               </div>
           </Link>
       </div>
         )
        } )

    return(
        <div className='home'>
            <p className='title' >Products</p>
        {homelist}
        </div>
        
    )
}
}

export default Home;