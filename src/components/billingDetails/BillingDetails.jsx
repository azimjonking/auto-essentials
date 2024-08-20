import './BillingDetails.css'

const BillingDetails = () => {
  return (
    <section className='billing'>
      <form>
        <div className='details-inputs'>
          <h1>Billing details</h1>
          <div className="form-content">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' />
            </div>
          </div>
        </div>
        <div className='payment-way'></div>
      </form>
    </section>
  )
}

export default BillingDetails