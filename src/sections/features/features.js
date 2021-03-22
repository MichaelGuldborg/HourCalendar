import {Box, Container, Heading, Image, Link as A, Text} from 'theme-ui';
import SectionHeader from 'components/layout/SectionHeader';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/feature.png';
import emoji from 'assets/icons/emoji-2.png';
import NextLink from "next/link";
import {HiOutlineChevronRight} from "react-icons/hi";

const data = [
    {
        title: 'Organize your project content',
        contents: (
            <div>
                Get your blood tests delivered at let collect sample from the victory of
                the managements that supplies best design system guidelines ever.
            </div>
        ),
    },
    {
        title: 'Collaborate your documents easily',
        contents: (
            <div>
                Get your blood tests delivered at let collect sample from the victory of
                the managements that supplies best design system guidelines ever.
            </div>
        ),
    },
    {
        title: `Build your team's knowledge base`,
        contents: (
            <div>
                Get your blood tests delivered at let collect sample from the victory of
                the managements that supplies best design system guidelines ever.
            </div>
        ),
    },
];

const Features = () => {
    return (
        <Box as="section" variant="section.excitingFeatures">
            <Container>
                <Box sx={styles.contentWrapper}>
                    <Box sx={styles.illustration}>
                        <Image src={feature} alt="feature"/>
                    </Box>
                    <Box sx={styles.rightContent}>
                        <SectionHeader
                            emoji={emoji}
                            sx={styles.heading}
                            title="Meet our exciting features that make you wow"
                            description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
                        />
                        <Box sx={styles.accordionGroup}>
                            <Accordion items={data}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

const Feature = ({data, ...props}) => {
    return (
        <Box sx={styles.feature} {...props}>
            <Box as="figure">
                <Image src={data?.icon} alt={data?.title}/>
            </Box>
            <Box>
                <Heading as="h3">{data?.title}</Heading>
                <Text as="p">{data?.description}</Text>
                {data?.path && <NextLink href={path}>
                    <A sx={styles.learnMore} {...rest}>
                        {label ?? 'Learn More'} <HiOutlineChevronRight/>
                    </A>
                </NextLink>}
            </Box>
        </Box>
    );
};


export default Features;

const styles = {
    contentWrapper: {
        // gap: [0, 0, 0, 0, 10, 100],
        display: ['block', 'block', 'grid', 'flex', 'grid'],
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        flexDirection: ['column-reverse'],
    },
    illustration: {
        display: ['none', 'none', 'block'],
    },
    heading: {
        maxWidth: [295, 295, 495, 495, 410, 500],
        textAlign: ['center', null, null, null, 'left'],
        mb: [30],
        ml: ['auto', null, null, null, 0],
        h2: {
            fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
            lineHeight: [1.33, 1.33, 1.26],
            letterSpacing: '-1px',
        },
        img: {
            maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
            top: ['4px', '8px'],
        },
    },
    accordionGroup: {
        maxWidth: ['none', null, null, 600, 'none'],
        '.accordion-item': {
            backgroundColor: '#F6F8FB',
            borderRadius: 10,
            p: [
                '20px 30px',
                '20px 30px',
                '30px 45px',
                '20px 25px 20px',
                '30px 45px',
                '20px 35px',
            ],
            '&.is-open': {
                backgroundColor: '#fff',
                boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
            },
        },
    },
    learnMore: {
        color: 'link',
        cursor: 'pointer',
        fontWeight: 500,
        display: 'inline-flex',
        alignItems: 'center',
        svg: {
            transition: 'margin-left 0.3s ease-in-out 0s',
            ml: '3px',
        },
        ':hover': {
            svg: {
                ml: '5px',
            },
        },
    },
    feature: {
        display: ['flex'],
        figure: {
            minWidth: [70],
            mr: ['30px'],
        },
        h3: {
            fontSize: '18px',
            lineHeight: 1.28,
            color: 'heading',
            marginBottom: '20px',
        },
        p: {
            fontSize: 16,
            lineHeight: 1.88,
            color: 'text',
        },
        a: {
            mt: [3],
        },
    },
};
