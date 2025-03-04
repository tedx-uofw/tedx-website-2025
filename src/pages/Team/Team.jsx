import React from "react";
import { Helmet } from "react-helmet";
import TeamHero from "./TeamHero";
import TeamSection from "./TeamSection";

export default function Team() {
    return (
        <>
            <Helmet>
                <title>Our Team | TEDx UofW | University of Washington TEDx 2025</title>
                <meta name="description" content="Meet the dedicated team behind TEDx UofW (University of Washington TEDx) who work tirelessly to bring inspiring ideas and speakers to the TEDx 2025 event at UW Seattle." />
                <meta property="og:title" content="Our Team | TEDx UofW | University of Washington TEDx 2025" />
                <meta property="og:description" content="Meet the dedicated team behind TEDx UofW (University of Washington TEDx) who work tirelessly to bring inspiring ideas and speakers to the TEDx 2025 event at UW Seattle." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://resonance.tedxatuofw.com/team" />
                <link rel="canonical" href="https://resonance.tedxatuofw.com/team" />
                <meta name="keywords" content="TEDx UofW team, University of Washington TEDx organizers, TEDx 2025 committee, UW TEDx team, TEDx Seattle organizers, TEDx University of Washington staff" />
            </Helmet>
            <TeamHero />
            <TeamSection />
        </>  
    )
}