import "./BillingDetails.css";

const BillingDetails = () => {
  return (
    <section className="billing">
      <form>
        <div className="details-inputs">
          <h1>Billing details</h1>

          <div className="form-content">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name (Optional)</label>
            <input type="text" id="company" />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country / Region</label>
            <input type="text" id="country" placeholder='Sri Lanka' />
          </div>

          <div className="form-group">
            <label htmlFor="address">Street address</label>
            <input type="text" id="address" />
          </div>

          <div className="form-group">
            <label htmlFor="city">Town / City</label>
            <input type="text" id="city" />
          </div>

          <div className="form-group">
            <label htmlFor="province">Province</label>
            <input type="text" id="province" placeholder='Western Province' />
          </div>

          <div className="form-group">
            <label htmlFor="zipcode">ZIP code</label>
            <input type="text" id="zipcode" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
          </div>

          <textarea placeholder='Additional information'></textarea>

        </div>

        <div className="payment-way">

          <ul>
            <li className='product'>
              <span>Product</span>
              <span>Subtotal</span>
            </li>
            <li className='item'>
              <span>MIRAGE MR-AT172 285/65 x 1</span>
              <span>Rs. 50,000.00</span>
            </li>
            <li className='subtotal'>
              <span>Subtotal</span>
              <span>Rs. 50,000.00</span>
            </li>
            <li className='total'>
              <span>Total</span>
              <span>Rs. 50,000.00</span>
            </li>
          </ul>

          <div className="form-group">
            <label>
              <input type="radio" name='paymentway' />
              <span></span>
              <p>Direct Bank Transfer</p>
            </label>

            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          </div>

          <div className="form-group">
            <label>
              <input type="radio" name='paymentway' />
              <span></span>
              <p>Cash On Delivery</p>
            </label>
          </div>

          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

          <button>Place order</button>
        </div>
        
      </form>
    </section>
  );
};

export default BillingDetails;
