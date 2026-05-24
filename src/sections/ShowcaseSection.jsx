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
                    {/*left*/}
                    <div className="first-project-wrapper" ref={Project1Ref}>
                        <div className="image-wrapper">
                            <img src="/Showcase/Studying%20Made%20Easy%20with%20Online%20Notes.png" alt="ryde"/>
                        </div>
                        <div className="text-content">
                            <h2>Study With Online With Notes Will be Easy For You</h2>
                            <p className="text-white-50 md:text-xl">
                                A Web Platform for Students to Study Online with Notes.
                                Now Students can study with notes in a better way.
                            </p>
                        </div>
                    </div>
                    {/*right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={Project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/Showcase/Gaming%20Fun%20with%20Friends!.png" alt="Library Management Platform"/>
                            </div>
                            <h2>Gaming Center To Play Online Games With you Friend</h2>
                        </div>

                        <div className="project" ref={Project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/Showcase/Cover.png" alt="YC Directory"/>
                            </div>
                            <h2>An Entertaining Show And Movies You can Watch With family And Friend</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection;