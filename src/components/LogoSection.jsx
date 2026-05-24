import React from "react";
import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name} loading="lazy" />
        </div>
    );
};

const LogoSection = () => {
    // duplicate list for seamless marquee
    const repeatedLogos = [...logoIconsList, ...logoIconsList];

    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge" />
            <div className="gradient-edge" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {repeatedLogos.map((icon, index) => (
                        <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
