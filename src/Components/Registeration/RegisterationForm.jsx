import React ,{useEffect,useState}from "react";
import { useSelector } from "react-redux";
import './RegisterationForm.css'
const RegisterationForm = () => {
  const { transferData } = useSelector((state) => state.form);
  
  useEffect(() => {
    transferData && console.log('in registeration form',transferData);
  }, [transferData]);

  const [counter1 , setCounter1] = useState(0)

  const incrementCounter1 = () =>{
    if (counter1 < 5) {
      setCounter1(counter1 + 1);
    }  }
  const decrementCounter1 = () =>{
    if (counter1 > 0) {
      setCounter1(counter1 - 1);
    }  }

    const [counter2 , setCounter2] = useState(1)

  const incrementCounter2 = () =>{
    if (counter2 < 5) {
      setCounter2(counter2 + 1);
    }  }
  const decrementCounter2 = () =>{
    if (counter2 > 0) {
      setCounter2(counter2 - 1);
    }  }
    let price = parseInt(transferData.price)
    let premium = 0.2*price
    let premiiumPrize = Math.round(premium + price)

   let subTotal1 = (premiiumPrize + 5) * counter1; 
   let subTotal2 = (price + 5) * counter2; 
   let total = subTotal1 + subTotal2
    
  return (
    <>
      <div className="top2">
        <h3 className="h3-2">Plan an Event</h3>
        <h1 className="event2">
          Event <span>listing</span>
        </h1>
      </div>
      <div className="registeration-form">
        <h1 className="order-summary">
          Order <span>Summary</span>
        </h1>

        <div class="order-summary-table">
          <table class="table">
            <thead>
              <tr>
                <th className="table-head" scope="col">ticket type</th>
                <th className="table-head" scope="col">price</th>
                <th className="table-head" scope="col">fee</th>
                <th className="table-head" scope="col">quantity</th>
                <th className="table-head" scope="col">subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr class="gray-div">
                <th scope="row">Premium Package</th>
                <td>${premiiumPrize}</td>
                <td>$5.00</td>
                <td>
                  <div className="quantity-counter">
                    <span>{counter1}</span>
                    <div className="btn-counter-div">
                      <button className="btn-counter" onClick={incrementCounter1}>+</button>
                      <button className="btn-counter" onClick={decrementCounter1}>-</button>
                    </div>
                  </div>
                </td>
                <td>${subTotal1}</td>
              </tr>
              <tr>
                <th scope="row">Basic Package</th>
                <td>${transferData.price}</td>
                <td>$5.00</td>
                <td>
                <div className="quantity-counter">
                    <span>{counter2}</span>
                    <div className="btn-counter-div">
                      <button className="btn-counter" onClick={incrementCounter2}>+</button>
                      <button className="btn-counter" onClick={decrementCounter2}>-</button>
                    </div>
                  </div>                
                  </td>
                <td>${subTotal2}</td>
              </tr>
              <tr class="tfooter">
                <th colspan="4" class="text-order">
                  order total
                </th>
                <td className="rs-white">${total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RegisterationForm;
