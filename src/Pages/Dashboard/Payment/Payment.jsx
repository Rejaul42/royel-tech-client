import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOut/CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);
    return (
        <div>
            <SectionTitle subheading="Pay to buy Subscription" heading="Payment"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;