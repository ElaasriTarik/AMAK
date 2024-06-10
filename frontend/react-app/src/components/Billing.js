import React from "react";
import '../styles/billing.css';
import creditCardsIcon from '../images/card.webp';
import paypalIcon from '../images/paypal.webp';
import googlePayIcon from '../images/googlepay.webp';
import securePayment from '../images/securePayment.png';
import e from "cors";
export default function Billing() {
    const [paymentMethod, setPaymentMethod] = React.useState(false);

    let styles = {
        display: 'none'
    }
    // object for input fields
    const inputData = {
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    }
    const [data, setdata] = React.useState(inputData);

    function clickOption(event) {
        const allOptions = document.querySelectorAll('.opt');
        setPaymentMethod(prev => !prev);
        if (paymentMethod) {
            allOptions.forEach(option => {
                option.style.style = 'display:none';
                styles = { display: 'flex' }
            })
        } else {
            allOptions.forEach(option => {
                option.style.style = 'display:flex';
                styles = { display: 'none' }
            })
        }
    }
    return (
        <>
            <div className="billingContainer">
                <div className="billingMethods">
                    {!paymentMethod && <PayOptions clickOption={clickOption} />}
                    {paymentMethod && <CardPay styles={styles} />}
                </div>


                <div className="billingInfo">
                    <div className="infoSection">
                        <h2>Payment</h2>
                        <div className="serviceName">
                            <p className="paymentTitle">Title</p>
                            <p className="paymentDetailAndAmount">Car wash</p>
                        </div>
                        <div className="servicePrice">
                            <p className="paymentTitle">Price</p>
                            <p className="paymentDetailAndAmount">$20</p>
                        </div>
                        <div className="tax">
                            <p className="paymentTitle">Tax</p>
                            <p className="paymentDetailAndAmount">$2</p>
                        </div>
                        <div className="tips">
                            <p className="paymentTitle">Tips</p>
                            <p className="paymentDetailAndAmount">$5</p>
                        </div>
                        <hr></hr>
                        <div className="total">
                            <p className="paymentTitle tilteTotal">Total</p>
                            <p className="paymentDetailAndAmount totalPrice">$27</p>
                        </div>
                    </div>
                    <div className="securePaymentArea">
                        <img src={securePayment} alt="secure payment icon" />
                        <p>SSL Secure payment</p>
                    </div>
                </div>
            </div >
        </>
    )
}

function CardPay() {
    return (
        <div className="inputContainer">
            <div className="basicInfoInputs">
                <label htmlFor="cardHolderName">Card holder</label>
                <input type="text" id="cardHolderName" placeholder="Name on card" />

            </div>
            <div className="basicInfoInputs">
                <label htmlFor="cardNumber">Card number</label>
                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="split">
                <div className="basicInfoInputs">
                    <label htmlFor="expiryDate">Expiry date</label>
                    <input type="text" id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="basicInfoInputs">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" placeholder="000" />
                </div>
            </div>
            <button className="payBtn">Pay Now</button>
        </div>
    )
}
function PayOptions({ clickOption }) {
    return (
        <>
            <div className="cardOption opt" onClick={(e) => clickOption(e)}>
                <img src={creditCardsIcon} alt="cards" />
            </div>
            <div className="paypalOption opt" onClick={(e) => clickOption(e)}>
                <img src={paypalIcon} alt="paypal" />
            </div>
            <div className="googlePayOotion opt" onClick={(e) => clickOption(e)}>
                <img src={googlePayIcon} alt="google pay" />
            </div>
        </>
    )
}