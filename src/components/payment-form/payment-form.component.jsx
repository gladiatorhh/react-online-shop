import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { buttonTypes } from "../button/button.component";
import { getUserCartTotalPriceSelector } from "../../store/cart/cart.selectors";
import { getCurrentUserSelector } from "../../store/user/user.selectors";
import { clearCart } from "../../store/cart/cart.actions";

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-from.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(getUserCartTotalPriceSelector);
    const currentUser = useSelector(getCurrentUserSelector);
    const [isProcessingPayment, setProcessingPayment] = useState(false);
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const navigateToSuccessPage = () => {
        navigator("/transaction/success");
    };

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessingPayment(true);

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : "guest"
                }
            }
        });


        setProcessingPayment(false);

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        }
        else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                dispatch(clearCart());
                navigateToSuccessPage();
            }
        }
    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment : </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={buttonTypes.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;