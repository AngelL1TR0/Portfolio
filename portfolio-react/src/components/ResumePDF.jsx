import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Link, Image } from '@react-pdf/renderer';
import { portfolioData } from '../data/portfolioData';
import { resumeTranslations } from '../utils/resumeTranslations';

// Using standard PDF fonts (Helvetica) to ensure maximum compatibility and reliability
const styles = StyleSheet.create({
    page: {
        padding: 35,
        backgroundColor: '#ffffff',
        fontFamily: 'Helvetica',
        color: '#1a1a1a',
    },
    header: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#0056b3',
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    headerLeft: {
        width: '70%',
    },
    headerRight: {
        width: '30%',
        textAlign: 'right',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#050a15',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    brandMonogram: {
        width: 25,
        height: 25,
        backgroundColor: '#0056b3',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 2,
    },
    brandText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
    role: {
        fontSize: 10,
        color: '#0056b3',
        fontWeight: 700,
        marginTop: 1,
        letterSpacing: 0.5,
    },
    contactRow: {
        fontSize: 8.2,
        color: '#445566',
        marginBottom: 1,
        textDecoration: 'none',
    },
    mainLayout: {
        flexDirection: 'row',
        gap: 20,
    },
    leftCol: {
        width: '72%',
    },
    vDivider: {
        width: 1,
        backgroundColor: '#f0f0f0',
        height: '100%',
    },
    rightCol: {
        width: '28%',
    },
    section: {
        marginBottom: 18,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderBottomWidth: 0.3,
        borderBottomColor: '#cbd5e0',
        paddingBottom: 2,
    },
    sectionTitle: {
        fontSize: 9.5,
        fontWeight: 700,
        color: '#0056b3',
        textTransform: 'uppercase',
        letterSpacing: 0.8,
    },
    bio: {
        fontSize: 8.2,
        lineHeight: 1.5,
        color: '#4a5568',
        textAlign: 'justify',
        fontStyle: 'italic',
    },
    item: {
        marginBottom: 12,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 1,
    },
    itemTitle: {
        fontSize: 9.5,
        fontWeight: 700,
        color: '#050a15',
        textDecoration: 'none',
    },
    itemPeriod: {
        fontSize: 7.8,
        color: '#718096',
        fontWeight: 700,
    },
    itemSub: {
        fontSize: 8.8,
        color: '#0056b3',
        fontWeight: 700,
        marginBottom: 3,
    },
    itemDesc: {
        fontSize: 8.2,
        lineHeight: 1.5,
        color: '#4a5568',
        textAlign: 'justify',
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 4,
    },
    bullet: {
        width: 8,
        fontSize: 8,
        color: '#0056b3',
    },
    bulletText: {
        flex: 1,
        fontSize: 8.2,
        lineHeight: 1.4,
        color: '#4a5568',
    },
    techStack: {
        marginTop: 4,
        fontSize: 7.3,
        color: '#0056b3',
        fontWeight: 700,
    },
    projectItem: {
        width: '100%',
        marginBottom: 8,
        paddingBottom: 6,
        borderBottomWidth: 0.2,
        borderBottomColor: '#f0f0f0',
    },
    sidebarTitle: {
        fontSize: 9,
        fontWeight: 700,
        color: '#1a1a1a',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    skillCategory: {
        marginBottom: 8,
    },
    skillTitle: {
        fontSize: 7.5,
        color: '#0056b3',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 2,
        letterSpacing: 0.5,
    },
    skillItem: {
        fontSize: 8.2,
        color: '#2d3748',
        lineHeight: 1.3,
    },
    languageItem: {
        marginBottom: 6,
    },
    languageName: {
        fontSize: 8.5,
        fontWeight: 700,
        color: '#1a1a1a',
    },
    languageLevel: {
        fontSize: 8,
        color: '#718096',
    },
    highlight: {
        color: '#0056b3',
        fontWeight: 700,
    },
    qrContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    qrCode: {
        width: 45,
        height: 45,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 6.5,
        color: '#a0aec0',
        borderTopWidth: 0.3,
        borderTopColor: '#e2e8f0',
        paddingTop: 6,
    }
});

const ResumePDF = ({ lang = 'es' }) => {
    const { personalInfo, experience, education, certifications, languages, projects } = portfolioData;
    const t = resumeTranslations[lang];
    const phoneNumber = import.meta.env.VITE_TLPHN || '';
    const email = import.meta.env.VITE_CONTACT_EMAIL || '';
    const githubUrl = import.meta.env.VITE_GITHUB_URL || '';
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || '';

    // Helper to get clean handles from URLs
    const getHandle = (url) => (url && typeof url === 'string') ? url.replace('https://', '').replace('www.', '') : '';

    // Calculate total years of experience automatically [V4.0 logic]
    const calculateExp = () => {
        const start = new Date(2023, 8); // Sep 2023
        const now = new Date();
        const diff = now - start;
        const years = diff / (1000 * 60 * 60 * 24 * 365.25);
        return years.toFixed(1);
    };

    // Helper to highlight specific keywords (CLIENTS)
    const renderHighlightedText = (text) => {
        if (!text) return null;
        const keywords = ['T-SYSTEMS', 'AIRBUS', 'UNIVERSIDAD PONTIFICIA DE COMILLAS'];
        const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
        const parts = String(text).split(regex);

        return parts.map((part, i) => (
            keywords.some(k => k.toLowerCase() === part.toLowerCase()) ?
                <Text key={i} style={styles.highlight}>{part}</Text> :
                <Text key={i}>{part}</Text>
        ));
    };

    // Skill categorization logic [V4.0]
    const skillCategories = [
        { title: 'Frontend', skills: ['React', 'Angular', 'TypeScript'] },
        { title: 'Backend & Core', skills: ['.Net', 'C#', 'Java', 'Python'] },
        { title: 'Cloud & Tools', skills: ['Azure DevOps', 'Clean Code', 'IA'] }
    ];

    return (
        <Document
            title={`CV ${personalInfo.name} - ${t.data.role}`}
            author={personalInfo.name}
            subject={`Curriculum Vitae / Resume - ${personalInfo.role}`}
            keywords={`Developer, React, Node.js, Fullstack, ${personalInfo.skills.join(', ')}`}
        >
            <Page size="A4" style={styles.page}>
                {/* HEADER [V4.0 BRANDING] */}
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <View style={styles.headerTop}>
                            <View style={styles.brandMonogram}>
                                <Text style={styles.brandText}>A</Text>
                            </View>
                            <Text style={styles.name}>{personalInfo.name}</Text>
                        </View>
                        <Text style={styles.role}>{t.data.role} | {calculateExp()}+ {t.labels.yearsExp}</Text>
                    </View>
                    <View style={styles.headerRight}>
                        {phoneNumber && <Link src={`tel:${phoneNumber}`} style={styles.contactRow}>{phoneNumber}</Link>}
                        {email && <Link src={`mailto:${email}`} style={styles.contactRow}>{email}</Link>}
                        <Text style={styles.contactRow}>{personalInfo.location.label}</Text>
                    </View>
                </View>

                {/* MAIN CONTENT AREA */}
                <View style={styles.mainLayout}>
                    {/* LEFT COLUMN: Experience & Projects */}
                    <View style={styles.leftCol}>
                        <View style={styles.section}>
                            <Text style={styles.bio}>
                                {t.data.bio}
                            </Text>
                        </View>

                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>{t.sections.experience}</Text>
                            </View>
                            {experience.slice().reverse().map((exp, i) => {
                                let desc = exp.description;
                                if (lang === 'en') {
                                    const comp = exp.company.toLowerCase();
                                    if (comp.includes('originpath')) desc = t.data.exp_originpath_desc;
                                    if (comp.includes('malthus')) desc = t.data.exp_malthus_desc;
                                    if (comp.includes('sotec')) desc = t.data.exp_sotec_desc;
                                }

                                const period = exp.period.replace('Actualidad', t.labels.actualidad);

                                // Split description into bullets if it's long or contains specific markers
                                const bullets = desc.split(/[.·]\s+/).filter(b => b.trim().length > 0);

                                return (
                                    <View key={i} style={styles.item}>
                                        <View style={styles.itemHeader}>
                                            <Text style={styles.itemTitle}>{exp.company}</Text>
                                            <Text style={styles.itemPeriod}>{period}</Text>
                                        </View>
                                        <Text style={styles.itemSub}>{exp.role}</Text>

                                        <View>
                                            {bullets.map((bullet, idx) => (
                                                <View key={idx} style={styles.bulletRow}>
                                                    <Text style={styles.bullet}>•</Text>
                                                    <Text style={styles.bulletText}>{renderHighlightedText(bullet.trim())}</Text>
                                                </View>
                                            ))}
                                        </View>

                                        <Text style={styles.techStack}>{t.labels.tech}: {(exp.secrets || []).join(' • ')}</Text>
                                    </View>
                                );
                            })}
                        </View>

                        <View style={[styles.section, { marginBottom: 0 }]}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>{t.sections.projects}</Text>
                            </View>
                            {projects.map((proj, i) => {
                                let desc = proj.description;
                                if (lang === 'en') {
                                    if (proj.name.includes('Portfolio')) desc = t.data.proj_portfolio_desc;
                                    if (proj.name.includes('PetFind')) desc = t.data.proj_petfind_desc;
                                    if (proj.name.includes('Terminal')) desc = t.data.proj_terminal_desc;
                                }

                                return (
                                    <View key={i} style={styles.projectItem}>
                                        <Link src={proj.link} style={styles.itemTitle}>{proj.name}</Link>
                                        <Text style={styles.itemDesc}>{desc}</Text>
                                        <Text style={[styles.techStack, { marginTop: 2 }]}>{(proj.tags || []).join(' • ')}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>

                    {/* VERTICAL DIVIDER */}
                    <View style={styles.vDivider} />

                    {/* RIGHT COLUMN: Skills, Education, Langs, Certs */}
                    <View style={styles.rightCol}>
                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>{t.sections.skills}</Text>
                            {skillCategories.map((cat, idx) => (
                                <View key={idx} style={styles.skillCategory}>
                                    <Text style={styles.skillTitle}>{cat.title}</Text>
                                    <Text style={styles.skillItem}>{cat.skills.join(' • ')}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>Soft Skills</Text>
                            {personalInfo.softSkills.map((skill, i) => (
                                <Text key={i} style={[styles.skillItem, { borderLeftColor: '#CBD5E0' }]}>{skill}</Text>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>{t.sections.languages}</Text>
                            {languages.map((l, i) => (
                                <View key={i} style={styles.languageItem}>
                                    <Text style={styles.languageName}>{l.name}</Text>
                                    <Text style={styles.languageLevel}>{l.level}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>{t.sections.education}</Text>
                            {education.map((edu, i) => (
                                <View key={i} style={{ marginBottom: 8 }}>
                                    <Text style={styles.languageName}>{edu.institution}</Text>
                                    <Text style={[styles.languageLevel, { color: '#0056b3', fontWeight: 'bold', marginVertical: 1 }]}>
                                        {lang === 'en' ? t.data.edu_degree : edu.degree}
                                    </Text>
                                    <Text style={styles.languageLevel}>{edu.period}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>{t.sections.certifications}</Text>
                            {certifications.map((cert, i) => (
                                <View key={i} style={{ marginBottom: 6 }}>
                                    <Text style={styles.languageName}>{cert.name}</Text>
                                    <Text style={styles.languageLevel}>{cert.issuer} | {cert.year}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.section}>
                            <Text style={styles.sidebarTitle}>Connect</Text>
                            {githubUrl && <Link src={githubUrl} style={styles.contactRow}>GitHub: {getHandle(githubUrl)}</Link>}
                            {linkedinUrl && <Link src={linkedinUrl} style={styles.contactRow}>LinkedIn: {getHandle(linkedinUrl).includes('linkedin.com') ? getHandle(linkedinUrl).split('linkedin.com')[1] : '/in/angel'}</Link>}
                        </View>

                        {/* QR CODE FOR PORTFOLIO [LIVE FIX V4.0] */}
                        <View style={styles.qrContainer}>
                            <Text style={[styles.sidebarTitle, { fontSize: 7, marginBottom: 5 }]}>Live Portfolio</Text>
                            <Image
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://angell1tr0.github.io/Portfolio/?#projects`}
                                style={styles.qrCode}
                            />
                            <Text style={{ fontSize: 6, color: '#0056b3', textAlign: 'center', marginTop: 3 }}>angell1tr0.github.io/Portfolio</Text>
                        </View>

                        <View style={[styles.section, { marginTop: 'auto' }]}>
                            <Text style={{ fontSize: 6, color: '#CBD5E0', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                REF ID: {getHandle(linkedinUrl).split('/in/')[1]?.toUpperCase() || 'EXTERNAL'}
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.footer}>
                    {t.labels.generated} | {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES')} | Versión 3.5.0
                </Text>
            </Page>
        </Document>
    );
};

export default ResumePDF;
