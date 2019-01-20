import React, { PureComponent } from 'react';

export default class ShoppingBasket extends PureComponent {

    onClick(){

    }


    getItems(items) {

        const total = Object.keys(items).reduce( (prev, key) => {
            return Number(prev) + (items[key].quantity * items[key].unitPrice);
        }, 0);

        const basketItems = items.map((item, index) => <div key={index}>
                <div className="grid-container">
                    <div className="grid-items-namebox">{item.name}</div>
                    <div className="grid-items-quantity">{item.quantity}</div>
                    <div className="grid-items-price">${(item.unitPrice * item.quantity).toFixed(2)}</div>
                    <div className="grid-items-quantity">X</div>
                </div>
                { index !== items.length-1 && <hr className="hr" /> }
            </div>
            )
        
        return <div className="container">
                    <div> { basketItems } </div>
                    <div className="summary-box-container">
                        <div className="summary-box-total">${ total }</div>
                        <div className="summary-box"><a className="link" href="javascript:void(0);">Clear</a>&nbsp;&nbsp;<button className="button">Check Out ></button></div>
                    </div>
                </div>;
    }

    render(){
        return <div className="shopping-container">
            <div className="shopping-basket">{this.getItems(this.props.items)}</div>
            </div>
    }
}