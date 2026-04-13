import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link, Font } from '@react-pdf/renderer';

// Colores del HTML original
const COLORS = {
    blueMain: '#004a99',
    blueLight: '#0073e6',
    textDark: '#333333',
    textGray: '#666666',
    line: '#dddddd',
    white: '#ffffff'
};

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: COLORS.white,
        fontFamily: 'Helvetica',
        color: COLORS.textDark,
        fontSize: 11,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderBottom: 2,
        borderBottomColor: COLORS.blueMain,
        paddingBottom: 10,
        marginBottom: 20,
    },
    headerLeft: {
        flex: 1,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
    },
    role: {
        color: COLORS.blueLight,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
    },
    headerRight: {
        textAlign: 'right',
        fontSize: 9,
        color: COLORS.textGray,
        lineHeight: 1.3,
    },
    summary: {
        fontStyle: 'italic',
        color: COLORS.textGray,
        marginBottom: 10,
        fontSize: 10.5,
        lineHeight: 1.4,
    },
    body: {
        flexDirection: 'row',
        gap: 40,
    },
    mainCol: {
        flex: 1.8,
    },
    sidebar: {
        flex: 1,
    },
    sectionTitle: {
        color: COLORS.blueMain,
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottom: 1,
        borderBottomColor: COLORS.line,
        paddingBottom: 5,
        marginTop: 20,
        marginBottom: 12,
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 11,
        color: COLORS.textDark,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    itemPeriod: {
        fontSize: 9,
        color: COLORS.textGray,
        fontWeight: 'normal',
    },
    itemRole: {
        color: COLORS.blueLight,
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 4,
    },
    bulletRow: {
        flexDirection: 'row',
        marginBottom: 4,
        paddingLeft: 10,
    },
    bullet: {
        width: 10,
        fontSize: 10,
    },
    bulletText: {
        flex: 1,
        fontSize: 10,
        lineHeight: 1.3,
    },
    techTags: {
        fontSize: 9,
        color: COLORS.blueMain,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 15,
    },
    sidebarSubTitle: {
        fontSize: 10,
        color: COLORS.blueMain,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    sidebarContent: {
        fontSize: 9.5,
        marginBottom: 15,
        lineHeight: 1.4,
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#cccccc',
    }
});

const ResumeDocument = ({ personalInfo, experience, projects, education, soft_skills, languages, t, lang, email, phone }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Cabecera */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.name}>{personalInfo.name.toUpperCase()}</Text>
                    <Text style={styles.role}>{t.data.role} | 3+ {t.labels.yearsExp}</Text>
                </View>
                <View style={styles.headerRight}>
                    <Text>{phone}</Text>
                    <Text>{email}</Text>
                    <Text>{personalInfo.location.label}</Text>
                </View>
            </View>

            {/* Sumario */}
            <Text style={styles.summary}>{t.data.bio}</Text>

            <View style={styles.body}>
                {/* Columna Principal */}
                <View style={styles.mainCol}>
                    <Text style={styles.sectionTitle}>{t.sections.experience}</Text>
                    {experience.slice().reverse().map((exp, i) => (
                        <View key={i}>
                            <View style={styles.itemHeader}>
                                <Text style={styles.itemTitle}>{exp.company}</Text>
                                <Text style={styles.itemPeriod}>{exp.period.replace('Actualidad', t.labels.actualidad)}</Text>
                            </View>
                            <Text style={styles.itemRole}>{exp.role}</Text>
                            {exp.description.split(/[.·]\s+/).map((bullet, idx) => (
                                bullet.trim() && (
                                    <View key={idx} style={styles.bulletRow}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.bulletText}>{bullet.trim()}</Text>
                                    </View>
                                )
                            ))}
                            <Text style={styles.techTags}>
                                Tecnologías: {exp.secrets ? exp.secrets.join(' • ') : ''}
                            </Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitle}>{t.sections.projects}</Text>
                    {projects.map((p, i) => (
                        <View key={i} style={{ marginBottom: 15 }}>
                            <Text style={styles.itemTitle}>{p.name}</Text>
                            <Text style={[styles.bulletText, { marginTop: 2 }]}>{p.description}</Text>
                            <Text style={styles.techTags}>{(p.tags || []).join(' • ')}</Text>
                        </View>
                    ))}
                </View>

                {/* Sidebar */}
                <View style={styles.sidebar}>
                    <Text style={styles.sectionTitle}>{t.sections.skills}</Text>
                    <Text style={styles.sidebarSubTitle}>Frontend Stack</Text>
                    <Text style={styles.sidebarContent}>React • Angular • TypeScript • RxJS</Text>
                    
                    <Text style={styles.sidebarSubTitle}>Backend & Data</Text>
                    <Text style={styles.sidebarContent}>.NET Core • C# • Web API • SQL Server • PostgreSQL</Text>

                    <Text style={styles.sidebarSubTitle}>Cloud & DevOps</Text>
                    <Text style={styles.sidebarContent}>Azure DevOps • TFS • Docker • Git • Agile (Scrum) • IA</Text>

                    <Text style={styles.sectionTitle}>{t.sections.soft_skills}</Text>
                    <Text style={styles.sidebarContent}>
                        {t.data.soft_skills.join('\n')}
                    </Text>

                    <Text style={styles.sectionTitle}>{t.sections.languages}</Text>
                    {languages.map((l, i) => (
                        <View key={i} style={styles.sidebarContent}>
                            <Text style={styles.bold}>{l.name}</Text>
                            <Text>{l.level}</Text>
                        </View>
                    ))}

                    <Text style={styles.sectionTitle}>{t.sections.education}</Text>
                    {education.map((edu, i) => (
                        <View key={i} style={styles.sidebarContent}>
                            <Text style={styles.bold}>{edu.institution}</Text>
                            <Text style={{ color: COLORS.blueLight }}>{lang === 'es' ? edu.degree : t.data.edu_degree}</Text>
                            <Text style={{ color: COLORS.textGray }}>{edu.period}</Text>
                        </View>
                    ))}
                </View>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                {t.labels.generated} | 13/4/2026 | Versión 4.9.0
            </Text>
        </Page>
    </Document>
);

export default ResumeDocument;
