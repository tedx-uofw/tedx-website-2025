import React from 'react'

import SponsorHero from "./SponsorHero"
import SponsorSection from '../../components/HomePage/SponsorsSection'
import DonationForm from '../../components/DonationForm/DonationForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize Stripe outside of the component render to avoid recreating the Stripe object on every render.
// Replace with your actual publishable key, preferably from environment variables.
const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

export default function Sponsors() {
  return (
    <>
    <SponsorHero/>
    <SponsorSection/>
    {/* Donation Form Section */}

    <div className="flex justify-center w-full mb-100">
      <givebutter-widget className="w-full" id="jNXbyg"></givebutter-widget>
    </div>
    </>
  )
}
