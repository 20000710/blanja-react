import React from 'react'
import { Link } from 'react-router-dom'
import transactionSuccessImg from '../../assets/img/transaction-success.png'

const TransactionSuccess = () => {
   

    return (
        <div className="card"
            style={{
                alignItems: "center",
                justifyContent: "center",
                width: "700px",
                height: "550px",
                marginTop: "5rem",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 0px 8px rgba(115, 115, 115, 0.25)",
                borderRadius: "4px"
            }}>
            <div className="card-body" 
                style={{ 
                    padding: "1.5rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center" 
                }}>
                <img width={250} height={250} src={transactionSuccessImg} alt="transaction img success" />
                <h5 class="card-title" style={{fontSize: "30px"}}>Transaction Successfully!</h5>
                <Link to="/" style={{fontSize: "18px", color: "#DB3022"}}>Temukan barang lainnya</Link>
            </div>
        </div>
    )
}

export default TransactionSuccess