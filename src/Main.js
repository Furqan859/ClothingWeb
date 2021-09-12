import React from "react";
import {Products} from "../src/Database/products";
import CardView from "./Component/CardView";



const Main = () =>{
    return (  <div>

        <div className="container-fluid">
            <h1 className="display-4">Clothing Store</h1>
                <div className="row">
                    {Products.map(product => <CardView data={ product }/>)}
                </div>
                    </div>
                       </div>
    )
}
export default Main;