import {communityImages, writingsImages} from "../components/assets/resources";
import React, {ReactNode} from "react";

export interface Resource {
    id: string,
    img: string;
    description: ReactNode;
    size?: string;
}


export const writings: Resource[] = [
    {
        id: "1",
        img: writingsImages.psychedelicCrisis101,
        description: <p>
            <a
                href='https://f9985136-807f-46c4-b046-2681a3bda3d5.filesusr.com/ugd/d9ca46_b84b54c1e16b48e3879cd96db8ed7d4f.pdf'
                target='_blank'
            >
                Psychedelic
                Crisis 101: A Guide to Supporting Others in a Psychedelic Emergency
            </a>
            <br/>
            is the first in a two-part series by Fireside Project Advisory Committee member and founder of It’s Okay
            Psychedelic Harm Reduction, Adam Rubin.

            This manual gives a brief overview of important concepts to understand if one is acting as a support person
            to someone undergoing distress under the influence of a psychedelic.
        </p>
    },
    {
        id: "2",
        img: writingsImages.psychedelicIntegration,
        description: <p><a
            href='https://f9985136-807f-46c4-b046-2681a3bda3d5.filesusr.com/ugd/d9ca46_a78b67ac3d3448c0bfc8ea436f7e3051.pdf'
            target='_blank'
        >
            Psychedelic Integration: Returning from a Profound Experience
        </a>
            <br/>
            is the second in a two-part series by Fireside
            Project Advisory Committee member and founder of It’s Okay Psychedelic Harm Reduction, Adam Rubin.
            This booklet discusses what might be happening in one's psyche after a psychedelic experience and suggests
            practical methods to process and make the most out of the experience.
        </p>
    },
    {
        id: "3",
        img: writingsImages.theManualOfPsychedelicSupport,
        description: <p><a
            href='https://psychsitter.com/download-manual/'
            target='_blank'
        >
            The Manual of Psychedelic Support
        </a>
            <br/>
            is a comprehensive guide to setting up and running compassionate care
            services for people having difficult drug experiences at music festivals and similar events. The Manual grew
            out of the work of its original creators at KosmiCare, the psychedelic care service at the iconic Boom
            Festival in Portugal.
        </p>
    },
    {
        id: "4",
        img: writingsImages.zendo,
        description: <p>
            The Zendo Project is the author of the 4 Principles of Psychedelic Harm Reduction. They are an organization
            created by MAPS (the Multidisciplinary Association for Psychedelic Studies) which offers trainings,
            education, and support services at large scale music and arts festivals.
            <br/>
            <br/>

            The <a
            href='https://zendoproject.org/wp-content/uploads/2017/06/Zendo-Manual-2017.pdf/'
            target='_blank'
        >
            MAPS Zendo Project’s Training Manual
        </a> describes the four principles of psychedelic harm reduction:
            <br/>
            <ul>
                <li>
                    Create a safe space
                </li>
                <li>
                    Sitting, not guiding
                </li>
                <li>
                    Talk through, not down
                </li>
                <li>
                    Difficult is not the same thing as bad
                </li>
            </ul>
        </p>
    },
    {
        id: "5",
        img: writingsImages.erowid,
        size: 'contain',
        description: <p>
            Erowid is a member-supported organization providing access to reliable, non-judgmental information about
            psychoactive plants, chemicals, and related issues.
            <br/>
            <br/>

            They have a <a
            href='https://www.erowid.org/psychoactives/basics/basics_article2.shtml'
            target='_blank'
        >
            page devoted to integration tips
        </a> and <a href='https://www.erowid.org/psychoactives/faqs/psychedelic_crisis_faq.shtml' target='_blank'>another
            page</a> that answers questions about helping someone through a bad trip, psychic crisis, or spiritual
            crisis
        </p>
    },
]


export const communities: Resource[] = [
    {
        id: "1",
        img: communityImages.blueLight,
        size: 'contain',
        description: <p><a
            href='https://www.bluelight.org/xf/'
            target='_blank'
        >
            Bluelight
        </a>
            <br/>
            is an international, online, harm-reduction community committed to reducing the harms associated
            with drug use. While there is no universal definition of drug-related harm reduction, Bluelight believes
            that through frank and open discussion we are able to deliver accurate information, eliminate misinformation
            and empower individuals to make wiser, more responsible choices.
        </p>
    },
    {
        id: "2",
        img: communityImages.erowid,
        size: 'contain',
        description: <p><a
            href='https://erowid.org/'
            target='_blank'
        >
            Erowid
        </a>
            <br/>
            is a member-supported organization providing access to reliable, non-judgmental information about
            psychoactive plants, chemicals, and related issues.
        </p>
    },
    {
        id: "3",
        img: communityImages.tripsit,
        size: 'contain',
        description: <p><a
            href='https://tripsit.me/'
            target='_blank'
        >
            Tripsit.me’s
        </a>
            <br/>
            mission is to provide open discussion of harm reduction techniques and positive support. Among
            many other resources, Tripsit has an IRC chat team dedicated to 24/7 live support from quick information to
            a friendly guide through difficult experience.
        </p>
    },
    {
        id: "4",
        img: communityImages.danceSafe,
        size: 'contain',
        description: <p><a
            href='https://dancesafe.org/'
            target='_blank'
        >
            DanceSafe
        </a>
            <br/>
            promotes health and safety within the nightlife and electronic music community. DanceSafe has two
            fundamental operating principles: harm reduction and peer-based, popular education. Combining these two
            principles has enabled it to create successful, peer-based educational programs to reduce drug misuse and
            empower young people to make healthy, informed lifestyle choices.
        </p>
    },
    {
        id: "5",
        img: communityImages.maps,
        size: 'contain',
        description: <p><a
            href='https://maps.org/'
            target='_blank'
        >
            The Multidisciplinary Association for Psychedelic Studies (MAPS)
        </a>
            <br/>

            is a non-profit research and educational
            organization that develops medical, legal, and cultural contexts for people to benefit from the careful uses
            of psychedelics and marijuana. MAPS’ maintains a <a href='https://integration.maps.org/'
                                                                target='_blank'>list</a> of individuals and
            organizations in the mental health
            field who help people integrate past psychedelic experiences.
        </p>
    },
    {
        id: "4",
        img: communityImages.psychedelicSupport,
        size: 'contain',
        description: <p><a
            href='https://psychedelic.support/'
            target='_blank'
        >
            Psychedelic.support
        </a>
            <br/>
            maintains a <a href='https://psychedelic.support/community-groups/' target='_blank'>list</a> of community
            groups that offer integration circles and meet-ups related
            to psychedelics, integration, and harm reduction. Psychedelic support has also compiled a <a
                href='https://psychedelic.support/' target='_blank'>list</a> of health
            care professionals across the world who provide integration services.
        </p>
    },
    {
        id: "5",
        img: communityImages.tripsitter,
        size: 'contain',
        description: <p><a
            href='https://www.tripsitters.org/'
            target='_blank'
        >
            Tripsitter
        </a>
            <br/>
            is a psilocybin community and education hub dedicated to supporting journeyers at every step of
            the journey. Empowering everyone to make safe and well-informed decisions with detailed <a
                href='https://www.tripsitters.org/journey' target='_blank'>written guides on</a> preparation,
            integration, microdosing, etc. Maintains a comprehensive <a
                href='https://www.tripsitters.org/directory' target='_blank'>directory
            </a> of individuals and
            organizations involved in the psychedelics space.
        </p>
    },
    {
        id: "6",
        img: communityImages.psilohealth,
        size: 'contain',
        description: <p><a
            href='https://www.psilohealth.co/'
            target='_blank'
        >
            PsiloHealth
        </a>
            <br/>
            is a team of therapists, pharmacists, and healers whose mission is to support the education,
            legislation, and integration of psilocybin for mental health. PsiloHealth will offer free and affordable
            education to support healer inclusivity and psychedelic experience integrity. Join the PsiloHealth Community
            by clicking <a href='https://www.psilohealth.co/' target='_blank'>here</a>.
        </p>
    },
    {
        id: "7",
        img: communityImages.chacruna,
        size: 'contain',
        description: <p><a
            href='https://chacruna.net/'
            target='_blank'
        >
            Chacruna
        </a>
            <br/>
            The Chacruna Institute of Psychedelic Plant Medicines, an organization founded by Brazilian anthropologist
            Dr. Bia Labate, produces high-quality research on plant medicines and psychedelics, and helps propagate
            academic knowledge in more accessible formats. We educate the public and create cultural understanding and
            legitimacy regarding these substances so that they may cease to be stigmatized and outlawed.
            <br/>
            Chacruna also promotes a bridge between the world of plant medicines and the emergent field of psychedelic
            science,
            between “traditional ceremonial use” and clinical and therapeutic settings, bringing the knowledge and
            perspectives of the social sciences to health care professionals and practitioners of psychedelic-assisted
            therapy. Finally, we foster cultural and political reflections on the field of psychedelic science and
            facilitate conversations about controversial topics that have been simmering on the sidelines as
            psychedelics go mainstream.
        </p>
    },
    {
        id: "8",
        img: communityImages.zendo,
        size: 'contain',
        description: <p><a
            href='https://zendoproject.org/'
            target='_blank'
        >
            Zendo Project
        </a>
            <br/>
            is a psychedelic peer support and education program developed by the non-profit
            Multidisciplinary Association for Psychedelic Studies (MAPS), a 501(c)(3) non-profit research and
            educational organization developing medical, legal, and cultural contexts for people to benefit from the
            careful uses of psychedelics and marijuana. Created by MAPS, the Zendo offers trainings, education, and
            support services at large scale music and arts festivals.
        </p>
    },
]


