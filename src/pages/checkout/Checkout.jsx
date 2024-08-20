import "./Checkout.css";
import Services from '../../components/services/Services'
import BillingDetails from '../../components/billingDetails/BillingDetails';

const Checkout = () => {
  return (
    <>
      <BillingDetails />
      <Services />
    </>
  );
};

export default Checkout;
