import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { buttonTypes } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from "./payment-from.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ amount: 10_000_000 })
        }).then(res => res.json());

        const { paymentIntent: { client_secret } } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Arian'
                }
            }
        });

        if (paymentResult.error) {
            alert(paymentResult.error.message);
        }
        else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Payment successful");
            }
        }
    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit card payment : </h2>
                <CardElement />
                <Button buttonType={buttonTypes.inverted}>Pay now</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;