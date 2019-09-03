import React, { Component } from "react";
import Fullpage, {
    FullPageSections,
    FullpageSection
} from "@ap.cx/react-fullpage";

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

class LandingPage extends Component {
    render() {
        return (
            <Fullpage>
                <FullPageSections>
                    <FullpageSection>
                        <SectionOne />
                    </FullpageSection>
                    <FullpageSection>
                        <SectionTwo />
                    </FullpageSection>
                    <FullpageSection>
                        <SectionThree />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        );
    }
}

export default LandingPage;
