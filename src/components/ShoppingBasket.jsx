import React, { PureComponent } from 'react';
import { quantityChanged, clearAll, removeItem } from '../actions/actions';
import { connect } from 'react-redux';


class ShoppingBasket extends PureComponent {

    onChange(id, quanity){
        this.props.quantityChanged(id, quanity);
    }

    onClear() {
        this.props.clearAll();
    }

    onRemove(id) {
        this.props.removeItem(id);
    }

    getItems(items) {

        const total = Object.keys(items).reduce( (prev, key) => {
            return Number(prev) + (items[key].quantity * items[key].unitPrice);
        }, 0);

        const basketItems = items.map((item, index) => <div key={index}>
                <div className="grid-container">
                    <div className="grid-items-namebox">{item.name}</div>
                    <div className="grid-items-quantity"><input contentEditable type="text" className="input" value={item.quantity} onChange={(event) => this.onChange(item.id, event.currentTarget.value)} /></div>
                    <div className="grid-items-price">${(item.unitPrice * item.quantity).toFixed(2)}</div>
                    <div className="grid-items-quantity"><a className="link" href="javascript:void(0);" onClick={() => this.onRemove(item.id)}>X</a></div>
                </div>
                { index !== items.length-1 && <hr className="hr" /> }
            </div>
            )
        
        return <div className="container">
                    <div className="basket-items"> 
                        { basketItems } 
                        { basketItems.length === 0 && <div className="basket-empty">Your basket is empty!</div> } 
                    </div>
                    <div className="summary-box-container">
                        <div className="summary-box-total">${ total.toFixed(2) }</div>
                        <div className="summary-box">
                            <a className="link" href="javascript:void(0);" onClick={() => this.onClear()}>Clear</a>&nbsp;&nbsp;
                            <button className="button">{items.length !== 0 ? 'Check Out >' : 'Start Over'}</button>
                        </div>
                    </div>
                </div>;
    }

    render(){
        return <div className="shopping-container">
            <div className="shopping-basket">{this.getItems(this.props.items)}</div>
            </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    quantityChanged: (id, quantity) => dispatch(quantityChanged({id, quantity})),
    clearAll: () => dispatch(clearAll()),
    removeItem: (id) => dispatch(removeItem(id))
});
  
  const mapStateToProps = (state) => ({
    items: state.items
  })
  
  export default connect( mapStateToProps, mapDispatchToProps)(ShoppingBasket);