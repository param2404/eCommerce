import React from 'react'

const Cart = React.memo(() => {
    return (<div><table className="table table-bordered" style={{width:'80%', margin:'50px auto'}}>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Product</th>
                <th scope="col">Amount per Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
            </tr>
        </tbody>
    </table></div>     
    )
})

export default Cart