import React from 'react'

import SponsorHero from "./SponsorHero"
import SponsorSection from './SponsorSection'
import DonationForm from '../../components/DonationForm/DonationForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('STRIPE_PUBLISHABLE_KEY_not_used');

export default function Sponsors() {
  return (
    <>
    <SponsorHero/>
    <SponsorSection/>
    {/* Donation Form Section */}
    </>
  )
}
