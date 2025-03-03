import React from "react";
import { Helmet } from "react-helmet";
import TeamHero from "./TeamHero";
import TeamSection from "./TeamSection";

export default function Team() {
    return (
        <>
            <Helmet>
                <title>Our Team | TEDxUofW</title>
                <meta name="description" content="Meet the dedicated team behind TEDxUofW who work tirelessly to bring inspiring ideas and speakers to the University of Washington." />
                <meta property="og:title" content="Our Team | TEDxUofW" />
                <meta property="og:description" content="Meet the dedicated team behind TEDxUofW who work tirelessly to bring inspiring ideas and speakers to the University of Washington." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tedxuofw.com/team" />
                <link rel="canonical" href="https://tedxuofw.com/team" />
            </Helmet>
            <TeamHero />
            <TeamSection />
        </>  
    )
}