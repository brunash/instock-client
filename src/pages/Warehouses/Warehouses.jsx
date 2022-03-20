import "./Warehouses.scss";
import Search from '../../components/Search';
import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import AddWarehouse from "../AddWarehouse/AddWarehouse";
import { Link } from "react-router-dom";
import { Component } from "react/cjs/react.development";

// const URL = "http://localhost:9000/warehouses/";

export default class Warehouses extends Component {
  // state = {
  //   warehouse: [],
  //   showModal: false,
  // };

  // componentDidMount() {
  //   axios.get(URL).then((response) => {
  //     this.setState({ warehouse: response.data });
  //   });
  // }

  render() {
    // if (this.state.warehouse === []) {
    //   return <h1>Loading....</h1>;
    // }
    return (
      <>
        <div className="card__tablet">
          <CardHeader text="Warehouse" />
          <div className="card__cta">
            <Search placeholder="Search.." />
            <Link to='/warehouses/add' component={AddWarehouse}><Button text="Add warehouse" /></Link>
          </div>
        </div>
        <div>
          <WarehouseList />
        </div>
      </>
    );
  }
}
