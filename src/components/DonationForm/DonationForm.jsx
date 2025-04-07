import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const DonationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('25'); // Default amount
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        color: "#FDFCFD", // Text color
        fontFamily: 'Inter, sans-serif', // Match your site's font
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4' // Placeholder color
        }
      },
      invalid: {
        color: '#fa755a', // Error color
        iconColor: '#fa755a'
      }
    },
    hidePostalCode: true // Optional: depending on your needs
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      setError("Stripe has not loaded yet. Please wait a moment and try again.");
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // TODO: Replace with actual backend call to create PaymentIntent
    // For now, we'll simulate a successful payment locally
    console.log("Simulating payment intent creation...");
    // const { clientSecret } = await fetch('/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: parseInt(amount) * 100, currency: 'usd' }), // Amount in cents
    // }).then(res => res.json());

    // --- Placeholder for client secret ---
    const clientSecret = "pi_123_secret_456"; // Replace with actual client secret from your backend
    // --- End Placeholder ---

    if (!clientSecret) {
        setError("Failed to initialize payment. Please contact support.");
        setProcessing(false);
        return;
    }


    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: name,
          email: email,
        },
      },
    });

    if (stripeError) {
      setError(`Payment failed: ${stripeError.message}`);
      setProcessing(false);
    } else {
      console.log("Payment successful:", paymentIntent);
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      // Optionally clear form or redirect
      // setName('');
      // setEmail('');
      // setAmount('25');
      // elements.getElement(CardElement).clear();
      // setTimeout(() => setIsOpen(false), 3000); // Close after success
    }
  };

  return (
    <div className="w-full bg-[#1a1a1a] rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-[#FDFCFD] font-medium text-lg sm:text-xl mb-4 focus:outline-none"
      >
        Support Our Event
        <span>{isOpen ? '−' : '+'}</span>
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Donation Amount */}
          <div>
            <label htmlFor="donation-amount" className="block text-sm font-medium text-[#aab7c4] mb-1">
              Donation Amount (USD)
            </label>
            <select
              id="donation-amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 bg-[#2a2a2a] border border-[#444] rounded-md text-[#FDFCFD] focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="25">$25</option>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="250">$250</option>
              {/* Add a custom amount option if needed */}
            </select>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="donor-name" className="block text-sm font-medium text-[#aab7c4] mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="donor-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-[#2a2a2a] border border-[#444] rounded-md text-[#FDFCFD] focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Jane Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="donor-email" className="block text-sm font-medium text-[#aab7c4] mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="donor-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#2a2a2a] border border-[#444] rounded-md text-[#FDFCFD] focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="jane.doe@example.com"
              required
            />
          </div>

          {/* Stripe Card Element */}
          <div>
            <label className="block text-sm font-medium text-[#aab7c4] mb-1">
              Card Details
            </label>
            <div className="p-3 bg-[#2a2a2a] border border-[#444] rounded-md">
                 <CardElement options={cardElementOptions} />
            </div>

          </div>

          {/* Error Message */}
          {error && <div className="text-[#fa755a] text-sm">{error}</div>}

          {/* Success Message */}
          {succeeded && <div className="text-green-500 text-sm">Thank you for your generous donation!</div>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={processing || succeeded || !stripe || !elements}
            className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
              processing || succeeded ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200`}
          >
            {processing ? 'Processing...' : succeeded ? 'Donation Complete!' : `Donate $${amount}`}
          </button>
        </form>
      )}
    </div>
  );
};

// Need to wrap DonationForm with Elements provider from Stripe
// We'll do this where it's used or at a higher level (App/main.jsx)
export default DonationForm; // Exporting without Elements wrapper here 