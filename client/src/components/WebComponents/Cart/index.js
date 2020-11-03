import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, handleCartProductQuantity} from './../../../actions'


const Cart = React.memo(() => {
    const [totalPrice,setTotalPrice]=useState(0)
    const dispatch=useDispatch()
    const myCart = useSelector(state => state.CartReducer.mycart)

    const handleTotalAmount = useCallback(() => {
        let totalPrice = 0;
        let Price=0
        let CalculatedPrice=myCart.map((m) => {
            Price = Price + (m.productQuantity * m.amount)  
            //setTotalPrice(totalPrice)
            console.log(totalPrice)
            return Price
        })
        return totalPrice+=CalculatedPrice
    },[myCart])

    return (<div><table className="table table-bordered" style={{ width: '80%', margin: '50px auto' }}>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Amount per Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           {myCart && myCart.length > 0 && myCart.map((c,i)=> <tr key={i}>
               <th scope="row">{i + 1}</th>
                <td>{c.productName}</td>
                <td>Rs {c.amount}</td>
               <td><select className="custom-select custom-select-sm" onChange={(event) => dispatch(handleCartProductQuantity({ productId: c.productId, count: event.target.value }))} >
                   {[1,2,3,4,5,6,7,8].map((o,i)=><option key={i} value={o}>{o}</option>)} 
               </select></td>
               <td>Rs {c.amount * c.productQuantity}</td>
               <td><button onClick={()=>dispatch(removeFromCart(c.productId))}>Remove</button></td>
           </tr>)}
            <tr>
                <td colSpan="4">Total Amount</td>
                <td colSpan="1">{handleTotalAmount()}</td>
                <td><button>CHECKOUT</button></td>
            </tr>
        </tbody>
    </table></div>     
    )
})

export default Cart