import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const  sectionRef = useRef(null);
    const Project1Ref = useRef(null);
    const Project2Ref = useRef(null);
    const Project3Ref = useRef(null);


    useGSAP(() =>{
        const projects=[Project1Ref.current , Project2Ref.current , Project3Ref.current];

        projects.forEach((card,index) =>{
            gsap.fromTo(
                card,
                {
                    y: 50, opacity:0
                },
                {
                    y:0, opacity:1, duration:1, delay:0.3*(index + 1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, []);
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* LEFT MAIN PROJECT */}
                    <div className="first-project-wrapper" ref={Project1Ref}>
                        <div className="image-wrapper">
                            <img src="/Showcase/Thumbnail.png" alt="ryde" />
                        </div>

                        <div className="text-content">
                            <h2>E-Store for Latest Fashion to All</h2>

                            <p className="text-white-50 md:text-xl">
                                An E-Store Platform for unlimited fashion to women, men, kids.
                                All kinds of latest fashion in this e-store.
                            </p>

                            {/* BUTTON */}
                            <a
                                href="https://www.behance.net/gallery/250288677/E-Store_for_Clothes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-5 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition duration-300"
                            >
                                Explore Project →
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE PROJECTS */}
                    <div className="project-list-wrapper overflow-hidden">

                        {/* PROJECT 2 */}
                        <div className="project" ref={Project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img
                                    src="/Showcase/Thumbnail-urban%20app.png"
                                    alt="Food App"
                                />
                            </div>

                            <h2>
                                Food Delivery app called Urban food. Get your food on time
                            </h2>

                            <a
                                href="https://www.behance.net/gallery/249968085/Urban-Food"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-sm font-medium text-blue-500 hover:underline"
                            >
                                Explore Project →
                            </a>
                        </div>

                        {/* PROJECT 3 */}
                        <div className="project" ref={Project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img
                                    src="/Showcase/Thumbnail-Bookingo.png"
                                    alt="Booking App"
                                />
                            </div>

                            <h2>
                                Book Your Trip with us Bookingo application simple ride booking
                            </h2>

                            <a
                                href="https://www.behance.net/gallery/249970355/BooKing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-block text-sm font-medium text-blue-500 hover:underline"
                            >
                                Explore Project →
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default ShowcaseSection;
