import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hook/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);
const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(totalPrice.toFixed(2));
    return (
        <div className="w-full">
            <SectionTitle heading={'Please Process'} subHeading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;