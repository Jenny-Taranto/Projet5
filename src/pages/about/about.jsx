import React from "react"
import AboutBanner from "../../components/about-banner/AboutBanner"
import Collapse from "../../components/collapse/Collapse"

function About() {
    return (
        <>
            <main>
                <AboutBanner />
                <div className="collapses-group">
                    <Collapse />
                </div>
            </main>
        </>
    )
}

export default About