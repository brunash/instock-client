import { Link } from 'react-router-dom'
import './WarehouseList.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';
import trash from '../../assets/Icons/delete_outline-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg'
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import Modal from '../Modal/Modal'

const URL = 'http://localhost:9000/warehouses/'


class WarehouseList extends Component {
    
    state = (
        {
            warehouse: [],
            showModal: false
        }
    )
    

    componentDidMount(){
        axios.get(URL)
            .then((response) => {
                this.setState({warehouse: response.data})
                
            })
    }
    
    render(){
        
        if (this.state.warehouse === []){
            return <h1>Loading....</h1>
        }
        return (
                
            <div className="card-bg">
                
                <article className="card">
                    <div className="card__tablet">
                        <CardHeader 
                        text="Warehouse"
                        />
                            <div className="card__cta">
                                <Search 
                                placeholder="Search..."/>
                                <Button 
                                text="+ Add New Warehouse"
                                />
                            </div>
                    </div> 
                    <Modal onClose={() => this.setState({showModal: false})} show={this.state.showModal} />
                    <div className='header'>
                       {this.state.warehouse.map((item, i) => {
                           return(
                             <div className='header__container'>
                                <div className='header__size'>
                                    <h3 className='header__title'>WAREHOUSE</h3>
                                    <p className='header__data'>{item.name}</p>
                                    <h3 className='header__title'>ADDRESS</h3>
                                    <p className='header__data'>{item.address}, {item.city}, {item.country}</p>
                                    <img src={trash} alt='trash can icon' onClick={() => this.setState({showModal: true})} />
                                </div>
                                <div className='header__size'>
                                    <h3 className='header__title'>CONTACT NAME</h3>
                                    <p className='header__data'>{item.contact.name}</p>
                                    <h3 className='header__title'>CONTACT INFORMATION</h3>
                                    <p className='header__data'>{item.contact.phone} {item.contact.email}</p>
                                    <img className='header__edit' alt='edit pencil icon' src={edit}  />
                                </div>    
                            </div>  
                           )  
                       })} 
                       
                       
                    </div>
                </article>
                
            </div>
            
           
           
        )
    }  
}
export default WarehouseList