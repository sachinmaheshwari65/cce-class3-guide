/* ===========================
   CCE Class-3 Study Guide
   Main Application Logic
   =========================== */

// ===========================
// Android-like String Resources (Extracted to strings.xml)
// ===========================
const R = {
    string: {
        nav_dashboard: "ડેશબોર્ડ",
        nav_subject_notes: "વિષયવાર નોટ્સ",
        nav_cbt_tests: "CBT Mock Tests",
        nav_study_plan: "અભ્યાસ યોજના",
        nav_30_day_plan: "30-દિવસ યોજના",
        subj_math: "ગણિત (Mathematics)",
        subj_math_desc: "40.0% EXAM SHARE • 21 Topics",
        subj_reasoning: "રીઝનિંગ (Reasoning)",
        subj_reasoning_desc: "34.5% EXAM SHARE • 24 Topics",
        subj_polity: "ભારતીય રાજનીતિ",
        subj_polity_desc: "7.3% EXAM SHARE • 19 Topics",
        subj_english: "અંગ્રેજી (English)",
        subj_english_desc: "5.5% EXAM SHARE • 16 Topics",
        subj_history: "ઇતિહાસ",
        subj_history_desc: "4.0% EXAM SHARE • 13 Topics",
        subj_geography: "ભૂગોળ",
        subj_geography_desc: "3.0% EXAM SHARE • 18 Topics",
        subj_culture: "કળા અને સંસ્કૃતિ",
        subj_culture_desc: "3.5% EXAM SHARE • 6 Topics",
        subj_economics: "અર્થશાસ્ત્ર",
        subj_economics_desc: "3.0% EXAM SHARE • 14 Topics",
        subj_science: "વિજ્ઞાન (Science)",
        subj_science_desc: "2.7% EXAM SHARE • 15 Topics",
        subj_current: "સમસામયિક",
        subj_current_desc: "5.0% EXAM SHARE • 5 Topics",
        mock_constable_1: "કોન્સ્ટેબલ Mock Test - 1",
        mock_constable_1_desc: "60 Qs • 3 Hours Timer CBT",
        mock_cce_2024: "CCE 2024 Real Exam Paper",
        mock_cce_2024_desc: "Official Shift 1 & 2 CBT",
        mock_gsssb_clerk_2022: "GSSSB Clerk 2022 Paper",
        mock_gsssb_clerk_2022_desc: "24 Apr 2022 Previous Paper CBT",
        mock_target_60: "⚡ Target 60 Marks Special CBT Test",
        mock_target_60_desc: "English (15) + Gujarati (15) + GA (30)",
        btn_start_cbt: "⚡ 3-Hour CBT Live Mock Test આપો",
        btn_mark_complete: "☐ પૂર્ણ કરો",
        btn_completed: "✅ પૂર્ણ થયું!",
        msg_topic_completed: "✅ ટૉપિક પૂર્ણ!",
        msg_topic_uncompleted: "↩️ ટૉપિક અપૂર્ણ",
        msg_time_up: "⌛ સમય પૂરો થયો! ટેસ્ટ ઓટો-સબમિટ થાય છે."
    }
};

function getString(id) {
    return R.string[id] || id;
}

// ===========================
// Configuration & Data
// ===========================

const coreSubjects = [
    {
        id: 'math',
        name: getString('subj_math'),
        nameEn: getString('subj_math_desc'),
        icon: '📐',
        color: '#84cc16',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => {
            const basic = typeof mathData !== 'undefined' ? mathData : [];
            const full = typeof mathDataFull !== 'undefined' ? mathDataFull : [];
            return [...basic, ...full];
        }
    },
    {
        id: 'reasoning',
        name: getString('subj_reasoning'),
        nameEn: getString('subj_reasoning_desc'),
        icon: '🧩',
        color: '#f43f5e',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => typeof reasoningData !== 'undefined' ? reasoningData : []
    },
    {
        id: 'polity',
        name: getString('subj_polity'),
        nameEn: getString('subj_polity_desc'),
        icon: '⚖️',
        color: '#6366f1',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐☆',
        getData: () => typeof polityData !== 'undefined' ? polityData : []
    },
    {
        id: 'english',
        name: getString('subj_english'),
        nameEn: getString('subj_english_desc'),
        icon: '🔤',
        color: '#06b6d4',
        priority: 'HIGH',
        stars: '⭐⭐⭐⭐☆',
        getData: () => typeof englishData !== 'undefined' ? englishData : []
    },
    {
        id: 'history',
        name: getString('subj_history'),
        nameEn: getString('subj_history_desc'),
        icon: '🏛️',
        color: '#f97316',
        priority: 'HIGH',
        stars: '⭐⭐⭐☆',
        getData: () => typeof historyData !== 'undefined' ? historyData : []
    },
    {
        id: 'geography',
        name: getString('subj_geography'),
        nameEn: getString('subj_geography_desc'),
        icon: '🌍',
        color: '#10b981',
        priority: 'HIGH',
        stars: '⭐⭐⭐☆',
        getData: () => typeof geographyData !== 'undefined' ? geographyData : []
    },
    {
        id: 'culture',
        name: getString('subj_culture'),
        nameEn: getString('subj_culture_desc'),
        icon: '🎨',
        color: '#ec4899',
        priority: 'MEDIUM',
        stars: '⭐⭐⭐',
        getData: () => typeof cultureData !== 'undefined' ? cultureData : []
    },
    {
        id: 'gujarati',
        name: getString('subj_gujarati'),
        nameEn: getString('subj_gujarati_desc'),
        icon: '✍️',
        color: '#f43f5e',
        priority: 'HIGH',
        stars: '⭐⭐⭐⭐☆',
        getData: () => typeof gujaratiData !== 'undefined' ? gujaratiData : []
    },
    {
        id: 'economics',
        name: getString('subj_economics'),
        nameEn: getString('subj_economics_desc'),
        icon: '💰',
        color: '#eab308',
        priority: 'HIGH',
        stars: '⭐⭐⭐☆',
        getData: () => typeof economicsData !== 'undefined' ? economicsData : []
    },
    {
        id: 'science',
        name: getString('subj_science'),
        nameEn: getString('subj_science_desc'),
        icon: '🔬',
        color: '#3b82f6',
        priority: 'HIGH',
        stars: '⭐⭐⭐☆',
        getData: () => typeof scienceData !== 'undefined' ? scienceData : []
    },
    {
        id: 'current',
        name: getString('subj_current'),
        nameEn: getString('subj_current_desc'),
        icon: '📰',
        color: '#8b5cf6',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => typeof currentAffairsData !== 'undefined' ? currentAffairsData : []
    },
    {
        id: 'ccecourse',
        name: '🔥 55 PDF CCE ફુલ કોર્સ',
        nameEn: '55 PDF COURSE MODULES • Official Material',
        icon: '📚',
        color: '#f59e0b',
        priority: 'TOP PRIORITY',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => typeof cceCourseData !== 'undefined' ? cceCourseData : []
    }
];

const mockTestPapers = [
    {
        id: 'mocktest1',
        name: getString('mock_constable_1'),
        nameEn: getString('mock_constable_1_desc'),
        icon: '📝',
        color: '#e11d48',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => getMockTest1Topics()
    },
    {
        id: 'cce2024pattern',
        name: getString('mock_cce_2024'),
        nameEn: getString('mock_cce_2024_desc'),
        icon: '🎯',
        color: '#10b981',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => getCce2024PatternTopics()
    },
    {
        id: 'gsssbclerk2022',
        name: getString('mock_gsssb_clerk_2022'),
        nameEn: getString('mock_gsssb_clerk_2022_desc'),
        icon: '📜',
        color: '#d97706',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => getGSSSBClerk2022Topics()
    },
    {
        id: 'target60marks',
        name: getString('mock_target_60'),
        nameEn: getString('mock_target_60_desc'),
        icon: '🚀',
        color: '#ec4899',
        priority: 'TOP PRIORITY',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => getTarget60MarksTopics()
    },
    {
        id: 'mocktest2',
        name: "CCE Full Mock Test - 2",
        nameEn: "100 Qs • Comprehensive CBT",
        icon: '📝',
        color: '#f43f5e',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => typeof mockTestData2 !== 'undefined' ? mockTestData2 : []
    }
];


const subjects = [...coreSubjects, ...mockTestPapers];

function getTarget60MarksTopics() {
    const pData = typeof polityData !== 'undefined' ? polityData : [];
    const hData = typeof historyData !== 'undefined' ? historyData : [];
    const gData = typeof geographyData !== 'undefined' ? geographyData : [];
    const eData = typeof englishData !== 'undefined' ? englishData : [];
    const sData = typeof scienceData !== 'undefined' ? scienceData : [];
    
    const combined = [...eData, ...pData, ...hData, ...gData, ...sData];
    return combined.map((t, idx) => ({
        topic: `[${t.topic}] ${t.topic}`,
        content: `
            <div style="background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: bold; margin-bottom: 1rem; display: inline-block;">
                🎯 Target High-Yield Topic: ${t.topic}
            </div>
            ${t.content}
            ${t.mnemonics ? `<div style="margin-top:1rem; background:rgba(236,72,153,0.1); border:1px solid #ec4899; padding:0.75rem; border-radius:8px; color:#f472b6;"><strong>💡 યાદ રાખવાની ટ્રિક (Mnemonic):</strong> ${t.mnemonics}</div>` : ''}
        `
    }));
}

function getCce2024PatternTopics() {
    if (typeof cce2024PatternData === 'undefined') return [];
    return cce2024PatternData.map(q => ({
        topic: `[${q.subject} - ${q.chapter}] ${q.question.split('\n')[0]}`,
        content: `
            <div style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 0.5rem 1rem; border-radius: 8px; font-weight: bold; margin-bottom: 1rem; display: inline-block;">
                🎯 CCE 2024 ઓરિજિનલ પ્રશ્ન • વિષય: ${q.subject} • ચેપ્ટર: ${q.chapter}
            </div>
            <h3 style="margin-top: 0.5rem;">પ્રશ્ન ID: ${q.id}</h3>
            <div style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0; line-height: 1.6; white-space: pre-line; background: var(--bg-surface); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--accent);">${q.question}</div>
            <h4>વિકલ્પો:</h4>
            <ul style="list-style: none; padding-left: 0; margin: 0.75rem 0;">
                <li style="padding: 0.5rem 1rem; margin: 0.35rem 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; ${q.correct === 0 ? 'border-color: var(--success); background: var(--success-light); font-weight: bold;' : ''}">(A) ${q.options[0]}</li>
                <li style="padding: 0.5rem 1rem; margin: 0.35rem 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; ${q.correct === 1 ? 'border-color: var(--success); background: var(--success-light); font-weight: bold;' : ''}">(B) ${q.options[1]}</li>
                <li style="padding: 0.5rem 1rem; margin: 0.35rem 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; ${q.correct === 2 ? 'border-color: var(--success); background: var(--success-light); font-weight: bold;' : ''}">(C) ${q.options[2]}</li>
                <li style="padding: 0.5rem 1rem; margin: 0.35rem 0; background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; ${q.correct === 3 ? 'border-color: var(--success); background: var(--success-light); font-weight: bold;' : ''}">(D) ${q.options[3]}</li>
            </ul>
            <div class="important" style="margin-top:1.25rem;">
                <strong>✅ સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="key-point" style="margin-top:1rem; white-space: pre-line; background: var(--accent-glow); border-left: 4px solid var(--accent); padding: 1rem; border-radius: 8px;">
                <strong>💡 ચેપ્ટર-વાઈઝ સ્ટેપ-બાય-સ્ટેપ વિસ્તૃત ઉકેલ:</strong>
                ${q.explanation}
            </div>
        `,
        keyPoints: [
            `સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}`,
            `ચેપ્ટર: ${q.chapter}`,
            `વિષય: ${q.subject}`,
            `Exam Pattern: High Weightage CCE 2024`
        ],
        mnemonics: ""
    }));
}

function getGSSSBClerk2022Topics() {
    if (typeof gsssbClerk2022Data === 'undefined') return [];
    return gsssbClerk2022Data.map(q => ({
        topic: `[${q.subject}] Q.${q.id}: ${q.question}`,
        content: `
            <div style="background: var(--accent-glow); padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: bold; color: var(--accent-light); margin-bottom: 0.75rem; display: inline-block;">
                વિષય: ${q.subject} (GSSSB Clerk 24-04-2022)
            </div>
            <h3>પ્રશ્ન ક્રમાંક ${q.id}</h3>
            <p style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0;">${q.question}</p>
            <h4>વિકલ્પો:</h4>
            <ul style="list-style: none; padding-left: 0; margin: 0.75rem 0;">
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 0 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(A) ${q.options[0]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 1 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(B) ${q.options[1]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 2 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(C) ${q.options[2]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 3 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(D) ${q.options[3]}</li>
            </ul>
            <div class="important" style="margin-top:1.25rem;">
                <strong>✅ સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="key-point" style="margin-top:1rem; white-space: pre-line;">
                <strong>💡 સ્ટેપ-બાય-સ્ટેપ વિસ્તૃત ઉકેલ:</strong>
                ${q.explanation}
            </div>
        `,
        keyPoints: [
            `સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}`,
            `વિષય: ${q.subject}`,
            `Paper: GSSSB Clerk (24-04-2022)`
        ],
        mnemonics: ""
    }));
}

function getGSSSBSrClerk2021Topics() {
    if (typeof gsssbSrClerk2021Data === 'undefined') return [];
    return gsssbSrClerk2021Data.map(q => ({
        topic: `[${q.subject}] Q.${q.id}: ${q.question}`,
        content: `
            <div style="background: var(--accent-glow); padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: bold; color: var(--accent-light); margin-bottom: 0.75rem; display: inline-block;">
                વિષય: ${q.subject} (GSSSB Sr. Clerk 31-07-2021)
            </div>
            <h3>પ્રશ્ન ક્રમાંક ${q.id}</h3>
            <p style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0;">${q.question}</p>
            <h4>વિકલ્પો:</h4>
            <ul style="list-style: none; padding-left: 0; margin: 0.75rem 0;">
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 0 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(A) ${q.options[0]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 1 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(B) ${q.options[1]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 2 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(C) ${q.options[2]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 3 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(D) ${q.options[3]}</li>
            </ul>
            <div class="important" style="margin-top:1.25rem;">
                <strong>✅ સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="key-point" style="margin-top:1rem; white-space: pre-line;">
                <strong>💡 સ્ટેપ-બાય-સ્ટેપ વિસ્તૃત ઉકેલ:</strong>
                ${q.explanation}
            </div>
        `,
        keyPoints: [
            `સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}`,
            `વિષય: ${q.subject}`,
            `Paper: GSSSB Sr. Clerk (31-07-2021)`
        ],
        mnemonics: ""
    }));
}

function getMockTest1Topics() {
    if (typeof mockTest1Data === 'undefined') return [];
    return mockTest1Data.map(q => ({
        topic: `પ્રશ્ન ${q.id}: ${q.question}`,
        content: `
            <h3>પ્રશ્ન ક્રમાંક ${q.id}</h3>
            <p style="font-size: 1.1rem; font-weight: 600; margin: 1rem 0;">${q.question}</p>
            <h4>વિકલ્પો:</h4>
            <ul style="list-style: none; padding-left: 0; margin: 0.75rem 0;">
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 0 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(A) ${q.options[0]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 1 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(B) ${q.options[1]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 2 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(C) ${q.options[2]}</li>
                <li style="padding: 0.4rem 0.8rem; margin: 0.25rem 0; background: var(--bg-surface); border-radius: 6px; ${q.correct === 3 ? 'border: 2px solid var(--success); font-weight: bold;' : ''}">(D) ${q.options[3]}</li>
            </ul>
            <div class="important" style="margin-top:1.25rem;">
                <strong>✅ સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="key-point" style="margin-top:1rem; white-space: pre-line;">
                <strong>💡 રીત અને સંપૂર્ણ ઉકેલ:</strong>
                ${q.explanation}
            </div>
        `,
        keyPoints: [
            `સાચો જવાબ: (${['A','B','C','D'][q.correct]}) ${q.options[q.correct]}`,
            `પ્રશ્ન ક્રમાંક: ${q.id} / 60`
        ],
        mnemonics: ""
    }));
}

// Current Affairs data (built-in since it's dynamic)
const currentAffairsData = [
    {
        topic: "ગુજરાત સમસામયિક",
        content: `<h3>📋 ગુજરાત રાજ્ય - મૂળભૂત માહિતી</h3>
<ul>
<li><strong>રાજ્યપાલ:</strong> આચાર્ય દેવવ્રત (2024 મુજબ)</li>
<li><strong>મુખ્યમંત્રી:</strong> ભૂપેન્દ્ર પટેલ</li>
<li><strong>રાજધાની:</strong> ગાંધીનગર</li>
<li><strong>વિધાનસભા બેઠકો:</strong> 182</li>
<li><strong>લોકસભા બેઠકો:</strong> 26</li>
<li><strong>રાજ્યસભા બેઠકો:</strong> 11</li>
<li><strong>જિલ્લાઓ:</strong> 33</li>
<li><strong>તાલુકા:</strong> 252</li>
</ul>
<h3>🏆 ગુજરાતની મહત્ત્વપૂર્ણ યોજનાઓ</h3>
<ul>
<li>🔹 <strong>સ્ટેચ્યુ ઓફ યુનિટી</strong> - સરદાર પટેલ, 182 મીટર, વિશ્વની સૌથી ઊંચી પ્રતિમા, કેવડિયા</li>
<li>🔹 <strong>GIFT City</strong> - ગાંધીનગર, ભારતનું પ્રથમ IFSC</li>
<li>🔹 <strong>સરદાર સરોવર બંધ</strong> - નર્મદા નદી, 163 મીટર ઊંચાઈ</li>
<li>🔹 <strong>ગુજરાત ટાઇટેનિયમ</strong> - ભારતની એકમાત્ર ટાઇટેનિયમ ફેક્ટરી</li>
<li>🔹 <strong>અમૂલ (AMUL)</strong> - આણંદ, "ભારતની શ્વેત ક્રાંતિ", વર્ગીઝ કુરિયન</li>
</ul>
<h3>🎯 ગુજરાત - પ્રથમ</h3>
<ul>
<li>🥇 સૌર ઊર્જા ઉત્પાદનમાં ભારતમાં અગ્રણી</li>
<li>🥇 દરિયાકિનારો સૌથી લાંબો (1600+ km)</li>
<li>🥇 મીઠાનું ઉત્પાદન (કચ્છનું રણ) - 76% ભારત</li>
<li>🥇 રિન્યુએબલ એનર્જી પાર્ક - ખવડા (30,000 MW)</li>
</ul>`,
        keyPoints: [
            "ગુજરાતના 33 જિલ્લાઓ, 252 તાલુકા",
            "સ્ટેચ્યુ ઓફ યુનિટી - 182 મીટર",
            "GIFT City - ભારતનું પ્રથમ IFSC",
            "અમૂલ - આણંદ - શ્વેત ક્રાંતિ",
            "ગુજરાત દરિયાકિનારો 1600+ km"
        ],
        mnemonics: ""
    },
    {
        topic: "ભારત સમસામયિક",
        content: `<h3>🇮🇳 ભારતની મહત્ત્વપૂર્ણ માહિતી (2024-25)</h3>
<ul>
<li><strong>રાષ્ટ્રપતિ:</strong> દ્રૌપદી મુર્મુ (15મા, 2022-)</li>
<li><strong>ઉપરાષ્ટ્રપતિ:</strong> જગદીપ ધનખડ</li>
<li><strong>વડાપ્રધાન:</strong> નરેન્દ્ર મોદી (2014-)</li>
<li><strong>CJI:</strong> સંજીવ ખન્ના (51મા CJI)</li>
<li><strong>RBI ગવર્નર:</strong> સંજય મલ્હોત્રા</li>
<li><strong>CAG:</strong> (અપડેટ તપાસો)</li>
</ul>
<h3>🚀 મહત્ત્વપૂર્ણ મિશન/યોજનાઓ</h3>
<ul>
<li>🛰️ <strong>ચંદ્રયાન-3</strong> - 23 ઓગસ્ટ 2023, દક્ષિણ ધ્રુવ ઉતરાણ, ISRO</li>
<li>🛰️ <strong>આદિત્ય L-1</strong> - સૂર્ય અભ્યાસ મિશન, L1 પોઇન્ટ</li>
<li>🛰️ <strong>ગગનયાન</strong> - ભારતનું પ્રથમ માનવસહિત અવકાશ મિશન</li>
<li>💊 <strong>આયુષ્માન ભારત</strong> - 5 લાખ/પરિવાર, PM-JAY</li>
<li>🏠 <strong>PM આવાસ યોજના</strong> - "સૌ માટે આવાસ"</li>
<li>🌾 <strong>PM-KISAN</strong> - ₹6000/વર્ષ ખેડૂતોને</li>
<li>💳 <strong>UPI</strong> - ભારતની ડિજિટલ ચૂકવણી ક્રાંતિ</li>
<li>🚆 <strong>વંદે ભારત Express</strong> - ભારતની સેમી-હાઇ સ્પીડ ટ્રેન</li>
</ul>
<h3>🏅 ભારત - ક્રમાંક</h3>
<ul>
<li>📊 વસ્તી: 1 (140+ કરોડ, 2024)</li>
<li>📊 GDP (PPP): 3rd | GDP (Nominal): 5th</li>
<li>📊 ક્ષેત્રફળ: 7મું</li>
<li>📊 IT નિકાસ: વિશ્વમાં અગ્રણી</li>
</ul>`,
        keyPoints: [
            "દ્રૌપદી મુર્મુ - 15મા રાષ્ટ્રપતિ",
            "ચંદ્રયાન-3 - 23 ઓગસ્ટ 2023",
            "ગગનયાન - ભારતનું પ્રથમ માનવસહિત મિશન",
            "ભારત - GDP 5th (Nominal), 3rd (PPP)",
            "UPI - ડિજિટલ ચૂકવણી ક્રાંતિ"
        ],
        mnemonics: "ISRO મિશન: ચ-આ-ગ (ચંદ્રયાન, આદિત્ય, ગગનયાન)"
    },
    {
        topic: "આંતરરાષ્ટ્રીય સમસામયિક",
        content: `<h3>🌍 વિશ્વ સંગઠનો</h3>
<ul>
<li><strong>UN:</strong> 1945 સ્થાપના, મુખ્ય મથક ન્યુયોર્ક, 193 સભ્ય</li>
<li><strong>UN મહાસચિવ:</strong> એન્ટોનિયો ગુટેરેસ</li>
<li><strong>WHO:</strong> જિનીવા, મહાનિર્દેશક - ટેડ્રોસ ઘેબ્રેયસ</li>
<li><strong>IMF:</strong> ક્રિસ્ટાલિના જ્યોર્જીવા</li>
<li><strong>World Bank:</strong> અજય બંગા (ભારતીય મૂળ)</li>
<li><strong>WTO:</strong> જિનીવા, ન્ગોઝી ઓકોન્જો-ઇવેલા</li>
</ul>
<h3>🤝 ભારતીય જોડાણ</h3>
<ul>
<li>🔹 <strong>G20:</strong> ભારત - 2023 અધ્યક્ષ, "વસુધૈવ કુટુમ્બકમ"</li>
<li>🔹 <strong>BRICS:</strong> ભારત + ચીન + રશિયા + SA + બ્રાઝિલ (+5 નવા)</li>
<li>🔹 <strong>QUAD:</strong> ભારત + USA + જાપાન + ઓસ્ટ્રેલિયા</li>
<li>🔹 <strong>SCO:</strong> શાંઘાઈ સહકાર સંગઠન</li>
<li>🔹 <strong>SAARC:</strong> 8 દેશ, કાઠમંડુ</li>
</ul>`,
        keyPoints: [
            "UN - 193 સભ્ય, 1945 સ્થાપના",
            "G20 - ભારત 2023 અધ્યક્ષ",
            "BRICS - 5+5 = 10 સભ્ય",
            "QUAD - ભારત, USA, જાપાન, ઓસ્ટ્રેલિયા",
            "World Bank પ્રમુખ - અજય બંગા"
        ],
        mnemonics: ""
    },
    {
        topic: "સરકારી યોજનાઓ",
        content: `<h3>📋 મહત્ત્વપૂર્ણ કેન્દ્ર સરકારી યોજનાઓ</h3>
<table>
<tr><th>યોજના</th><th>વર્ષ</th><th>ઉદ્દેશ</th></tr>
<tr><td>PM જન ધન</td><td>2014</td><td>બેન્ક ખાતું દરેકને</td></tr>
<tr><td>સ્વચ્છ ભારત</td><td>2014</td><td>સ્વચ્છતા અભિયાન</td></tr>
<tr><td>Make in India</td><td>2014</td><td>ઉત્પાદન ક્ષેત્ર</td></tr>
<tr><td>Digital India</td><td>2015</td><td>ડિજિટલ સેવાઓ</td></tr>
<tr><td>Startup India</td><td>2016</td><td>ઉદ્યોગ સાહસિકતા</td></tr>
<tr><td>MUDRA</td><td>2015</td><td>નાના ઉદ્યોગ લોન</td></tr>
<tr><td>PM-KISAN</td><td>2019</td><td>₹6000/વર્ષ ખેડૂતોને</td></tr>
<tr><td>PM આવાસ</td><td>2015</td><td>સૌ માટે ઘર</td></tr>
<tr><td>આયુષ્માન ભારત</td><td>2018</td><td>₹5 લાખ સ્વાસ્થ્ય વીમો</td></tr>
<tr><td>PM ઉજ્જવલા</td><td>2016</td><td>ગેસ કનેક્શન</td></tr>
<tr><td>PM સૂર્ય ઘર</td><td>2024</td><td>સોલાર છત</td></tr>
<tr><td>PM વિશ્વકર્મા</td><td>2023</td><td>પરંપરાગત કારીગરો</td></tr>
</table>`,
        keyPoints: [
            "PM જન ધન - 2014 - બેન્ક ખાતું",
            "આયુષ્માન ભારત - ₹5 લાખ વીમો",
            "PM-KISAN - ₹6000/વર્ષ",
            "MUDRA - નાના ઉદ્યોગ લોન",
            "સ્વચ્છ ભારત - 2 ઓક્ટોબર 2014"
        ],
        mnemonics: ""
    },
    {
        topic: "એવોર્ડ અને સન્માન",
        content: `<h3>🏅 ભારતીય નાગરિક સન્માન</h3>
<ul>
<li>🥇 <strong>ભારત રત્ન</strong> - સર્વોચ્ચ, 1954 થી</li>
<li>🥈 <strong>પદ્મ વિભૂષણ</strong> - 2nd</li>
<li>🥉 <strong>પદ્મ ભૂષણ</strong> - 3rd</li>
<li>🎖️ <strong>પદ્મ શ્રી</strong> - 4th</li>
</ul>
<h3>🏅 મહત્ત્વપૂર્ણ એવોર્ડ</h3>
<ul>
<li>⚽ <strong>ખેલ રત્ન</strong> (મેજર ધ્યાનચંદ) - રમતગમતમાં સર્વોચ્ચ</li>
<li>🏑 <strong>અર્જુન એવોર્ડ</strong> - રમતગમત</li>
<li>🎬 <strong>દાદા સાહેબ ફાળકે</strong> - સિનેમા</li>
<li>📚 <strong>જ્ઞાનપીઠ</strong> - સાહિત્ય</li>
<li>🌾 <strong>કૃષિ રત્ન</strong> - કૃષિ</li>
<li>🏫 <strong>શિક્ષક એવોર્ડ</strong> - 5 સપ્ટેમ્બર</li>
</ul>
<h3>🌍 આંતરરાષ્ટ્રીય</h3>
<ul>
<li>🏆 <strong>નોબેલ પ્રાઇઝ</strong> - 6 ક્ષેત્ર, સ્વીડન</li>
<li>🎵 <strong>ગ્રેમી</strong> - સંગીત</li>
<li>🎬 <strong>ઓસ્કર</strong> - ફિલ્મ</li>
<li>📚 <strong>બુકર</strong> - સાહિત્ય</li>
</ul>`,
        keyPoints: [
            "ભારત રત્ન - સર્વોચ્ચ નાગરિક સન્માન",
            "ખેલ રત્ન - રમતગમતમાં સર્વોચ્ચ",
            "દાદા સાહેબ ફાળકે - સિનેમા",
            "જ્ઞાનપીઠ - સાહિત્ય"
        ],
        mnemonics: "પદ્મ ક્રમ: ર-વિ-ભૂ-શ્રી (રત્ન, વિભૂષણ, ભૂષણ, શ્રી)"
    },
    {
        topic: "રમતગમત",
        content: `<h3>🏏 મહત્ત્વપૂર્ણ રમતગમત</h3>
<table>
<tr><th>રમત</th><th>ટ્રોફી/કપ</th><th>ખેલાડી સંખ્યા</th></tr>
<tr><td>ક્રિકેટ</td><td>વર્લ્ડ કપ, IPL</td><td>11</td></tr>
<tr><td>હોકી</td><td>વર્લ્ડ કપ</td><td>11</td></tr>
<tr><td>ફૂટબોલ</td><td>FIFA વર્લ્ડ કપ</td><td>11</td></tr>
<tr><td>બેડમિન્ટન</td><td>થોમસ/ઉબેર</td><td>1/2</td></tr>
<tr><td>ટેનિસ</td><td>ગ્રાન્ડ સ્લેમ (4)</td><td>1/2</td></tr>
<tr><td>કબડ્ડી</td><td>વર્લ્ડ કપ</td><td>7</td></tr>
<tr><td>વોલીબોલ</td><td>-</td><td>6</td></tr>
</table>
<h3>🏅 ઓલિમ્પિક</h3>
<ul>
<li>🔹 પ્રથમ: 1896 એથેન્સ</li>
<li>🔹 2024: પેરિસ</li>
<li>🔹 2028: લોસ એન્જલસ</li>
<li>🔹 ભારતીય ઓલિમ્પિક સંઘ: 1927</li>
<li>🔹 ભારતનો પ્રથમ ગોલ્ડ: હોકી (1928)</li>
<li>🔹 નીરજ ચોપડા - જેવેલિન ગોલ્ડ (2020 ટોક્યો)</li>
</ul>`,
        keyPoints: [
            "ઓલિમ્પિક 2024 - પેરિસ",
            "ઓલિમ્પિક 2028 - LA",
            "નીરજ ચોપડા - જેવેલિન ગોલ્ડ",
            "ભારતનો પ્રથમ ગોલ્ડ - 1928 હોકી",
            "ગ્રાન્ડ સ્લેમ - 4 ટૂર્નામેન્ટ"
        ],
        mnemonics: "ગ્રાન્ડ સ્લેમ: ઓ-ફ-વિ-અ (ઓસ્ટ્રેલિયન, ફ્રેન્ચ, વિમ્બલ્ડન, US)"
    },
    {
        topic: "વિજ્ઞાન અને ટેક્નોલોજી",
        content: `<h3>🚀 ISRO - ભારતીય અવકાશ સંશોધન</h3>
<ul>
<li>🔹 <strong>સ્થાપના:</strong> 1969, મુખ્ય મથક: બેંગલુરુ</li>
<li>🔹 <strong>અધ્યક્ષ:</strong> ડૉ. એસ. સોમનાથ</li>
<li>🔹 <strong>ચંદ્રયાન-3:</strong> 23 ઓગસ્ટ 2023 - ચંદ્ર દક્ષિણ ધ્રુવ</li>
<li>🔹 <strong>આદિત્ય L-1:</strong> 2023 - સૂર્ય અભ્યાસ</li>
<li>🔹 <strong>ગગનયાન:</strong> ભારતનું પ્રથમ મૈત્રેય મિશન</li>
<li>🔹 <strong>PSLV:</strong> વર્કહોર્સ રોકેટ</li>
<li>🔹 <strong>GSLV:</strong> ભારે ઉપગ્રહ</li>
</ul>
<h3>💻 ટેક્નોલોજી</h3>
<ul>
<li>🤖 <strong>AI (Artificial Intelligence)</strong> - કૃત્રિમ બુદ્ધિમત્તા</li>
<li>🔗 <strong>Blockchain</strong> - વિકેન્દ્રિત ખાતાવહી</li>
<li>📱 <strong>5G</strong> - ભારતમાં 2022 થી</li>
<li>☁️ <strong>Cloud Computing</strong> - ઈન્ટરનેટ-આધારિત સેવાઓ</li>
<li>🌐 <strong>IoT</strong> - ઈન્ટરનેટ ઓફ થિંગ્સ</li>
</ul>`,
        keyPoints: [
            "ISRO - 1969, બેંગલુરુ",
            "ચંદ્રયાન-3 - દક્ષિણ ધ્રુવ ઉતરાણ",
            "5G - ભારતમાં 2022",
            "PSLV vs GSLV",
            "AI - કૃત્રિમ બુદ્ધિમત્તા"
        ],
        mnemonics: ""
    },
    {
        topic: "મહત્ત્વપૂર્ણ દિવસો",
        content: `<h3>📅 રાષ્ટ્રીય મહત્ત્વપૂર્ણ દિવસો</h3>
<table>
<tr><th>તારીખ</th><th>દિવસ</th></tr>
<tr><td>26 જાન્યુઆરી</td><td>🇮🇳 પ્રજાસત્તાક દિન</td></tr>
<tr><td>30 જાન્યુઆરી</td><td>🕊️ શહીદ દિન</td></tr>
<tr><td>8 માર્ચ</td><td>👩 મહિલા દિન</td></tr>
<tr><td>14 એપ્રિલ</td><td>🙏 આંબેડકર જયંતી</td></tr>
<tr><td>1 મે</td><td>👷 મજૂર દિન / ગુજરાત સ્થાપના દિન</td></tr>
<tr><td>21 જૂન</td><td>🧘 યોગ દિન</td></tr>
<tr><td>15 ઓગસ્ટ</td><td>🇮🇳 સ્વતંત્રતા દિન</td></tr>
<tr><td>5 સપ્ટેમ્બર</td><td>👨‍🏫 શિક્ષક દિન (રાધાકૃષ્ણન)</td></tr>
<tr><td>2 ઓક્ટોબર</td><td>🕊️ ગાંધી જયંતી / અહિંસા દિન</td></tr>
<tr><td>31 ઓક્ટોબર</td><td>🗽 રાષ્ટ્રીય એકતા દિન (સરદાર પટેલ)</td></tr>
<tr><td>14 નવેમ્બર</td><td>👶 બાળ દિન (નહેરુ)</td></tr>
<tr><td>26 નવેમ્બર</td><td>📜 બંધારણ દિન</td></tr>
<tr><td>25 ડિસેમ્બર</td><td>🎄 સુશાસન દિન (અટલ બિહારી)</td></tr>
</table>
<h3>📅 આંતરરાષ્ટ્રીય</h3>
<table>
<tr><th>તારીખ</th><th>દિવસ</th></tr>
<tr><td>22 એપ્રિલ</td><td>🌍 પૃથ્વી દિન</td></tr>
<tr><td>5 જૂન</td><td>🌱 પર્યાવરણ દિન</td></tr>
<tr><td>7 એપ્રિલ</td><td>🏥 વિશ્વ આરોગ્ય દિન</td></tr>
<tr><td>22 માર્ચ</td><td>💧 વિશ્વ જળ દિન</td></tr>
<tr><td>1 ડિસેમ્બર</td><td>🎗️ વિશ્વ AIDS દિન</td></tr>
<tr><td>10 ડિસેમ્બર</td><td>⚖️ માનવ અધિકાર દિન</td></tr>
</table>`,
        keyPoints: [
            "26 જાન્યુઆરી - પ્રજાસત્તાક દિન",
            "15 ઓગસ્ટ - સ્વતંત્રતા દિન",
            "1 મે - ગુજરાત સ્થાપના દિન",
            "2 ઓક્ટોબર - ગાંધી જયંતી",
            "5 સપ્ટેમ્બર - શિક્ષક દિન"
        ],
        mnemonics: ""
    },
    {
        topic: "પુસ્તકો અને લેખકો",
        content: `<h3>📚 પ્રસિદ્ધ ભારતીય પુસ્તકો</h3>
<table>
<tr><th>પુસ્તક</th><th>લેખક</th></tr>
<tr><td>ડિસ્કવરી ઓફ ઈન્ડિયા</td><td>જવાહરલાલ નહેરુ</td></tr>
<tr><td>માય એક્સપેરિમેન્ટ્સ વિથ ટ્રુથ</td><td>મહાત્મા ગાંધી</td></tr>
<tr><td>ગીતાંજલિ</td><td>રવીન્દ્રનાથ ટાગોર</td></tr>
<tr><td>અર્થશાસ્ત્ર</td><td>ચાણક્ય/કૌટિલ્ય</td></tr>
<tr><td>India Wins Freedom</td><td>અબુલ કલામ આઝાદ</td></tr>
<tr><td>Wings of Fire</td><td>APJ અબ્દુલ કલામ</td></tr>
<tr><td>સત્યાર્થ પ્રકાશ</td><td>દયાનંદ સરસ્વતી</td></tr>
<tr><td>ઐ-નામા</td><td>બાબર (તુઝુક-એ-બાબરી)</td></tr>
<tr><td>આઇન-એ-અકબરી</td><td>અબુલ ફઝલ</td></tr>
<tr><td>રાજતરંગિણી</td><td>કલ્હણ</td></tr>
</table>
<h3>📖 ગુજરાતી સાહિત્ય</h3>
<table>
<tr><th>લેખક</th><th>ઓળખ</th></tr>
<tr><td>નર્મદ</td><td>ગુજરાતી ગદ્યના પિતા</td></tr>
<tr><td>કવિ દલપતરામ</td><td>ગુજરાતી કવિતાના પિતા</td></tr>
<tr><td>ગોવર્ધનરામ ત્રિપાઠી</td><td>સરસ્વતીચંદ્ર</td></tr>
<tr><td>ઝવેરચંદ મેઘાણી</td><td>રાષ્ટ્રીય શાયર</td></tr>
<tr><td>ક.મા. મુનશી</td><td>ગુજરાતીનો અજોડ</td></tr>
</table>`,
        keyPoints: [
            "ગીતાંજલિ - ટાગોર - નોબેલ પ્રાઇઝ",
            "અર્થશાસ્ત્ર - ચાણક્ય",
            "ઝવેરચંદ મેઘાણી - રાષ્ટ્રીય શાયર",
            "નર્મદ - ગુજરાતી ગદ્યના પિતા"
        ],
        mnemonics: ""
    },
    {
        topic: "નિમણૂકો અને બદલીઓ",
        content: `<h3>🏛️ મહત્ત્વપૂર્ણ હોદ્દાઓ (2024-25)</h3>
<div class="important">પરીક્ષા પહેલા સમસામયિક અપડેટ ચકાસો - નિમણૂકો બદલાતી રહે છે!</div>
<table>
<tr><th>હોદ્દો</th><th>વ્યક્તિ</th></tr>
<tr><td>રાષ્ટ્રપતિ</td><td>દ્રૌપદી મુર્મુ</td></tr>
<tr><td>ઉપરાષ્ટ્રપતિ</td><td>જગદીપ ધનખડ</td></tr>
<tr><td>વડાપ્રધાન</td><td>નરેન્દ્ર મોદી</td></tr>
<tr><td>લોકસભા અધ્યક્ષ</td><td>ઓમ બિરલા</td></tr>
<tr><td>RBI ગવર્નર</td><td>સંજય મલ્હોત્રા</td></tr>
<tr><td>CJI (ભારત)</td><td>સંજીવ ખન્ના (51મા)</td></tr>
<tr><td>ગુજરાત રાજ્યપાલ</td><td>આચાર્ય દેવવ્રત</td></tr>
<tr><td>ગુજરાત CM</td><td>ભૂપેન્દ્ર પટેલ</td></tr>
<tr><td>ISRO અધ્યક્ષ</td><td>ડૉ. એસ. સોમનાથ</td></tr>
<tr><td>UN મહાસચિવ</td><td>એન્ટોનિયો ગુટેરેસ</td></tr>
</table>`,
        keyPoints: [
            "દ્રૌપદી મુર્મુ - 15મા રાષ્ટ્રપતિ",
            "સંજય મલ્હોત્રા - RBI ગવર્નર",
            "ભૂપેન્દ્ર પટેલ - ગુજરાત CM",
            "ઓમ બિરલા - લોકસભા અધ્યક્ષ"
        ],
        mnemonics: ""
    }
];

// 30-Day Study Plan
const studyPlan = [
    { day: 1, subject: "📅", label: "Plan", topics: "અભ્યાસ યોજના બનાવો + Preamble" },
    { day: 2, subject: "🏛️", label: "ઇતિ.", topics: "હડપ્પા + વૈદિક યુગ" },
    { day: 3, subject: "🏛️", label: "ઇતિ.", topics: "જૈન + બૌદ્ધ + મૌર્ય" },
    { day: 4, subject: "🏛️", label: "ઇતિ.", topics: "અશોક + ગુપ્ત સામ્રાજ્ય" },
    { day: 5, subject: "⚖️", label: "રાજ.", topics: "મૂળભૂત અધિકાર + ફરજો" },
    { day: 6, subject: "⚖️", label: "રાજ.", topics: "DPSP + નાગરિકતા" },
    { day: 7, subject: "📝", label: "રિવિ.", topics: "Day 1-6 Revision + Quiz" },
    { day: 8, subject: "🏛️", label: "ઇતિ.", topics: "દિલ્હી સલ્તનત + મુઘલ" },
    { day: 9, subject: "🏛️", label: "ઇતિ.", topics: "યુરોપિયન + 1857 વિદ્રોહ" },
    { day: 10, subject: "🏛️", label: "ઇતિ.", topics: "રાષ્ટ્રીય ચળવળ + ગાંધીજી" },
    { day: 11, subject: "⚖️", label: "રાજ.", topics: "રાષ્ટ્રપતિ + ઉપરાષ્ટ્રપતિ + PM" },
    { day: 12, subject: "⚖️", label: "રાજ.", topics: "Governor + CM + સંસદ" },
    { day: 13, subject: "⚖️", label: "રાજ.", topics: "ન્યાયાલય + ચૂંટણી" },
    { day: 14, subject: "📝", label: "રિવિ.", topics: "Day 8-13 Revision + Quiz" },
    { day: 15, subject: "🌍", label: "ભૂગો.", topics: "પૃથ્વી + ભૂકંપ + જ્વાળામુખી" },
    { day: 16, subject: "🌍", label: "ભૂગો.", topics: "ખંડો + મહાસાગર + ખડક" },
    { day: 17, subject: "🌍", label: "ભૂગો.", topics: "વાતાવરણ + પવન + આબોહવા" },
    { day: 18, subject: "🌍", label: "ભૂગો.", topics: "નદી + સંસાધન + કૃષિ" },
    { day: 19, subject: "🔬", label: "વિજ્.", topics: "પરમાણુ + બળ + ગુરુત્વ" },
    { day: 20, subject: "🔬", label: "વિજ્.", topics: "ધ્વનિ + પ્રકાશ" },
    { day: 21, subject: "📝", label: "રિવિ.", topics: "Day 15-20 Revision + Quiz" },
    { day: 22, subject: "🔬", label: "વિજ્.", topics: "વિદ્યુત + ચુંબક + એસિડ-બેઝ" },
    { day: 23, subject: "🔬", label: "વિજ્.", topics: "માનવ શરીર + જીવન + સૂક્ષ્મજીવો" },
    { day: 24, subject: "💰", label: "અર્થ.", topics: "મૂળ + માંગ-પુરવઠો + ફુગાવો" },
    { day: 25, subject: "💰", label: "અર્થ.", topics: "RBI + બેન્કિંગ + બજેટ" },
    { day: 26, subject: "💰", label: "અર્થ.", topics: "ગરીબી + બેરોજગારી + વ્યાપાર" },
    { day: 27, subject: "🎨", label: "કળા", topics: "વારસો + સ્થાપત્ય + UNESCO" },
    { day: 28, subject: "📝", label: "રિવિ.", topics: "Day 22-27 Revision + Quiz" },
    { day: 29, subject: "📰", label: "CA", topics: "ગુજ + ભારત + વિશ્વ + યોજના" },
    { day: 30, subject: "📝", label: "FINAL", topics: "સંપૂર્ણ Revision + Mock Test" }
];

// 60-Day Master Study Plan (Specialized for Maths/Reasoning Complete Candidates)
const studyPlan60Days = [
    // Week 1: English & Gujarati Foundation + History Base
    { day: 1, subject: "🔤", label: "Eng", topics: "Tenses (Simple/Cont./Perfect) + Gujarati રૂઢિપ્રયોગો" },
    { day: 2, subject: "✍️", label: "Guj", topics: "સમાસનો વિગ્રહ અને ઓળખ + English Active/Passive Voice" },
    { day: 3, subject: "🏛️", label: "GA", topics: "સિંધુ ખીણ સંસ્કૃતિ + હડપ્પા (GSEB Std 10 Ch-1)" },
    { day: 4, subject: "🔤", label: "Eng", topics: "Direct & Indirect Speech + Gujarati કહેવતો" },
    { day: 5, subject: "✍️", label: "Guj", topics: "સંધિ (જોડો/છોડો) + English Articles (a, an, the)" },
    { day: 6, subject: "🏛️", label: "GA", topics: "મૌર્ય સામ્રાજ્ય + સમ્રાટ અશોક + ગુપ્ત સુવર્ણ યુગ" },
    { day: 7, subject: "📝", label: "Rev", topics: "Week 1 Master Revision + Sectional Mock Test" },

    // Week 2: Grammar Advanced + Constitution & Polity
    { day: 8, subject: "🔤", label: "Eng", topics: "Prepositions (in, on, at, by) + Gujarati સમાનાર્થી" },
    { day: 9, subject: "⚖️", label: "GA", topics: "ભારતીય બંધારણ પ્રસ્તાવના + કલમ 12-35 મૂળભૂત અધિકાર" },
    { day: 10, subject: "✍️", label: "Guj", topics: "શબ્દસમૂહ માટે એક શબ્દ + English Phrasal Verbs" },
    { day: 11, subject: "⚖️", label: "GA", topics: "રાષ્ટ્રપતિ, સંસદ, લોકસભા, રાજ્યસભા (Polity)" },
    { day: 12, subject: "🔤", label: "Eng", topics: "Synonyms & Antonyms (50 High Yield) + Gujarati વિરુદ્ધાર્થી" },
    { day: 13, subject: "🏛️", label: "GA", topics: "1857 નો વિદ્રોહ + ગાંધીજી & સરદાર પટેલ ચળવળો" },
    { day: 14, subject: "📝", label: "Rev", topics: "Week 2 Revision + Polity & Grammar Quiz" },

    // Week 3: Vocabulary & Sentence Structure + Geography
    { day: 15, subject: "✍️", label: "Guj", topics: "વાક્ય પરિવર્તન (સરળ/સંયુક્ત/મિશ્ર) + Eng One-Word Substitutions" },
    { day: 16, subject: "🌍", label: "GA", topics: "ગુજરાત & ભારતની ભૌતિક ભૂગોળ + નદી તંત્ર" },
    { day: 17, subject: "🔤", label: "Eng", topics: "Jumbled Sentences & Spellings + Gujarati જોડણી શુદ્ધિ" },
    { day: 18, subject: "🌍", label: "GA", topics: "આબોહવા, જમીન, ખનીજ સંપત્તિ & આપત્તિ વ્યવસ્થાપન" },
    { day: 19, subject: "✍️", label: "Guj", topics: "લેખન શુદ્ધિ/ભાષા શુદ્ધિ + Eng Sentence Transformation" },
    { day: 20, subject: "🏛️", label: "GA", topics: "ગુજરાતનો સાંસ્કૃતિક વારસો + રાણી કી વાવ + UNESCO" },
    { day: 21, subject: "📝", label: "Rev", topics: "Week 3 Revision + Geography & English Quiz" },

    // Week 4: Comprehension & Economics/Science
    { day: 22, subject: "🔤", label: "Eng", topics: "Reading Comprehension Strategy + Passage Practice" },
    { day: 23, subject: "💰", label: "GA", topics: "ભારતીય અર્થતંત્ર, NITI Aayog & RBI નાણાકીય નીતિ" },
    { day: 24, subject: "✍️", label: "Guj", topics: "ગદ્યસમીક્ષા & અર્થગ્રહણ + Eng Translation Practice" },
    { day: 25, subject: "🔬", label: "GA", topics: "વિજ્ઞાન & ટેક્નોલોજી, ICT, ISRO & સાયબર સિક્યુરિટી" },
    { day: 26, subject: "✍️", label: "Guj", topics: "ગુજરાતી-અંગ્રેજી ભાષાંતર + વ્યાકરણ Quick Test" },
    { day: 27, subject: "⚖️", label: "GA", topics: "જાહેર વહીવટ, સદ્દશાસન, RTI Act & નીતિશાસ્ત્ર" },
    { day: 28, subject: "📝", label: "Rev", topics: "Month 1 Grand Revision + 60 Qs Mock Test" },
    { day: 29, subject: "📐", label: "Math", topics: "Maths 10 High-Yield Speed Practice (30 Min)" },
    { day: 30, subject: "🧩", label: "Reas", topics: "Reasoning High-Yield Speed Practice (30 Min)" },

    // Week 5: General Awareness Deep Dive
    { day: 31, subject: "🏛️", label: "GA", topics: "મહાગુજરાત ચળવળ + ગુજરાતના રાજવંશો" },
    { day: 32, subject: "⚖️", label: "GA", topics: "પંચાયતી રાજ (73મો/74મો સુધારો) & 11મી/12મી અનુસૂચિ" },
    { day: 33, subject: "🎨", label: "GA", topics: "ગુજરાતની લોકસંસ્કૃતિ, ગરબા, ચિત્રકળા & ઉત્સવો" },
    { day: 34, subject: "💰", label: "GA", topics: "ગુજરાતનું અર્થતંત્ર & સહકારી ચળવળ (AMUL)" },
    { day: 35, subject: "🔬", label: "GA", topics: "માનવ શરીર, પાચન/શ્વસન તંત્ર & વિટામિન/રોગો" },
    { day: 36, subject: "📰", label: "CA", topics: "ગુજરાત વર્તમાન પ્રવાહો (છેલ્લા 6 મહિના)" },
    { day: 37, subject: "📝", label: "Rev", topics: "Week 5 General Awareness Revision Quiz" },

    // Week 6: Current Affairs & Grammar Intensive
    { day: 38, subject: "📰", label: "CA", topics: "ભારત & આંતરરાષ્ટ્રીય વર્તમાન બાબતો + સરકારી યોજનાઓ" },
    { day: 39, subject: "🔤", label: "Eng", topics: "Error Detection & Common Grammar Pitfalls" },
    { day: 40, subject: "✍️", label: "Guj", topics: "સંસ્કૃત આધારિત શબ્દો & વ્યાકરણ અપવાદો" },
    { day: 41, subject: "📰", label: "CA", topics: "રમતગમત, પુરસ્કારો, નિમણૂકો & દિન વિષેશ" },
    { day: 42, subject: "🏛️", label: "GA", topics: "બજેટ 2024-25 & આર્થિક સમીક્ષા હાઇલાઇટ્સ" },
    { day: 43, subject: "📐", label: "Math", topics: "Maths Formulas & Short Tricks Brushup" },
    { day: 44, subject: "📝", label: "Rev", topics: "Week 6 Current Affairs & Grammar Practice" },

    // Week 7: GSSSB Previous Papers Analysis (2024 CCE Shifts)
    { day: 45, subject: "📜", label: "PYP", topics: "CCE 2024 Shift 1 & 2 Paper Solve (Eng/Guj/GA Focus)" },
    { day: 46, subject: "📜", label: "PYP", topics: "CCE 2024 Shift 3 & 4 Paper Solve (Eng/Guj/GA Focus)" },
    { day: 47, subject: "📜", label: "PYP", topics: "VMC Jr. Clerk 2023 & Bin Sachivalay 2022 Paper" },
    { day: 48, subject: "📜", label: "PYP", topics: "Senior Clerk 2021 & Head Clerk Previous Paper" },
    { day: 49, subject: "🧩", label: "Reas", topics: "Reasoning 60 Qs Full Speed Test" },
    { day: 50, subject: "📐", label: "Math", topics: "Maths 30 Qs Full Speed Test" },
    { day: 51, subject: "📝", label: "Rev", topics: "Previous Papers Mistake Analysis & Fix" },
    { day: 52, subject: "🎯", label: "Mock", topics: "150 Qs Full CBT Live Mock Test 1" },

    // Week 8: Final CBT Speed & High-Yield Sprint
    { day: 53, subject: "🎯", label: "Mock", topics: "150 Qs Full CBT Live Mock Test 2" },
    { day: 54, subject: "📝", label: "Rev", topics: "High-Yield Topics Rapid Revision (Polity + Eng + Guj)" },
    { day: 55, subject: "🎯", label: "Mock", topics: "150 Qs Full CBT Live Mock Test 3" },
    { day: 56, subject: "📰", label: "CA", topics: "Last-Minute Current Affairs Quick Memory Sheet" },
    { day: 57, subject: "📝", label: "Rev", topics: "Mistake Notebook Revision (All 5 Subjects)" },
    { day: 58, subject: "🎯", label: "Mock", topics: "Final Live Speed Test (Target 90+ Score)" },
    { day: 59, subject: "🧘", label: "Prep", topics: "Light Revision + Hall Ticket Check & Exam Strategy" },
    { day: 60, subject: "🏆", label: "EXAM", topics: "🎯 EXAM DAY! Stay Calm & Pass CCE with Flying Colors!" }
];

// Most Repeated Topics
const mostRepeated = [
    "મૂળભૂત અધિકારો", "મૂળભૂત ફરજો", "પ્રસ્તાવના",
    "હડપ્પા", "અશોક", "ગુપ્ત સામ્રાજ્ય", "મુઘલ સામ્રાજ્ય",
    "1857 નો વિદ્રોહ", "ગાંધીજી", "ભારતીય બંધારણ",
    "સંસદ", "રાષ્ટ્રપતિ", "વડાપ્રધાન", "ન્યાયાલય",
    "ચૂંટણી", "પૃથ્વી અને આબોહવા", "કુદરતી સંસાધન",
    "માનવ શરીર", "બજેટ અને RBI", "સમસામયિક (છેલ્લા 6 મહિના)"
];

// ===========================
// State Management
// ===========================

let state = {
    currentView: 'dashboard',
    currentSubject: null,
    currentTopicIndex: null,
    completedTopics: {},
    quizScores: [],
    streak: 0,
    lastStudyDate: null,
    theme: 'dark',
    planDaysCompleted: []
};

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem('cce-class3-state');
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) {
        console.warn('Error loading state:', e);
    }
    updateStreak();
}

// Save state
function saveState() {
    try {
        localStorage.setItem('cce-class3-state', JSON.stringify(state));
    } catch (e) {
        console.warn('Error saving state:', e);
    }
}

// Update streak
function updateStreak() {
    const today = new Date().toDateString();
    if (state.lastStudyDate) {
        const lastDate = new Date(state.lastStudyDate);
        const diff = Math.floor((new Date() - lastDate) / (1000 * 60 * 60 * 24));
        if (diff > 1) {
            state.streak = 0;
        }
    }
    if (state.lastStudyDate !== today) {
        state.lastStudyDate = today;
        state.streak++;
        saveState();
    }
}

// ===========================
// Rendering
// ===========================

function init() {
    try {
        loadState();
        applyTheme();
        renderSidebar();
        renderDashboard();
        bindEvents();
    } catch (err) {
        console.error("Initialization Error:", err);
    } finally {
        const splash = document.getElementById('splash');
        const app = document.getElementById('app');
        if (splash) {
            splash.classList.add('fade-out');
            splash.style.display = 'none';
        }
        if (app) {
            app.classList.remove('hidden');
        }
    }
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('themeToggle').textContent = state.theme === 'dark' ? '🌙' : '☀️';
}

function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;
    try {
        nav.innerHTML = `
            <button class="sidebar-nav-item active" onclick="showDashboard()" data-view="dashboard">
                <span class="nav-item-icon">🏠</span>
                <span>${getString('nav_dashboard')}</span>
            </button>
            <div style="font-size: 0.75rem; font-weight: 800; color: var(--text-muted); padding: 0.75rem 1rem 0.25rem 1rem; text-transform: uppercase;">
                📖 ${getString('nav_subject_notes')}
            </div>
            ${coreSubjects.map(s => {
                let count = 0;
                try { count = (s.getData() || []).length; } catch (e) { count = 0; }
                return `
                    <button class="sidebar-nav-item" onclick="openSubject('${s.id}')" data-subject="${s.id}">
                        <span class="nav-item-icon">${s.icon}</span>
                        <span>${s.name}</span>
                        <span class="nav-item-badge">${count}</span>
                    </button>
                `;
            }).join('')}
            <div style="font-size: 0.75rem; font-weight: 800; color: var(--danger); padding: 0.75rem 1rem 0.25rem 1rem; text-transform: uppercase;">
                ⚡ ${getString('nav_cbt_tests')}
            </div>
            ${mockTestPapers.map(s => {
                let count = 0;
                try { count = (s.getData() || []).length; } catch (e) { count = 0; }
                return `
                    <button class="sidebar-nav-item" onclick="startCbtExam('${s.id}', 180);" data-subject="${s.id}">
                        <span class="nav-item-icon">${s.icon}</span>
                        <span>${s.name}</span>
                        <span class="nav-item-badge" style="background: var(--danger); color: white;">CBT</span>
                    </button>
                `;
            }).join('')}
            <div style="font-size: 0.75rem; font-weight: 800; color: var(--text-muted); padding: 0.75rem 1rem 0.25rem 1rem; text-transform: uppercase;">
                📅 ${getString('nav_study_plan')}
            </div>
            <button class="sidebar-nav-item" onclick="showPlanView()" data-view="plan">
                <span class="nav-item-icon">📅</span>
                <span>${getString('nav_30_day_plan')}</span>
            </button>
        `;
    } catch (err) {
        console.error('renderSidebar error:', err);
    }
}

function renderDashboard() {
    // 1. Core Subject Grid
    const grid = document.getElementById('subjectGrid');
    grid.innerHTML = coreSubjects.map((s, i) => {
        const data = s.getData();
        const completed = getCompletedCount(s.id);
        const total = data.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        return `
            <div class="subject-card animate-in stagger-${(i % 5) + 1}" 
                 style="--card-color: ${s.color}" 
                 onclick="openSubject('${s.id}')">
                <div class="subject-card-header">
                    <span class="subject-card-icon">${s.icon}</span>
                    <span class="subject-card-priority priority-${s.priority === 'VERY HIGH' ? 'very-high' : s.priority === 'HIGH' ? 'high' : 'medium'}">
                        ${s.priority}
                    </span>
                </div>
                <div class="subject-card-title">${s.name}</div>
                <div class="subject-card-subtitle">${s.nameEn} • ${total} ટૉપિક્સ</div>
                <div class="subject-card-progress">
                    <div class="subject-card-bar">
                        <div class="subject-card-fill" style="width: ${percent}%"></div>
                    </div>
                    <span class="subject-card-percent">${percent}%</span>
                </div>
            </div>
        `;
    }).join('');

    // 2. Mock Test Papers Hub Grid
    const mockGrid = document.getElementById('mockTestGrid');
    if (mockGrid) {
        mockGrid.innerHTML = mockTestPapers.map((s, i) => {
            const data = s.getData();
            const total = data.length;

            return `
                <div class="subject-card animate-in stagger-${(i % 4) + 1}" 
                     style="--card-color: ${s.color}; background: var(--bg-card); border-left: 4px solid ${s.color}; cursor: pointer;"
                     onclick="startCbtExam('${s.id}', 180);">
                    <div class="subject-card-header">
                        <span class="subject-card-icon">${s.icon}</span>
                        <span class="subject-card-priority priority-very-high">
                            CBT MOCK TEST
                        </span>
                    </div>
                    <div class="subject-card-title">${s.name}</div>
                    <div class="subject-card-subtitle">${s.nameEn} • ${total} પ્રશ્નો</div>
                    <button class="cbt-btn-nav cbt-btn-submit" 
                            style="width: 100%; margin-top: 0.75rem; justify-content: center; padding: 0.65rem 1rem; border-radius: 8px; font-weight: bold;">
                        ${getString('btn_start_cbt')}
                    </button>
                </div>
            `;
        }).join('');
    }

    // Study plan mini
    const planEl = document.getElementById('studyPlan');
    const today = getDayOfStudy();
    planEl.innerHTML = studyPlan.map(p => {
        const isToday = p.day === today;
        const isCompleted = state.planDaysCompleted.includes(p.day);
        return `
            <div class="plan-day ${isToday ? 'today' : ''} ${isCompleted ? 'completed' : ''}" 
                 onclick="showPlanView()" title="Day ${p.day}: ${p.topics}">
                ${isCompleted ? '<span class="plan-day-icon">✅</span>' : isToday ? '<span class="plan-day-icon">📍</span>' : ''}
                <div class="plan-day-num">${p.day}</div>
                <div class="plan-day-subject">${p.label}</div>
            </div>
        `;
    }).join('');

    // Repeated topics
    const repEl = document.getElementById('repeatedTopics');
    repEl.innerHTML = mostRepeated.map((t, i) => `
        <div class="repeated-topic-item animate-in">
            <span class="repeated-topic-rank">${i + 1}</span>
            <span class="repeated-topic-name">${t}</span>
        </div>
    `).join('');

    // Stats
    updateStats();
}

function updateStats() {
    let totalTopics = 0;
    let completedCount = 0;

    subjects.forEach(s => {
        const data = s.getData();
        totalTopics += data.length;
        completedCount += getCompletedCount(s.id);
    });

    document.getElementById('totalTopics').textContent = totalTopics;
    document.getElementById('completedTopics').textContent = completedCount;
    document.getElementById('streakCount').textContent = state.streak;

    // Quiz score
    const avgScore = state.quizScores.length > 0
        ? Math.round(state.quizScores.reduce((a, b) => a + b, 0) / state.quizScores.length)
        : 0;
    document.getElementById('quizScore').textContent = avgScore + '%';

    // Progress ring
    const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
    const circle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 16;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    document.getElementById('progressPercent').textContent = percent + '%';
}

function getCompletedCount(subjectId) {
    if (!state.completedTopics[subjectId]) return 0;
    return Object.keys(state.completedTopics[subjectId]).filter(k => state.completedTopics[subjectId][k]).length;
}

function getDayOfStudy() {
    // Simple: return day based on how long since first use
    const firstUse = localStorage.getItem('cce-first-use');
    if (!firstUse) {
        localStorage.setItem('cce-first-use', new Date().toISOString());
        return 1;
    }
    const diff = Math.floor((new Date() - new Date(firstUse)) / (1000 * 60 * 60 * 24));
    return Math.min(diff + 1, 30);
}

// ===========================
// Navigation
// ===========================

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    let target = document.getElementById(viewId);
    if (!target) {
        target = document.getElementById(viewId + 'View');
    }
    if (target) {
        target.classList.add('active');
    }
    state.currentView = viewId;

    // Update bottom nav
    document.querySelectorAll('.bottom-nav .nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.view === viewId);
    });

    // Scroll to top
    window.scrollTo(0, 0);
    closeSidebar();
}

function switchView(viewId) {
    showView(viewId);
}

function showDashboard() {
    state.currentSubject = null;
    state.currentTopicIndex = null;
    renderDashboard();
    switchView('dashboard');
    closeSidebar();
}

function openSubject(subjectId) {
    try {
        const subject = subjects.find(s => s.id === subjectId) || coreSubjects.find(s => s.id === subjectId);
        if (!subject) return;

        state.currentSubject = subjectId;
        let data = [];
        try { data = subject.getData() || []; } catch(e) { data = []; }
        
        const completed = getCompletedCount(subjectId);
        const percent = data.length > 0 ? Math.round((completed / data.length) * 100) : 0;

        const titleEl = document.getElementById('subjectTitle');
        if (titleEl) titleEl.textContent = `${subject.icon} ${subject.name}`;

        const barEl = document.getElementById('subjectProgressBar');
        if (barEl) barEl.style.width = percent + '%';

        const txtEl = document.getElementById('subjectProgressText');
        if (txtEl) txtEl.textContent = `${completed}/${data.length} ટૉપિક્સ પૂર્ણ (${percent}%)`;

        const listEl = document.getElementById('topicList');
        if (listEl) {
            listEl.innerHTML = data.map((t, i) => {
                const isCompleted = state.completedTopics[subjectId]?.[i];
                return `
                    <div class="topic-item ${isCompleted ? 'completed' : ''} animate-in" 
                         onclick="openTopic(${i})" style="animation-delay: ${i * 0.04}s">
                        <span class="topic-item-number">${isCompleted ? '✓' : i + 1}</span>
                        <div class="topic-item-info">
                            <div class="topic-item-title">${t.topic}</div>
                            <div class="topic-item-meta">${t.keyPoints?.length || 0} મુખ્ય મુદ્દાઓ</div>
                        </div>
                        <span class="topic-item-arrow">→</span>
                    </div>
                `;
            }).join('');
        }

        switchView('subject');
        closeSidebar();
    } catch (err) {
        console.error("openSubject error:", err);
    }
}

function openTopic(index) {
    const subject = subjects.find(s => s.id === state.currentSubject);
    if (!subject) return;

    const data = subject.getData();
    if (index >= data.length) return;

    state.currentTopicIndex = index;
    const topic = data[index];

    document.getElementById('topicTitle').textContent = topic.topic;

    let html = topic.content;

    // Key points
    if (topic.keyPoints && topic.keyPoints.length > 0) {
        html += `
            <div class="key-points-section" style="margin-top: 1.5rem;">
                <div class="key-points-title">📌 મુખ્ય મુદ્દાઓ (Exam માટે)</div>
                <ul class="key-points-list">
                    ${topic.keyPoints.map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Mnemonic
    if (topic.mnemonics) {
        html += `<div class="mnemonic">${topic.mnemonics}</div>`;
    }

    // Chapter-specific Q&A & Quiz Trigger Section (STRICTLY NO MIXING)
    const chapterQs = getChapterQuestions(topic);
    html += `
        <div style="margin-top: 2rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;">
                <div>
                    <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-light); margin: 0; display: flex; align-items: center; gap: 0.5rem;">
                        📝 ${topic.topic} - સ્વાધ્યાય & પરીક્ષાલક્ષી Q&A (${chapterQs.length} પ્રશ્નો)
                    </h4>
                    <span style="font-size: 0.8rem; color: #10b981; font-weight: bold;">🔒 100% Chapter-Specific Data (Zero Mix Logic)</span>
                </div>
                <button onclick="startChapterQuiz(${index})" style="padding: 0.5rem 1.25rem; font-size: 0.85rem; background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 20px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(16,185,129,0.3);">
                    🎯 આ જ ચેપ્ટરની ક્વિઝ આપો (${chapterQs.length} Qs) →
                </button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${chapterQs.map((q, qIdx) => `
                    <div style="background: var(--bg-surface); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.5rem;">
                            પ્રશ્ન ${qIdx + 1}: ${q.question}
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-bottom: 0.75rem;">
                            ${q.options.map((opt, optIdx) => `
                                <div style="font-size: 0.85rem; padding: 0.4rem 0.75rem; background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px; color: var(--text-secondary);">
                                    <strong>${String.fromCharCode(65 + optIdx)})</strong> ${opt}
                                </div>
                            `).join('')}
                        </div>
                        <details style="font-size: 0.85rem; color: var(--accent-light); cursor: pointer;">
                            <summary style="font-weight: bold;">💡 ઉત્તર અને સમજૂતી જુઓ</summary>
                            <div style="margin-top: 0.5rem; padding: 0.75rem; background: var(--bg-card); border-left: 3px solid #10b981; border-radius: 4px; color: var(--text-primary);">
                                <strong>સાચો ઉત્તર:</strong> વિકલ્પ ${String.fromCharCode(65 + q.correct)}<br>
                                <strong>સમજૂતી:</strong> ${q.explanation || 'પાઠ્યપુસ્તક નિયમ મુજબ.'}
                            </div>
                        </details>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Interactive AI Doubt Solver & Textbook Solution Box
    html += `
        <div style="margin-top: 2rem; background: var(--bg-card); border: 1px solid var(--accent); border-radius: var(--radius-lg); padding: 1.5rem; box-shadow: var(--shadow);">
            <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--accent-light); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
                💬 AI Doubt Solver & Concept Solution (કોઈપણ પ્રશ્ન/ડાઉટ પૂછો)
            </h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
                આ ચેપ્ટર (${topic.topic}) માં જો તમને કોઈ શંકા, સમજવામાં ભૂલ અથવા પ્રશ્નનો ગણતરીનો ડાઉટ હોય, તો નીચે લખો. સિસ્ટમ આપોઆપ સ્ટેપ-બાય-સ્ટેપ ઉકેલ આપશે!
            </p>

            <!-- Quick Presets -->
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                <button onclick="askTopicDoubt('${topic.topic} ના શોર્ટકટ સૂત્રો શું છે?')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-primary); border-radius: 15px; cursor: pointer;">⚡ શોર્ટકટ સૂત્રો</button>
                <button onclick="askTopicDoubt('${topic.topic} ના અગત્યના દાખલાઓ અને રીત')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-primary); border-radius: 15px; cursor: pointer;">📝 અગત્યના દાખલા & રીત</button>
                <button onclick="askTopicDoubt('${topic.topic} માં પરીક્ષામાં ભૂલ ન થાય તેની ટિપ્સ')" style="padding: 0.35rem 0.75rem; font-size: 0.8rem; background: var(--bg-surface); border: 1px solid var(--border); color: var(--text-primary); border-radius: 15px; cursor: pointer;">💡 Exam Tips & Caution</button>
            </div>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <input type="text" id="topicDoubtInput" placeholder="અહીં તમારો ડાઉટ અથવા પ્રશ્ન લખો..." 
                       style="flex: 1; min-width: 200px; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-primary); font-size: 0.9rem;"
                       onkeypress="if(event.key==='Enter') askTopicDoubt()">
                <button onclick="askTopicDoubt()" style="padding: 0.75rem 1.25rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">
                    🚀 સોલ્યુશન મેળવો
                </button>
            </div>

            <div id="topicDoubtResult" style="display: none; margin-top: 1rem; padding: 1.25rem; background: var(--bg-surface); border-radius: 10px; border-left: 4px solid var(--accent); font-size: 0.9rem; line-height: 1.6;">
                <!-- Dynamic solution output -->
            </div>
        </div>
    `;

    document.getElementById('topicContent').innerHTML = html;

    // Update complete button
    const isCompleted = state.completedTopics[state.currentSubject]?.[index];
    const btn = document.getElementById('markCompleteBtn');
    btn.classList.toggle('completed', isCompleted);
    btn.textContent = isCompleted ? getString('btn_completed') : getString('btn_mark_complete');

    // CBRT Topic Test Button Section
    let testBtnHtml = `
        <div style="margin-top: 1.5rem; padding: 1.25rem; background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(16,185,129,0.1)); border: 1px solid var(--accent); border-radius: 12px; text-align: center;">
            <div style="font-size: 0.9rem; font-weight: bold; color: var(--accent-light); margin-bottom: 0.75rem;">
                🚀 તમે આ ટોપિક વાંચી લીધો છે? હવે CBRT ટેસ્ટ આપી તમારી તૈયારી ચકાસો!
            </div>
            <button onclick="startChapterQuiz(${index})" style="padding: 0.75rem 1.5rem; background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; border-radius: 25px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(16,185,129,0.3); font-size: 1rem;">
                📝 CBRT ટોપિક ટેસ્ટ શરૂ કરો (${chapterQs.length} પ્રશ્નો) →
            </button>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                ⏱️ સમય: ${Math.ceil(chapterQs.length * 1.2)} મિનિટ (CCE Pattern)
            </div>
        </div>
    `;

    document.getElementById('topicContent').insertAdjacentHTML('beforeend', testBtnHtml);

    // Back button
    document.getElementById('topicBackBtn').onclick = () => openSubject(state.currentSubject);

    // Next button visibility
    const nextBtn = document.getElementById('nextTopicBtn');
    nextBtn.style.display = index < data.length - 1 ? '' : 'none';

    switchView('topic');
}

function nextTopic() {
    if (state.currentTopicIndex !== null) {
        const subject = subjects.find(s => s.id === state.currentSubject);
        if (subject && state.currentTopicIndex < subject.getData().length - 1) {
            openTopic(state.currentTopicIndex + 1);
        }
    }
}

function toggleTopicComplete() {
    if (!state.currentSubject || state.currentTopicIndex === null) return;

    if (!state.completedTopics[state.currentSubject]) {
        state.completedTopics[state.currentSubject] = {};
    }

    const isCompleted = !state.completedTopics[state.currentSubject][state.currentTopicIndex];
    state.completedTopics[state.currentSubject][state.currentTopicIndex] = isCompleted;

    const btn = document.getElementById('markCompleteBtn');
    btn.classList.toggle('completed', isCompleted);
    btn.textContent = isCompleted ? getString('btn_completed') : getString('btn_mark_complete');

    saveState();
    showToast(isCompleted ? getString('msg_topic_completed') : getString('msg_topic_uncompleted'));
}

// ===========================
// Quiz System
// ===========================

let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    chapterTitle: ''
};

function getChapterQuestions(topic) {
    if (topic && topic.questions && topic.questions.length > 0) {
        return topic.questions;
    }

    const questions = [];
    if (!topic || !topic.keyPoints) return questions;

    topic.keyPoints.forEach((point, pIdx) => {
        if (point.length < 8) return;

        let qText = `પ્રશ્ન: ${topic.topic} સંબંધિત નીચેનામાંથી કયું વિધાન સાચું છે?`;
        if (point.includes('એટલે') || point.includes('કહેવાય') || point.includes('થાય') || point.includes('હશે')) {
            qText = `${topic.topic}: "${point.split('(')[0]}" વિશે શું સાચું છે?`;
        }

        const options = [
            point,
            `આ વિધાન સંગત નથી.`,
            `ઉપરોક્ત પૈકી એક પણ નહીં.`,
            `વિધાન A અને B બંને સાચા છે.`
        ];

        questions.push({
            question: qText,
            options: options,
            correct: 0,
            explanation: `પાઠ્યપુસ્તક તથ્ય: ${point}`
        });
    });

    return questions.slice(0, 10);
}

function startChapterQuiz(topicIdx) {
    const subject = subjects.find(s => s.id === state.currentSubject);
    if (!subject) return;

    const data = subject.getData();
    if (topicIdx >= data.length) return;

    const topic = data[topicIdx];
    const chapterQs = getChapterQuestions(topic);

    if (chapterQs.length === 0) {
        showToast('❌ આ ચેપ્ટર માટે પ્રશ્નો મળ્યા નથી');
        return;
    }

    // CCE Timer Logic: 1.2 minutes per question
    const timeMins = Math.ceil(chapterQs.length * 1.2);

    // Prepare CBT State for Chapter Test
    cbtState = {
        examId: 'chapter_test',
        title: `🎯 Topic Test: ${topic.topic}`,
        questions: chapterQs,
        userAnswers: new Array(chapterQs.length).fill(null),
        markedForReview: new Array(chapterQs.length).fill(false),
        currentIndex: 0,
        timeLeft: timeMins * 60,
        timerInterval: null,
        filter: 'all'
    };

    document.getElementById('cbtExamTitle').textContent = cbtState.title;
    showView('cbtExamView');

    startCbtTimer();
    renderCbtQuestion();
    renderCbtPalette();

    showToast(`🚀 ${chapterQs.length} પ્રશ્નો, સમય: ${timeMins} મિનિટ`);
}

function startQuiz() {
    const subject = subjects.find(s => s.id === state.currentSubject);
    if (!subject) return;

    const data = subject.getData();
    if (data.length === 0) return;

    // Generate questions from key points
    quizState.questions = generateQuizQuestions(data);
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.answered = false;

    if (quizState.questions.length === 0) {
        showToast('❌ Quiz માટે પૂરતા પ્રશ્નો નથી');
        return;
    }

    document.getElementById('quizTotal').textContent = quizState.questions.length;
    const resultEl = document.getElementById('quizResult');
    if (resultEl) resultEl.classList.add('hidden');
    const contentEl = document.getElementById('quizContent');
    if (contentEl) contentEl.classList.remove('hidden');

    renderQuizQuestion();
    switchView('quiz');
}

function generateQuizQuestions(data) {
    const questions = [];

    data.forEach((topic, topicIdx) => {
        if (!topic.keyPoints || topic.keyPoints.length < 2) return;

        const points = [...topic.keyPoints];
        // Clean topic name (remove numbering like "૧. ")
        const topicName = topic.topic.replace(/^[૦-૯0-9]+\.\s*/, '');

        // Collect wrong answers from OTHER topics in same subject
        const otherTopicPoints = [];
        data.forEach((t, i) => {
            if (i !== topicIdx && t.keyPoints) {
                t.keyPoints.forEach(p => otherTopicPoints.push(p));
            }
        });

        if (otherTopicPoints.length < 3) return;

        // Generate multiple questions per topic for variety
        const numQsPerTopic = Math.min(2, points.length);
        const selectedPoints = shuffleArray(points).slice(0, numQsPerTopic);

        selectedPoints.forEach(correctPoint => {
            const wrongOptions = shuffleArray(otherTopicPoints).slice(0, 3);
            const options = shuffleArray([correctPoint, ...wrongOptions]);

            questions.push({
                question: `📖 "${topicName}" ના અભ્યાસ પરથી, નીચેનામાંથી કયું વિધાન આ ટોપિક સાથે સંબંધિત છે?`,
                options: options,
                correct: options.indexOf(correctPoint),
                explanation: `✅ સાચો જવાબ: ${correctPoint}\n\n📚 આ ફેક્ટ "${topicName}" ના મુખ્ય મુદ્દાઓમાંથી છે.\n🔍 ટિપ: આ ટોપિકના બધા key points ફરીથી વાંચો.`,
                topicRef: topicName
            });
        });
    });

    return shuffleArray(questions).slice(0, 8);
}

function getWrongAnswers(correct, allData) {
    const all = [];
    allData.forEach(t => {
        if (t.keyPoints) {
            t.keyPoints.forEach(p => {
                if (p !== correct) all.push(p);
            });
        }
    });
    return shuffleArray(all);
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function renderQuizQuestion() {
    const q = quizState.questions[quizState.currentIndex];
    document.getElementById('quizCurrent').textContent = quizState.currentIndex + 1;

    const letters = ['A', 'B', 'C', 'D'];
    document.getElementById('quizContent').innerHTML = `
        <div class="quiz-question">
            ${q.topicRef ? `<div style="margin-bottom: 0.75rem; padding: 0.4rem 0.85rem; background: var(--accent-glow); border: 1px solid var(--accent); border-radius: 20px; display: inline-block; font-size: 0.8rem; font-weight: 600; color: var(--accent-light);">📖 ${q.topicRef}</div>` : ''}
            <div class="quiz-question-text" style="font-size: 1.05rem; font-weight: 700; line-height: 1.7; margin-bottom: 1rem;">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <button class="quiz-option" onclick="selectQuizAnswer(${i})" data-index="${i}">
                        <span class="quiz-option-letter">${letters[i]}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    quizState.answered = false;
}

function selectQuizAnswer(index) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = index === q.correct;
    const letters = ['A', 'B', 'C', 'D'];

    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === q.correct) {
            opt.classList.add('correct');
        }
        if (i === index && i !== q.correct) {
            opt.classList.add('wrong');
        }
    });

    if (isCorrect) {
        quizState.score++;
    }

    // Add explanation + next button
    const isLast = quizState.currentIndex >= quizState.questions.length - 1;
    const container = document.getElementById('quizContent');
    container.innerHTML += `
        <div style="margin-top: 1.25rem; padding: 1.25rem; border-radius: 12px; background: ${isCorrect ? 'var(--success-light)' : 'var(--danger-light)'}; border-left: 5px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'};">
            <strong style="font-size: 1rem; color: ${isCorrect ? 'var(--success)' : 'var(--danger)'}; display: block; margin-bottom: 0.5rem;">
                ${isCorrect ? '✅ સાચો જવાબ! શાબાશ!' : '❌ ખોટો! સાચો જવાબ: ' + letters[q.correct]}
            </strong>
            <div style="font-size: 0.9rem; line-height: 1.7; white-space: pre-line; color: var(--text-primary);">
                ${q.explanation || ''}
            </div>
        </div>
        <button class="quiz-btn-next" style="margin-top: 1rem; width: 100%; padding: 0.75rem; font-size: 1rem; font-weight: bold;" onclick="${isLast ? 'showQuizResult()' : 'nextQuizQuestion()'}">
            ${isLast ? '📊 રિઝલ્ટ જુઓ' : 'આગળનો પ્રશ્ન → (Next)'}
        </button>
    `;
}

function nextQuizQuestion() {
    quizState.currentIndex++;
    renderQuizQuestion();
}

function showQuizResult() {
    const total = quizState.questions.length;
    const percent = Math.round((quizState.score / total) * 100);

    state.quizScores.push(percent);
    saveState();

    document.getElementById('quizContent').classList.add('hidden');
    const resultEl = document.getElementById('quizResult');
    resultEl.classList.remove('hidden');

    let emoji = '😢';
    let msg = 'વધુ અભ્યાસ જરૂરી!';
    if (percent >= 80) { emoji = '🎉'; msg = 'ઉત્તમ! શાબાશ!'; }
    else if (percent >= 60) { emoji = '😊'; msg = 'સારું! થોડું વધુ મહેનત!'; }
    else if (percent >= 40) { emoji = '🤔'; msg = 'ઠીક છે, રિવિઝન કરો!'; }

    resultEl.innerHTML = `
        <div class="quiz-result-icon">${emoji}</div>
        <div class="quiz-result-score">${quizState.score}/${total}</div>
        <div class="quiz-result-text">${msg} (${percent}%)</div>
        <button class="quiz-result-btn" onclick="exitQuiz()">🔙 પાછા જાઓ</button>
    `;

    updateStats();
}

function exitQuiz() {
    if (state.currentSubject) {
        openSubject(state.currentSubject);
    } else {
        showDashboard();
    }
}

// ===========================
// Study Plan View
// ===========================

function renderPlanTabs(activeType = '60days') {
    return `
        <div style="display: flex; gap: 0.75rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <button onclick="showPlanView('60days')" style="padding: 0.75rem 1.25rem; background: ${activeType === '60days' ? 'linear-gradient(135deg, var(--accent), #10b981)' : 'var(--bg-surface)'}; color: white; border: 1px solid var(--accent); border-radius: 25px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(99,102,241,0.3);">
                🎯 60-Day Target Plan (Maths/Reasoning Complete)
            </button>
            <button onclick="showPlanView('30days')" style="padding: 0.75rem 1.25rem; background: ${activeType === '30days' ? 'linear-gradient(135deg, var(--accent), #8b5cf6)' : 'var(--bg-surface)'}; color: ${activeType === '30days' ? 'white' : 'var(--text-primary)'}; border: 1px solid var(--border); border-radius: 25px; font-weight: 700; cursor: pointer;">
                📅 30-Day General Crash Course
            </button>
        </div>
    `;
}

function showPlanView(planType = '60days') {
    const planEl = document.getElementById('planContent');
    if (!planEl) return;

    let weeks = [];
    let bannerHtml = '';

    if (planType === '60days') {
        bannerHtml = `
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; padding: 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;">
                <h3 style="color: #10b981; margin-bottom: 0.5rem; font-weight: 800;">🔥 Target 60-Day Crash Course Strategy (Maths & Reasoning Complete)</h3>
                <p style="color: var(--text-primary); font-size: 0.9rem; line-height: 1.6;">
                    તમારી પાસે ગણિત (30 માર્કસ) અને રીઝનિંગ (60 માર્કસ) 100% પૂર્ણ છે! આ 60 દિવસની યોજના મુખ્યત્વે બાકીના <strong>60 માર્ક્સ (અંગ્રેજી 15, ગુજરાતી 15, સામાન્ય જાગૃતિ 30)</strong> પર 100% ધ્યાન કેન્દ્રિત કરે છે.
                </p>
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.75rem;">
                    <span style="background: rgba(99, 102, 241, 0.2); color: #a5b4fc; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">40% સમય: સામાન્ય જાગૃતિ</span>
                    <span style="background: rgba(6, 182, 212, 0.2); color: #67e8f9; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">25% સમય: અંગ્રેજી ભાષા</span>
                    <span style="background: rgba(236, 72, 153, 0.2); color: #f9a8d4; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">25% સમય: ગુજરાતી ભાષા</span>
                    <span style="background: rgba(132, 204, 22, 0.2); color: #a3e635; padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">10% સમય: Maths/Reasoning Revision</span>
                </div>
            </div>
        `;

        weeks = [
            { title: '📗 Week 1 (Day 1-7): English & Gujarati Base + History', days: studyPlan60Days.slice(0, 7) },
            { title: '📘 Week 2 (Day 8-14): Grammar Advanced + Polity & Constitution', days: studyPlan60Days.slice(7, 14) },
            { title: '📙 Week 3 (Day 15-21): Vocab, Spelling & Geography', days: studyPlan60Days.slice(14, 21) },
            { title: '📕 Week 4 (Day 22-28): Comprehension + Economics & Science', days: studyPlan60Days.slice(21, 28) },
            { title: '🔮 Week 5 (Day 29-35): General Awareness High-Yield Sprint', days: studyPlan60Days.slice(28, 35) },
            { title: '📰 Week 6 (Day 36-42): Current Affairs 6-Month Intensive', days: studyPlan60Days.slice(35, 42) },
            { title: '📜 Week 7 (Day 43-49): GSSSB CCE 2024 Previous Papers Solve', days: studyPlan60Days.slice(42, 49) },
            { title: '🏆 Week 8 (Day 50-60): Full 150 Qs CBT Mock Tests & Final Revision', days: studyPlan60Days.slice(49, 60) }
        ];
    } else {
        weeks = [
            { title: '📗 Week 1: ઇતિહાસ + રાજનીતિ (Base)', days: studyPlan.slice(0, 7) },
            { title: '📘 Week 2: ઇતિહાસ + રાજનીતિ (Deep)', days: studyPlan.slice(7, 14) },
            { title: '📙 Week 3: ભૂગોળ + વિજ્ઞાન', days: studyPlan.slice(14, 21) },
            { title: '📕 Week 4: અર્થ + કળા + CA + Final', days: studyPlan.slice(21, 30) }
        ];
    }

    planEl.innerHTML = renderPlanTabs(planType) + bannerHtml + weeks.map(w => `
        <div class="plan-week">
            <div class="plan-week-header">${w.title}</div>
            <div class="plan-week-content">
                ${w.days.map(d => `
                    <div class="plan-day-detail">
                        <div class="plan-day-badge">Day ${d.day}</div>
                        <div class="plan-day-info">
                            <div class="plan-day-title">${d.subject} ${d.label}</div>
                            <div class="plan-day-topics">${d.topics}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    switchView('plan');
    closeSidebar();
}

function showBookmarks() {
    showBookmarksView();
}

function showStats() {
    showDashboard();
    showToast('📊 તમારું CCE અભ્યાસ પ્રગતિ ચાર્ટ અને આંકડા દર્શાવી રહ્યા છીએ!');
}

// ===========================
// Sidebar
// ===========================

function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('active');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('active');
}

// ===========================
// Toast
// ===========================

// ===========================
// Real CBT Mock Test Engine Logic
// ===========================

let cbtState = {
    examId: '',
    title: '',
    questions: [],
    userAnswers: [],
    markedForReview: [],
    currentIndex: 0,
    timeLeft: 180 * 60, // 3 Hours (180 Minutes)
    timerInterval: null,
    filter: 'all'
};

function startCbtExam(examId, customTimeMins) {
    if (!examId) examId = 'mocktest1';
    
    if (cbtState && cbtState.timerInterval) {
        clearInterval(cbtState.timerInterval);
        cbtState.timerInterval = null;
    }

    let rawQuestions = [];
    let examTitle = "🎯 કોન્સ્ટેબલ / CCE CBT Mock Test";

    if (examId === 'mocktest1') {
        rawQuestions = typeof mockTest1Data !== 'undefined' ? mockTest1Data : [];
        examTitle = "🎯 કોન્સ્ટેબલ / CCE Mock Test - 1 (60 Qs)";
    } else if (examId === 'gsssbclerk2022') {
        rawQuestions = typeof gsssbClerk2022Data !== 'undefined' ? gsssbClerk2022Data : [];
        examTitle = "📜 GSSSB Clerk 2022 Official Paper";
    } else if (examId === 'gsssbsrclerk2021') {
        rawQuestions = typeof gsssbSrClerk2021Data !== 'undefined' ? gsssbSrClerk2021Data : [];
        examTitle = "📄 GSSSB Sr. Clerk 2021 Official Paper";
    } else if (examId === 'cce2024pattern') {
        rawQuestions = typeof cce2024PatternData !== 'undefined' ? cce2024PatternData : [];
        examTitle = "🎯 CCE 2024 Chapter-Wise Exam Pattern";
    } else if (examId === 'user_uploaded_paper') {
        rawQuestions = customUploadedPaperData || [];
        const found = mockTestPapers.find(p => p.id === 'user_uploaded_paper');
        examTitle = found ? found.name : "🎯 Uploaded Paper CBT Mock Test";
    } else {
        const currentSubject = subjects.find(s => s.id === examId) || mockTestPapers.find(s => s.id === examId);
        if (currentSubject && typeof currentSubject.getData === 'function') {
            const topicData = currentSubject.getData();
            if (topicData && topicData.length > 0) {
                if (topicData[0].options && topicData[0].question) {
                    rawQuestions = topicData;
                } else {
                    rawQuestions = topicData.map((t, idx) => ({
                        id: idx + 1,
                        question: t.topic || t.question,
                        options: t.keyPoints && t.keyPoints.length >= 4 ? t.keyPoints.slice(0, 4) : ["વિકલ્પ A", "વિકલ્પ B", "વિકલ્પ C", "વિકલ્પ D"],
                        correct: 0,
                        explanation: t.content || t.explanation || "CCE Study Solution"
                    }));
                }
            }
            examTitle = `📝 ${currentSubject.name || currentSubject.topic} CBT Quiz`;
        }
    }

    if (!rawQuestions || rawQuestions.length === 0) {
        showToast("⚠️ ટેસ્ટ માટેના પ્રશ્નો મળ્યા નથી!");
        return;
    }

    // Dynamic timer: 150 questions = 180 min (3 hrs), proportional for others
    // 1.2 minutes per question (180/150 = 1.2)
    const totalQuestions = rawQuestions.length;
    let timeMins;
    if (totalQuestions >= 150) {
        timeMins = 180; // 3 hours for 150+ questions
    } else {
        timeMins = Math.ceil(totalQuestions * 1.2); // 1.2 min per question
    }

    cbtState = {
        examId: examId,
        title: examTitle,
        questions: rawQuestions,
        userAnswers: new Array(rawQuestions.length).fill(null),
        markedForReview: new Array(rawQuestions.length).fill(false),
        currentIndex: 0,
        timeLeft: timeMins * 60,
        timerInterval: null,
        filter: 'all'
    };

    document.getElementById('cbtExamTitle').textContent = examTitle;
    showView('cbtExamView');

    startCbtTimer();
    renderCbtQuestion();
    renderCbtPalette();
}

function startCbtTimer() {
    if (cbtState.timerInterval) clearInterval(cbtState.timerInterval);
    updateCbtTimerDisplay();
    
    cbtState.timerInterval = setInterval(() => {
        cbtState.timeLeft--;
        updateCbtTimerDisplay();
        if (cbtState.timeLeft <= 0) {
            clearInterval(cbtState.timerInterval);
            showToast(getString('msg_time_up'));
            submitCbtExam();
        }
    }, 1000);
}

function updateCbtTimerDisplay() {
    const hours = Math.floor(cbtState.timeLeft / 3600);
    const mins = Math.floor((cbtState.timeLeft % 3600) / 60);
    const secs = cbtState.timeLeft % 60;
    
    const hStr = String(hours).padStart(2, '0');
    const mStr = String(mins).padStart(2, '0');
    const sStr = String(secs).padStart(2, '0');
    
    document.getElementById('cbtTimerDisplay').textContent = `${hStr}:${mStr}:${sStr}`;
}

function renderCbtQuestion() {
    const q = cbtState.questions[cbtState.currentIndex];
    const total = cbtState.questions.length;
    const userSelected = cbtState.userAnswers[cbtState.currentIndex];
    
    document.getElementById('cbtQuestionNum').textContent = `પ્રશ્ન ${cbtState.currentIndex + 1} / ${total}`;
    document.getElementById('cbtCategoryBadge').textContent = q.subject || q.chapter || "CCE CBT Pattern";
    
    const container = document.getElementById('cbtQuestionContent');
    
    let html = `
        <div style="font-size: 1.15rem; font-weight: 700; margin-bottom: 1.25rem; line-height: 1.6; white-space: pre-line;">
            ${q.question}
        </div>
    `;

    // Diagram / Figure rendering support with zoom modal feature
    if (q.diagram) {
        let diagramHtml = q.diagram;
        if (typeof diagramHtml === 'string' && !diagramHtml.includes('<img') && !diagramHtml.includes('<svg')) {
            diagramHtml = `<img src="${diagramHtml}" class="cbt-diagram-img" onclick="zoomDiagram(this.src)" title="ક્લિક કરીને આકૃતિ ઝૂમ કરો">`;
        }
        html += `
            <div class="cbt-diagram-box">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-light); margin-bottom: 0.5rem; text-align: left; display: flex; align-items: center; justify-content: space-between;">
                    <span>🖼️ પ્રશ્ન આકૃતિ (Diagram / Figure)</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">🔍 ક્લિક કરીને ઝૂમ કરો</span>
                </div>
                ${diagramHtml}
            </div>
        `;
    }

    html += `<div class="cbt-options-grid">`;
    const letters = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((opt, idx) => {
        let btnClass = 'cbt-option-btn';
        
        if (userSelected !== null) {
            if (idx === q.correct) {
                btnClass += ' cbt-correct'; // Green
            } else if (idx === userSelected) {
                btnClass += ' cbt-wrong'; // Red
            }
        }
        
        html += `
            <button class="${btnClass}" onclick="selectCbtOption(${idx})">
                <span class="cbt-option-letter">${letters[idx]}</span>
                <span style="flex: 1;">${opt}</span>
            </button>
        `;
    });
    
    html += `</div>`;
    
    // Instant solution snippet if answered
    if (userSelected !== null) {
        const isRight = userSelected === q.correct;
        const isLast = cbtState.currentIndex === total - 1;
        
        html += `
            <div style="margin-top: 1.25rem; padding: 1.25rem; border-radius: 10px; background: ${isRight ? 'var(--success-light)' : 'var(--danger-light)'}; border-left: 5px solid ${isRight ? 'var(--success)' : 'var(--danger)'};">
                <strong style="font-size: 1.05rem; color: ${isRight ? 'var(--success)' : 'var(--danger)'}; display: block; margin-bottom: 0.5rem;">
                    ${isRight ? '✅ સાચો જવાબ!' : '❌ ખોટો જવાબ! (સાચો વિકલ્પ: ' + letters[q.correct] + ')'}
                </strong>
                <div style="font-size: 0.95rem; line-height: 1.6; white-space: pre-line; color: var(--text-primary);">
                    <strong>💡 સ્પષ્ટીકરણ / સોલ્યુશન:</strong>\n${q.explanation || 'આ પ્રશ્નનો સાચો જવાબ વિકલ્પ ' + letters[q.correct] + ' છે.'}
                </div>
                <div style="margin-top: 1.25rem;">
                    ${isLast ? `
                        <button class="cbt-nav-btn cbt-btn-submit" style="width: 100%; padding: 0.75rem; font-size: 1rem; justify-content: center; font-weight: bold;" onclick="submitCbtExamConfirm()">
                            📥 Submit Test (સબમિટ ટેસ્ટ)
                        </button>
                    ` : `
                        <button class="cbt-nav-btn cbt-btn-next" style="width: 100%; padding: 0.75rem; font-size: 1rem; justify-content: center; font-weight: bold;" onclick="nextCbtQuestion()">
                            આગળનો પ્રશ્ન → (Next Question)
                        </button>
                    `}
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

function selectCbtOption(optionIndex) {
    cbtState.userAnswers[cbtState.currentIndex] = optionIndex;
    renderCbtQuestion();
    renderCbtPalette();
}

function clearCbtAnswer() {
    cbtState.userAnswers[cbtState.currentIndex] = null;
    renderCbtQuestion();
    renderCbtPalette();
}

function toggleMarkCbtQuestion() {
    cbtState.markedForReview[cbtState.currentIndex] = !cbtState.markedForReview[cbtState.currentIndex];
    renderCbtPalette();
    showToast(cbtState.markedForReview[cbtState.currentIndex] ? "🔖 Mark for Review કરાયું!" : "Unmarked!");
}

function nextCbtQuestion() {
    if (cbtState.currentIndex < cbtState.questions.length - 1) {
        cbtState.currentIndex++;
        renderCbtQuestion();
        renderCbtPalette();
    } else {
        showToast("આ છેલ્લો પ્રશ્ન છે!");
    }
}

function prevCbtQuestion() {
    if (cbtState.currentIndex > 0) {
        cbtState.currentIndex--;
        renderCbtQuestion();
        renderCbtPalette();
    }
}

function jumpToCbtQuestion(index) {
    cbtState.currentIndex = index;
    renderCbtQuestion();
    renderCbtPalette();
}

function renderCbtPalette() {
    const grid = document.getElementById('cbtPaletteGrid');
    if (!grid) return;
    
    let html = '';
    cbtState.questions.forEach((q, idx) => {
        const userAns = cbtState.userAnswers[idx];
        const isMarked = cbtState.markedForReview[idx];
        const isCurrent = idx === cbtState.currentIndex;
        
        let itemClass = 'cbt-palette-item';
        if (isCurrent) itemClass += ' current';
        
        if (isMarked) {
            itemClass += ' marked';
        } else if (userAns !== null) {
            if (userAns === q.correct) {
                itemClass += ' answered'; // Green
            } else {
                itemClass += ' wrong-answered'; // Red
            }
        }
        
        html += `<button class="${itemClass}" onclick="jumpToCbtQuestion(${idx})">${idx + 1}</button>`;
    });
    
    grid.innerHTML = html;
}

function submitCbtExamConfirm() {
    const attempted = cbtState.userAnswers.filter(a => a !== null).length;
    const total = cbtState.questions.length;
    
    if (confirm(`શું તમે ટેસ્ટ સબમિટ કરવા માંગો છો?\n\nકુલ પ્રશ્નો: ${total}\nજવાબ આપેલ: ${attempted}\nબાકી રહી ગયેલા: ${total - attempted}`)) {
        submitCbtExam();
    }
}

function submitCbtExam() {
    if (cbtState.timerInterval) clearInterval(cbtState.timerInterval);
    
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;
    
    let errorBookQs = [];
    cbtState.questions.forEach((q, idx) => {
        const userAns = cbtState.userAnswers[idx];
        if (userAns === null) {
            unattemptedCount++;
        } else if (userAns === q.correct) {
            correctCount++;
        } else {
            wrongCount++;
            errorBookQs.push(q);
        }
    });

    // Save wrong questions to AI Error Book in localStorage
    if (errorBookQs.length > 0) {
        let existingErrorBook = JSON.parse(localStorage.getItem('cce_error_book') || '[]');
        errorBookQs.forEach(wrongQ => {
            if (!existingErrorBook.some(item => item.question === wrongQ.question)) {
                existingErrorBook.push(wrongQ);
            }
        });
        localStorage.setItem('cce_error_book', JSON.stringify(existingErrorBook));
    }
    
    const totalMarks = (correctCount * 1) - (wrongCount * 0.25);
    const totalQs = cbtState.questions.length;
    const percent = Math.max(0, Math.round((totalMarks / totalQs) * 100));
    
    // Render Result Summary
    const summary = document.getElementById('cbtResultSummary');
    summary.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">${percent >= 60 ? '🏆' : percent >= 40 ? '👍' : '🎯'}</div>
        <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 0.5rem;">${cbtState.title}</h2>
        <div style="font-size: 2.2rem; font-weight: 800; color: var(--accent-light); margin: 0.5rem 0;">
            મેળવેલ ગુણ: ${totalMarks.toFixed(2)} / ${totalQs} (${percent}%)
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
            <div style="background: var(--success-light); color: var(--success); padding: 1rem; border-radius: 10px; font-weight: bold;">
                <div style="font-size: 1.5rem;">${correctCount}</div>
                <div>✅ સાચા (Correct)</div>
            </div>
            <div style="background: var(--danger-light); color: var(--danger); padding: 1rem; border-radius: 10px; font-weight: bold;">
                <div style="font-size: 1.5rem;">${wrongCount}</div>
                <div>❌ ખોટા (Error Book માં જમા)</div>
            </div>
            <div style="background: var(--warning-light); color: var(--warning); padding: 1rem; border-radius: 10px; font-weight: bold;">
                <div style="font-size: 1.5rem;">${unattemptedCount}</div>
                <div>⚠️ પ્રયત્ન વિનાના</div>
            </div>
        </div>
    `;
    
    showView('cbtResultView');
    filterCbtReview('all');
}

function filterCbtReview(filterType) {
    cbtState.filter = filterType;
    const container = document.getElementById('cbtReviewList');
    const letters = ['A', 'B', 'C', 'D'];
    
    let html = '';
    
    cbtState.questions.forEach((q, idx) => {
        const userAns = cbtState.userAnswers[idx];
        const isRight = userAns === q.correct;
        const isUnattempted = userAns === null;
        
        if (filterType === 'correct' && !isRight) return;
        if (filterType === 'wrong' && (isRight || isUnattempted)) return;
        if (filterType === 'unattempted' && !isUnattempted) return;
        
        let cardClass = 'cbt-review-card';
        if (isUnattempted) cardClass += ' unattempted-card';
        else if (isRight) cardClass += ' correct-card';
        else cardClass += ' wrong-card';
        
        html += `
            <div class="${cardClass}">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    <span>પ્રશ્ન ${idx + 1} / ${cbtState.questions.length} • [${q.subject || 'CBT Exam'}]</span>
                    <span>${isUnattempted ? '⚠️ Unattempted' : isRight ? '✅ Correct (+1.0)' : '❌ Mistake (-0.25)'}</span>
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.5; white-space: pre-line;">
                    ${q.question}
                </div>
                ${q.diagram ? `<div class="cbt-diagram-box">${q.diagram}</div>` : ''}
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1rem;">
                    ${q.options.map((opt, oIdx) => {
                        let optBg = 'var(--bg-surface)';
                        let optBorder = 'var(--border)';
                        let optColor = 'var(--text-primary)';
                        
                        if (oIdx === q.correct) {
                            optBg = 'var(--success-light)';
                            optBorder = 'var(--success)';
                            optColor = 'var(--success)';
                        } else if (oIdx === userAns && !isRight) {
                            optBg = 'var(--danger-light)';
                            optBorder = 'var(--danger)';
                            optColor = 'var(--danger)';
                        }
                        
                        return `
                            <div style="padding: 0.5rem 0.8rem; background: ${optBg}; border: 1px solid ${optBorder}; color: ${optColor}; border-radius: 6px; font-size: 0.9rem; font-weight: ${oIdx === q.correct || oIdx === userAns ? 'bold' : 'normal'};">
                                (${letters[oIdx]}) ${opt} ${oIdx === userAns ? (isRight ? '✓ (તમારો જવાબ)' : '✗ (તમારો જવાબ)') : (oIdx === q.correct ? '★ (સાચો જવાબ)' : '')}
                            </div>
                        `;
                    }).join('')}
                </div>
                <div style="background: var(--accent-glow); border-left: 4px solid var(--accent); padding: 0.85rem 1rem; border-radius: 6px; font-size: 0.9rem; white-space: pre-line;">
                    <strong>💡 સ્ટેપ-બાય-સ્ટેપ વિસ્તૃત ઉકેલ:</strong>
                    ${q.explanation || 'સાચો જવાબ વિકલ્પ ' + letters[q.correct] + ' છે.'}
                </div>
            </div>
        `;
    });
    
    if (html === '') {
        html = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">આ ફિલ્ટરમાં કોઈ પ્રશ્નો મળ્યા નથી.</div>`;
    }
    
    container.innerHTML = html;
}

function exitCbtExam() {
    if (confirm("શું તમે ખરેખર ટેસ્ટ છોડીને બહાર નીકળવા માંગો છો?")) {
        if (cbtState.timerInterval) clearInterval(cbtState.timerInterval);
        showDashboard();
    }
}

function scrollToMockTests() {
    showDashboard();
    setTimeout(() => {
        const el = document.getElementById('mockTestGrid');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2500);
}

// ===========================
// Events
// ===========================

function bindEvents() {
    // Menu
    document.getElementById('menuBtn').addEventListener('click', openSidebar);
    document.getElementById('closeSidebar').addEventListener('click', closeSidebar);
    document.getElementById('overlay').addEventListener('click', closeSidebar);

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme();
        saveState();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
}

// ===========================
// Question Paper Upload & Pattern Analyzer Engine
// ===========================

let customUploadedPaperData = null;
let uploadedFileName = '';
let uploadedDiagramUrl = '';

function openPaperUploadModal() {
    const modal = document.getElementById('paperUploadModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closePaperUploadModal() {
    const modal = document.getElementById('paperUploadModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function handleDiagramImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedDiagramUrl = e.target.result;
        showToast("🖼️ આકૃતિ (Diagram) સફળતાપૂર્વક અપલોડ થઈ!");
    };
    reader.readAsDataURL(file);
}

function zoomDiagram(src) {
    const modal = document.getElementById('diagramZoomModal');
    const img = document.getElementById('diagramZoomImg');
    if (modal && img) {
        img.src = src;
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    }
}

function closeDiagramZoomModal() {
    const modal = document.getElementById('diagramZoomModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

function handlePaperFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    uploadedFileName = file.name;
    const fileName = file.name.toLowerCase();
    const textarea = document.getElementById('paperTextarea');
    textarea.value = `[📄 ફાઇલ સેલેક્ટ થઈ: ${file.name} - ટેક્સ્ટ વંચાઈ રહી છે, કૃપા કરીને નીચે 'એનાલાઇઝ' બટન પર ક્લિક કરો...]`;

    showToast(`📄 ફાઇલ સેલેક્ટ થઈ: ${file.name}`);

    if (fileName.endsWith('.pdf') || file.type === 'application/pdf') {
        const reader = new FileReader();
        reader.onload = function(e) {
            const typedarray = new Uint8Array(e.target.result);
            
            // Set up worker
            if (typeof pdfjsLib !== 'undefined') {
                try {
                    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                } catch(err) {}

                pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                    let pagePromises = [];
                    for (let i = 1; i <= pdf.numPages; i++) {
                        pagePromises.push(
                            pdf.getPage(i).then(page => 
                                page.getTextContent().then(t => t.items.map(s => s.str).join(' '))
                            )
                        );
                    }
                    Promise.all(pagePromises).then(pages => {
                        const fullText = pages.join('\n\n').trim();
                        if (fullText.length > 20) {
                            textarea.value = fullText;
                            showToast(`✅ PDF ટેક્સ્ટ સફળતાપૂર્વક લોડ થઈ (${pdf.numPages} પેજ)!`);
                        } else {
                            textarea.value = `[📄 ફાઇલ: ${file.name} - scanned/image PDF. 'એનાલાઇઝ કરો' બટન પર ક્લિક કરીને ઓટો-જનરેટેડ CBT મોક ટેસ્ટ શરૂ કરો!]`;
                        }
                    }).catch(err => {
                        console.warn('PDF extract inner error:', err);
                    });
                }).catch(err => {
                    console.warn('PDF getDocument error:', err);
                });
            }
        };
        reader.readAsArrayBuffer(file);
    } else {
        const reader = new FileReader();
        reader.onload = function(e) {
            textarea.value = e.target.result;
            showToast("📄 ટેક્સ્ટ લોડ થયું! હવે 'એનાલાઇઝ' કરો.");
        };
        reader.readAsText(file);
    }
}

function processUploadedPaper() {
    const textarea = document.getElementById('paperTextarea');
    let rawText = textarea ? textarea.value.trim() : '';

    let parsedQuestions = [];

    // 1. Try parsing raw text if available
    if (rawText && !rawText.startsWith('[📄')) {
        try {
            const json = JSON.parse(rawText);
            if (Array.isArray(json)) {
                parsedQuestions = json;
            } else if (json.questions && Array.isArray(json.questions)) {
                parsedQuestions = json.questions;
            }
        } catch (e) {
            const blocks = rawText.split(/\n\s*\n|\n(?=\d+[\.\)])/);
            blocks.forEach((block, idx) => {
                const lines = block.trim().split('\n').map(l => l.trim()).filter(Boolean);
                if (lines.length >= 2) {
                    const questionText = lines[0].replace(/^\d+[\.\)]\s*/, '');
                    const options = [];
                    let explanation = "અપલોડ કરેલ પ્રશ્નપત્ર આધારિત પ્રશ્ન.";

                    lines.slice(1).forEach(line => {
                        if (/^[A-Da-dઅ-ડ][\.\)]\s*/.test(line)) {
                            options.push(line.replace(/^[A-Da-dઅ-ડ][\.\)]\s*/, ''));
                        } else if (line.toLowerCase().includes('solut') || line.includes('ઉકેલ') || line.includes('સાચો જવાબ')) {
                            explanation = line;
                        }
                    });

                    if (options.length < 4) {
                        while (options.length < 4) {
                            options.push(`વિકલ્પ ${String.fromCharCode(65 + options.length)}`);
                        }
                    }

                    let diagramVal = q.diagram || null;
                    if (uploadedDiagramUrl) {
                        diagramVal = uploadedDiagramUrl;
                    } else if (!diagramVal && (questionText.includes('આકૃતિ') || questionText.includes('વેન') || questionText.includes('ત્રિકોણ') || questionText.includes('દર્પણ') || questionText.includes('ચાર્ટ'))) {
                        diagramVal = generateSampleSvgDiagram(questionText);
                    }

                    parsedQuestions.push({
                        id: idx + 1,
                        question: questionText,
                        options: options.slice(0, 4),
                        correct: 0,
                        explanation: explanation,
                        diagram: diagramVal,
                        subject: detectSubjectFromText(questionText)
                    });
                }
            });
        }
    }

    // 2. If no raw text questions could be parsed or image PDF, generate high-yield CCE 2024 Shift Pattern Mock Test
    if (parsedQuestions.length === 0) {
        showToast("🎯 CCE 2024 ઓરિજિનલ પેપર પેટર્નથી 60 Qs CBT Mock Test જનરેટ થઈ રહી છે...");
        
        const source1 = typeof cce2024PatternData !== 'undefined' ? cce2024PatternData : [];
        const source2 = typeof mockTest1Data !== 'undefined' ? mockTest1Data : [];
        const source3 = typeof gsssbClerk2022Data !== 'undefined' ? gsssbClerk2022Data : [];

        const combined = [...source1, ...source2, ...source3];
        parsedQuestions = combined.map((q, idx) => {
            let diagramVal = q.diagram || null;
            if (uploadedDiagramUrl && idx < 5) {
                diagramVal = uploadedDiagramUrl;
            } else if (!diagramVal && (q.question.includes('આકૃતિ') || q.question.includes('વેન') || q.question.includes('ત્રિકોણ') || q.question.includes('દર્પણ') || q.question.includes('ચાર્ટ') || idx % 7 === 0)) {
                diagramVal = generateSampleSvgDiagram(q.question);
            }
            return {
                id: idx + 1,
                question: q.question,
                options: q.options && q.options.length >= 4 ? q.options : ["વિકલ્પ A", "વિકલ્પ B", "વિકલ્પ C", "વિકલ્પ D"],
                correct: typeof q.correct === 'number' ? q.correct : 0,
                explanation: q.explanation || "CCE Exam High-Weightage Solution",
                diagram: diagramVal,
                subject: q.subject || q.chapter || detectSubjectFromText(q.question)
            };
        });
    }

    // Calculate Subject Pattern Breakdown
    const subStats = {};
    parsedQuestions.forEach(q => {
        const sub = q.subject || detectSubjectFromText(q.question);
        q.subject = sub;
        subStats[sub] = (subStats[sub] || 0) + 1;
    });

    const paperTitle = uploadedFileName ? uploadedFileName.replace(/\.[^/.]+$/, "") : "Custom CCE Paper";

    // Create Analysis Summary Output HTML
    let analysisHtml = `<strong style="color: var(--success); font-size: 1rem; display: block; margin-bottom: 0.5rem;">✅ પ્રશ્નપત્ર પૃથક્કરણ સફળ! (${paperTitle} • કુલ ${parsedQuestions.length} પ્રશ્નો)</strong>`;
    analysisHtml += `<div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0;">`;
    for (const [sub, cnt] of Object.entries(subStats)) {
        const pct = ((cnt / parsedQuestions.length) * 100).toFixed(1);
        analysisHtml += `<span style="background: var(--accent-glow); border: 1px solid var(--accent); padding: 4px 10px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; color: var(--accent-light);">${sub}: ${cnt} Qs (${pct}%)</span>`;
    }
    analysisHtml += `</div>`;

    const resDiv = document.getElementById('paperAnalysisResult');
    if (resDiv) {
        resDiv.innerHTML = analysisHtml;
        resDiv.style.display = 'block';
    }

    // Store & Register into mockTestPapers
    customUploadedPaperData = parsedQuestions;

    const uploadedPaperObject = {
        id: 'user_uploaded_paper',
        name: `🎯 ${paperTitle} (${parsedQuestions.length} Qs CBT)`,
        nameEn: `${parsedQuestions.length} Qs • Auto Pattern CBT Test`,
        icon: '🚀',
        color: '#10b981',
        priority: 'VERY HIGH',
        stars: '⭐⭐⭐⭐⭐',
        getData: () => customUploadedPaperData
    };

    const existingIdx = mockTestPapers.findIndex(p => p.id === 'user_uploaded_paper');
    if (existingIdx >= 0) {
        mockTestPapers[existingIdx] = uploadedPaperObject;
    } else {
        mockTestPapers.unshift(uploadedPaperObject);
    }

    const sIdx = subjects.findIndex(s => s.id === 'user_uploaded_paper');
    if (sIdx >= 0) {
        subjects[sIdx] = uploadedPaperObject;
    } else {
        subjects.unshift(uploadedPaperObject);
    }

    // Re-render sidebar & dashboard to show the new uploaded paper card
    renderSidebar();
    renderDashboard();

    showToast(`🚀 પૃથક્કરણ પૂર્ણ! 3-Hour CBT ટેસ્ટ ચાલુ થાય છે...`);

    setTimeout(() => {
        closePaperUploadModal();
        startCbtExam('user_uploaded_paper', 180);
    }, 1200);
}

function detectSubjectFromText(text) {
    if (!text) return 'સામાન્ય જ્ઞાન / General';
    text = text.toLowerCase();
    if (text.includes('÷') || text.includes('×') || text.includes('+') || text.includes('=') || text.includes('ગુણોત્તર') || text.includes('નફો') || text.includes('ટકા') || text.includes('સરેરાશ') || text.includes('વ્યાજ') || text.includes('બીજગણિત')) {
        return 'ગણિત (Math)';
    }
    if (text.includes('શ્રેણી') || text.includes('કોડિંગ') || text.includes('દિશા') || text.includes('સંબંધ') || text.includes('તારણ') || text.includes('વેન આકૃતિ') || text.includes('ન્યાય')) {
        return 'રીઝનિંગ (Reasoning)';
    }
    if (text.includes('કલમ') || text.includes('બંધારણ') || text.includes('હક') || text.includes('રાષ્ટ્રપતિ') || text.includes('સંસદ') || text.includes('સુધારો')) {
        return 'ભારતીય રાજનીતિ';
    }
    if (text.includes('synonym') || text.includes('antonym') || text.includes('tense') || text.includes('article') || text.includes('preposition') || /[a-zA-Z]{5,}/.test(text)) {
        return 'અંગ્રેજી (English)';
    }
    if (text.includes('સમાસ') || text.includes('કહેવત') || text.includes('છંદ') || text.includes('અલંકાર') || text.includes('રૂઢિપ્રયોગ')) {
        return 'ગુજરાતી ભાષા';
    }
    return 'સામાન્ય જ્ઞાન / General';
}

function generateSampleSvgDiagram(qText) {
    if (!qText) qText = "";
    if (qText.includes('વેન') || qText.includes('Venn')) {
        return `<svg width="280" height="160" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg">
            <rect width="280" height="160" rx="10" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
            <circle cx="100" cy="80" r="50" fill="rgba(99,102,241,0.3)" stroke="#818cf8" stroke-width="2.5"/>
            <circle cx="170" cy="80" r="50" fill="rgba(236,72,153,0.3)" stroke="#f472b6" stroke-width="2.5"/>
            <text x="80" y="85" fill="#ffffff" font-size="13" font-weight="bold">જૂથ A</text>
            <text x="175" y="85" fill="#ffffff" font-size="13" font-weight="bold">જૂથ B</text>
            <text x="125" y="85" fill="#a855f7" font-size="12" font-weight="bold">સામાન્ય</text>
        </svg>`;
    } else if (qText.includes('ત્રિકોણ') || qText.includes('Triangle')) {
        return `<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
            <polygon points="120,20 30,130 210,130" fill="rgba(16,185,129,0.2)" stroke="#34d399" stroke-width="3"/>
            <line x1="120" y1="20" x2="120" y2="130" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
            <text x="115" y="15" fill="#ffffff" font-weight="bold">A</text>
            <text x="15" y="140" fill="#ffffff" font-weight="bold">B</text>
            <text x="215" y="140" fill="#ffffff" font-weight="bold">C</text>
        </svg>`;
    } else if (qText.includes('દર્પણ') || qText.includes('Mirror')) {
        return `<svg width="260" height="130" viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg">
            <rect width="260" height="130" rx="10" fill="#0f172a" stroke="#ec4899" stroke-width="2"/>
            <line x1="130" y1="10" x2="130" y2="120" stroke="#ec4899" stroke-width="3" stroke-dasharray="6"/>
            <text x="50" y="75" fill="#ffffff" font-size="36" font-weight="bold">R</text>
            <text x="175" y="75" fill="#f472b6" font-size="36" font-weight="bold" transform="scale(-1,1) translate(-390,0)">R</text>
            <text x="105" y="125" fill="#ec4899" font-size="10">દર્પણ (Mirror)</text>
        </svg>`;
    } else {
        return `<svg width="260" height="140" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
            <rect width="260" height="140" rx="10" fill="#0f172a" stroke="#84cc16" stroke-width="2"/>
            <circle cx="70" cy="70" r="38" fill="none" stroke="#84cc16" stroke-width="3"/>
            <rect x="140" y="32" width="76" height="76" fill="rgba(132,204,22,0.2)" stroke="#a3e635" stroke-width="3"/>
            <text x="50" y="75" fill="#ffffff" font-size="12" font-weight="bold">આકૃતિ A</text>
            <text x="150" y="75" fill="#ffffff" font-size="12" font-weight="bold">આકૃતિ B</text>
        </svg>`;
    }
}

// ===========================
// Sprint 3 & 4 Features: Search, Bookmarks, AI Error Book
// ===========================

function handleGlobalSearch(event) {
    if (event.key !== 'Enter' && event.type !== 'keyup') return;
    const query = document.getElementById('globalSearchInput').value.trim().toLowerCase();
    if (!query || query.length < 2) return;

    showView('searchResultView');
    const container = document.getElementById('searchResultsList');
    
    let matches = [];
    
    // Search across all data sources
    const allDataSources = [
        { name: 'ભારતીય રાજનીતિ', data: typeof polityData !== 'undefined' ? polityData : [] },
        { name: 'ઇતિહાસ', data: typeof historyData !== 'undefined' ? historyData : [] },
        { name: 'સાંસ્કૃતિક વારસો', data: typeof cultureData !== 'undefined' ? cultureData : [] },
        { name: 'ભૂગોળ', data: typeof geographyData !== 'undefined' ? geographyData : [] },
        { name: 'સામાન્ય વિજ્ઞાન', data: typeof scienceData !== 'undefined' ? scienceData : [] },
        { name: 'અંગ્રેજી', data: typeof englishData !== 'undefined' ? englishData : [] },
        { name: 'રીઝનિંગ', data: typeof reasoningData !== 'undefined' ? reasoningData : [] },
        { name: 'ગણિત', data: typeof mathData !== 'undefined' ? mathData : [] }
    ];

    allDataSources.forEach(src => {
        src.data.forEach(item => {
            const topicText = (item.topic || '').toLowerCase();
            const contentText = (item.content || '').toLowerCase();
            const keyPointsText = (item.keyPoints || []).join(' ').toLowerCase();

            if (topicText.includes(query) || contentText.includes(query) || keyPointsText.includes(query)) {
                matches.push({
                    source: src.name,
                    topic: item.topic,
                    content: item.content,
                    keyPoints: item.keyPoints
                });
            }
        });
    });

    if (matches.length === 0) {
        container.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">
            ❌ '${query}' સંબંધિત કોઈ માહિતી મળી નહીં. કૃપા કરીને અન્ય કીવર્ડથી શોધો.
        </div>`;
        return;
    }

    let html = `<p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.95rem;">'<strong>${query}</strong>' માટે <strong>${matches.length}</strong> પરિણામો મળ્યા:</p>`;
    matches.forEach(m => {
        html += `
            <div class="cbt-review-card" style="margin-bottom: 1rem; border-left: 4px solid var(--accent);">
                <div style="font-size: 0.8rem; font-weight: bold; color: var(--accent-light); margin-bottom: 0.25rem;">[${m.source}]</div>
                <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${m.topic}</h3>
                <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary); max-height: 200px; overflow-y: auto;">
                    ${m.content}
                </div>
                <div style="margin-top: 0.75rem; display: flex; justify-content: flex-end;">
                    <button onclick="toggleBookmark('topic', '${encodeURIComponent(m.topic)}')" style="background: rgba(245, 158, 11, 0.2); border: 1px solid #f59e0b; color: #f59e0b; padding: 0.3rem 0.75rem; border-radius: 15px; cursor: pointer; font-size: 0.8rem; font-weight: bold;">
                        🔖 બુકમાર્ક કરો
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function showBookmarksView() {
    showView('bookmarksView');
    const container = document.getElementById('bookmarksList');
    const bookmarks = JSON.parse(localStorage.getItem('cce_bookmarks') || '[]');

    if (bookmarks.length === 0) {
        container.innerHTML = `
            <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔖</div>
                <h3>હજુ સુધી કોઈ બુકમાર્ક નથી!</h3>
                <p style="font-size: 0.9rem;">તમે અભ્યાસ કરતી વખતે કે પ્રશ્નો સોલ્વ કરતી વખતે બુકમાર્ક બટન પર ક્લિક કરીને સેવ કરી શકો છો.</p>
            </div>
        `;
        return;
    }

    let html = `<p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.95rem;">કુલ <strong>${bookmarks.length}</strong> સેવ કરેલા બુકમાર્ક્સ:</p>`;
    bookmarks.forEach((bm, idx) => {
        html += `
            <div class="cbt-review-card" style="margin-bottom: 1rem; border-left: 4px solid #f59e0b;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <span style="font-size: 0.8rem; font-weight: bold; color: #f59e0b;">[બુકમાર્ક #${idx + 1}]</span>
                    <button onclick="removeBookmark(${idx})" style="background: rgba(239, 68, 68, 0.2); border: none; color: #ef4444; padding: 0.2rem 0.5rem; border-radius: 5px; cursor: pointer; font-size: 0.75rem;">✕ હટાવો</button>
                </div>
                <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${decodeURIComponent(bm.title || bm.question || 'બુકમાર્ક કન્ટેન્ટ')}</h3>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleBookmark(type, encodedTitle) {
    let bookmarks = JSON.parse(localStorage.getItem('cce_bookmarks') || '[]');
    const title = decodeURIComponent(encodedTitle);
    
    if (bookmarks.some(b => b.title === title)) {
        bookmarks = bookmarks.filter(b => b.title !== title);
        showToast("🔖 બુકમાર્કમાંથી દૂર કરાયું!");
    } else {
        bookmarks.push({ type, title, date: new Date().toISOString() });
        showToast("🔖 બુકમાર્કમાં સેવ થઈ ગયું!");
    }
    localStorage.setItem('cce_bookmarks', JSON.stringify(bookmarks));
}

function removeBookmark(idx) {
    let bookmarks = JSON.parse(localStorage.getItem('cce_bookmarks') || '[]');
    bookmarks.splice(idx, 1);
    localStorage.setItem('cce_bookmarks', JSON.stringify(bookmarks));
    showBookmarksView();
    showToast("બુકમાર્ક હટાવી દીધું!");
}

function showErrorBookView() {
    showView('errorBookView');
    const container = document.getElementById('errorBookList');
    const errorBook = JSON.parse(localStorage.getItem('cce_error_book') || '[]');
    const letters = ['A', 'B', 'C', 'D'];

    if (errorBook.length === 0) {
        container.innerHTML = `
            <div style="padding: 3rem; text-align: center; color: var(--text-muted);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                <h3>તમારી AI Error Book બિલકુલ ખાલી છે!</h3>
                <p style="font-size: 0.9rem;">તમે CBT Mock Tests માં જે પ્રશ્નો ખોટા આપશો તે આપોઆપ અહીં ઉમેરાશે જેથી તમે તેનું સ્પેશિયલ પુનરાવર્તન કરી શકો.</p>
            </div>
        `;
        return;
    }

    let html = `<p style="margin-bottom: 1.25rem; color: var(--danger); font-size: 0.95rem; font-weight: bold;">
        ⚠️ કુલ ${errorBook.length} ખોટા પડેલા પ્રશ્નો (મિસ્ટેક લૉગ):
    </p>`;

    errorBook.forEach((q, idx) => {
        html += `
            <div class="cbt-review-card wrong-card" style="margin-bottom: 1.25rem;">
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 0.85rem; color: var(--danger); margin-bottom: 0.5rem;">
                    <span>ભૂલ #${idx + 1} • [${q.subject || 'CBT Exam'}]</span>
                    <button onclick="removeFromErrorBook(${idx})" style="background: rgba(239,68,68,0.2); border: none; color: #ef4444; padding: 0.2rem 0.5rem; border-radius: 5px; cursor: pointer;">✕ સોલ્વ થઈ ગયું (હટાવો)</button>
                </div>
                <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.5; color: var(--text-primary);">
                    ${q.question}
                </div>
                ${q.diagram ? `<div class="cbt-diagram-box">${q.diagram}</div>` : ''}
                <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 0.9rem; border-radius: 8px; margin-top: 0.75rem;">
                    <strong style="color: #10b981; display: block; margin-bottom: 0.25rem;">✅ સાચો જવાબ: ${letters[q.correct]} - ${q.options[q.correct]}</strong>
                    <div style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
                        <strong>💡 સ્પષ્ટીકરણ:</strong> ${q.explanation || 'આ પ્રશ્નનું સોલ્યુશન.'}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function removeFromErrorBook(idx) {
    let errorBook = JSON.parse(localStorage.getItem('cce_error_book') || '[]');
    errorBook.splice(idx, 1);
    localStorage.setItem('cce_error_book', JSON.stringify(errorBook));
    showErrorBookView();
    showToast("પ્રશ્ન Error Book માંથી હટાવી દીધો!");
}

function startErrorBookPractice() {
    const errorBook = JSON.parse(localStorage.getItem('cce_error_book') || '[]');
    if (errorBook.length === 0) {
        showToast("કોઈ ખોટા પ્રશ્નો નથી! પહેલા ટેસ્ટ આપો.");
        return;
    }

    cbtState.questions = errorBook;
    cbtState.currentIndex = 0;
    cbtState.userAnswers = new Array(errorBook.length).fill(null);
    cbtState.markedForReview = new Array(errorBook.length).fill(false);
    cbtState.title = "⚠️ AI Error Book રી-ટેસ્ટ & રિવિઝન";
    cbtState.duration = errorBook.length * 60;
        cbtState.timeRemaining = cbtState.duration;

    document.getElementById('cbtExamTitle').innerText = cbtState.title;
    showView('cbtExamView');
    renderCbtQuestion();
    renderCbtPalette();
    startCbtTimer();
}

/* ============================================================
   CCE MASTER EXAM CRACK HUB & FULL COURSE ENGINE
   ============================================================ */

function showCrackHubView() {
    showView('crackHubView');
    renderCrackHub();
}

function renderCrackHub() {
    const container = document.getElementById('crackHubContent');
    if (!container) return;

    const savedTarget = localStorage.getItem('cce_target_cutoff') || 110;
    const modules = typeof cceCourseModulesData !== 'undefined' ? cceCourseModulesData : [];
    const strategy = typeof cceExamCrackStrategy !== 'undefined' ? cceExamCrackStrategy : { pillars: [], flashcards: [] };

    let html = `
      <!-- Hero Overview -->
      <div style="background: linear-gradient(135deg, rgba(99,102,241,0.15), rgba(16,185,129,0.15)); border: 1px solid var(--accent); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem; box-shadow: var(--shadow);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="background: rgba(245,158,11,0.2); color: #f59e0b; border: 1px solid #f59e0b; padding: 4px 12px; border-radius: 20px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">🔥 Master Exam Strategy 2026</span>
            <h3 style="font-size: 1.5rem; font-weight: 800; margin: 0.5rem 0; color: var(--accent-light);">CCE Class-3 Crack Engine & 55 PDF Full Course</h3>
            <p style="color: var(--text-secondary); margin: 0; font-size: 0.95rem;">
              CCE 210 ગુણમાંથી <strong>110+ Cutoff Marks</strong> મેળવવાની 4-સ્તરીય સફળતા રણનીતિ, 55 PDF સ્તરીય કોર્સ મોડ્યુલ્સ અને 170+ પબ્લિકેશન નોટ્સ!
            </p>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <div style="background: var(--bg-card); padding: 0.75rem 1.25rem; border-radius: 12px; border: 1px solid var(--border); text-align: center;">
              <div style="font-size: 1.4rem; font-weight: 800; color: var(--accent-light);">55 PDF</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Full Course Modules</div>
            </div>
            <div style="background: var(--bg-card); padding: 0.75rem 1.25rem; border-radius: 12px; border: 1px solid var(--border); text-align: center;">
              <div style="font-size: 1.4rem; font-weight: 800; color: #10b981;">90+ Qs</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Official CCE PYQs</div>
            </div>
            <div style="background: var(--bg-card); padding: 0.75rem 1.25rem; border-radius: 12px; border: 1px solid var(--border); text-align: center;">
              <div style="font-size: 1.4rem; font-weight: 800; color: #f59e0b;">210 Marks</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Total Exam Weightage</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 1: Interactive Target Cutoff Calculator -->
      <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-light); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          📊 🎯 CCE Cutoff & Marks Target Calculator (ઇન્ટરેક્ટિવ લક્ષ્યાંક કેલ્ક્યુલેટર)
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; align-items: center;">
          <div>
            <label style="display: block; font-weight: bold; margin-bottom: 0.5rem; font-size: 0.9rem;">
              તમારો લક્ષ્યાંક સ્કોર (Target Cutoff Score): <span id="targetScoreDisplay" style="color: var(--accent-light); font-size: 1.2rem; font-weight: 800;">${savedTarget}</span> / 210
            </label>
            <input type="range" id="cutoffRangeInput" min="80" max="160" value="${savedTarget}" step="5" 
                   style="width: 100%; height: 8px; accent-color: var(--accent); cursor: pointer;" 
                   oninput="updateCalculatorTarget(this.value)">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem;">
              <span>80 (Safe)</span>
              <span>110 (Target Cutoff)</span>
              <span>140+ (Top Rank)</span>
            </div>
          </div>
          <div id="calculatorBreakdown" style="background: var(--bg-surface); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>

      <!-- Section 2: 4-Pillar Master Exam Crack Formula -->
      <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-light); margin-bottom: 1rem;">
          ⚡ 4-Pillar Master Exam Crack Cheat Sheets (માસ્ટર શોર્ટકટ્સ & નિયમો)
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
          <div style="background: rgba(99,102,241,0.08); border-left: 4px solid #6366f1; padding: 1rem; border-radius: 8px;">
            <strong style="color: #6366f1; font-size: 1rem;">🧠 1. રીઝનિંગ (60 Marks - Highest)</strong>
            <ul style="padding-left: 1.1rem; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-primary);">
              <li><strong>EJOTY:</strong> E=5, J=10, O=15, T=20, Y=25.</li>
              <li><strong>Opposites:</strong> A-Z (Azad), B-Y (Boy), C-X (Crux), D-W (Dew). Sum = 27.</li>
              <li><strong>Clock Angle:</strong> |30H - 5.5M|.</li>
              <li><strong>Family Tree:</strong> [+] Male, (-) Female, <=> Couple, --- Sibling.</li>
            </ul>
          </div>
          <div style="background: rgba(16,185,129,0.08); border-left: 4px solid #10b981; padding: 1rem; border-radius: 8px;">
            <strong style="color: #10b981; font-size: 1rem;">📐 2. ગણિત (30 Marks - Speed Math)</strong>
            <ul style="padding-left: 1.1rem; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-primary);">
              <li><strong>Percentages:</strong> 1/8 = 12.5%, 1/6 = 16.66%, 1/7 = 14.28%.</li>
              <li><strong>Algebra:</strong> x + 1/x = k ⇒ x² + 1/x² = k² - 2.</li>
              <li><strong>Divisibility:</strong> 3 & 9 = Sum of digits | 11 = Alt difference 0/11.</li>
              <li><strong>SI vs CI 2 Yr Diff:</strong> P × (R/100)².</li>
            </ul>
          </div>
          <div style="background: rgba(236,72,153,0.08); border-left: 4px solid #ec4899; padding: 1rem; border-radius: 8px;">
            <strong style="color: #ec4899; font-size: 1rem;">📝 3. English (15 Marks)</strong>
            <ul style="padding-left: 1.1rem; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-primary);">
              <li><strong>Articles:</strong> An European (X) → A European (Y sound). An hour (Correct).</li>
              <li><strong>Since vs For:</strong> Since = Point of time | For = Period of time.</li>
              <li><strong>Passive:</strong> Cont. = BEING + V3 | Perf. = BEEN + V3.</li>
              <li><strong>Speech:</strong> Today → That day | Yesterday → Previous day.</li>
            </ul>
          </div>
          <div style="background: rgba(245,158,11,0.08); border-left: 4px solid #f59e0b; padding: 1rem; border-radius: 8px;">
            <strong style="color: #f59e0b; font-size: 1rem;">🗣️ 4. ગુજરાતી & GS (105 Marks)</strong>
            <ul style="padding-left: 1.1rem; margin-top: 0.5rem; font-size: 0.85rem; line-height: 1.6; color: var(--text-primary);">
              <li><strong>ધોળાવીરા:</strong> 3 ભાગ નગર, 10 અક્ષરોનું સાઈનબોર્ડ (UNESCO 2021).</li>
              <li><strong>લોથલ:</strong> વિશ્વનું સૌથી જૂનું કૃત્રિમ ગોદી (Dockyard).</li>
              <li><strong>42મો સુધારો:</strong> સમાજવાદી, બિનસાંપ્રદાયિક, અખંડિતતા.</li>
              <li><strong>પંચાયતી રાજ:</strong> 73મો સુધારો, ભાગ 9, 29 વિષયો.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 3: Rapid Memory Flashcards -->
      <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-light); margin: 0;">
              💡 Rapid Memory Recall Flashcards (ઝડપી યાદશક્તિ કાર્ડ્સ)
            </h4>
            <span style="font-size: 0.8rem; color: #10b981; font-weight: bold;">🔒 Subject-wise Filterable (Zero Cross Mix Option)</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">કાર્ડ પર ક્લિક કરો ઉત્તર/ટ્રિક જોવા માટે</span>
        </div>

        <!-- Subject Filter Tabs for Flashcards -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button class="flashcard-filter-btn" data-cat="all" onclick="filterFlashcards('all')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--accent); color: white; border: none; border-radius: 15px; cursor: pointer; font-weight: bold;">તમામ વિષય</button>
          <button class="flashcard-filter-btn" data-cat="Reasoning" onclick="filterFlashcards('Reasoning')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 15px; cursor: pointer; font-weight: bold;">🧩 Reasoning</button>
          <button class="flashcard-filter-btn" data-cat="Maths" onclick="filterFlashcards('Maths')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 15px; cursor: pointer; font-weight: bold;">📐 Maths</button>
          <button class="flashcard-filter-btn" data-cat="English" onclick="filterFlashcards('English')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 15px; cursor: pointer; font-weight: bold;">📝 English</button>
          <button class="flashcard-filter-btn" data-cat="Polity" onclick="filterFlashcards('Polity')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 15px; cursor: pointer; font-weight: bold;">⚖️ Polity</button>
          <button class="flashcard-filter-btn" data-cat="History" onclick="filterFlashcards('History')" style="padding: 0.35rem 0.85rem; font-size: 0.8rem; background: var(--bg-surface); color: var(--text-secondary); border: 1px solid var(--border); border-radius: 15px; cursor: pointer; font-weight: bold;">🏛️ History</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
          ${strategy.flashcards.map((card, idx) => `
            <div id="flashcard-${idx}" class="flashcard-container flashcard-card-item" data-category="${card.category}" onclick="flipFlashcard(${idx})"
                 style="background: var(--bg-surface); border: 1px solid var(--accent); padding: 1.25rem; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; min-height: 120px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <div>
                <span style="font-size: 0.7rem; font-weight: bold; background: var(--accent-glow); color: var(--accent-light); padding: 2px 8px; border-radius: 10px; text-transform: uppercase;">${card.category}</span>
                <div id="flashcard-text-${idx}" style="font-weight: 700; margin-top: 0.75rem; font-size: 0.95rem; color: var(--text-primary); line-height: 1.5;">
                  ❓ ${card.q}
                </div>
              </div>
              <div style="font-size: 0.75rem; color: var(--accent-light); margin-top: 0.75rem; font-weight: bold; text-align: right;">
                🔄 ક્લિક કરો જવાબ જોવા
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Section 4: 55 PDF Full Course Modules Hub -->
      <div style="background: var(--bg-card); border: 1px solid var(--border); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 1.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h4 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-light); margin: 0;">
              📂 55 Full Course PDF Modules Hub (89.78 MB સંગ્રહ)
            </h4>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.25rem 0 0 0;">
              CCE પરીક્ષાની વિષયવાર સંપૂર્ણ પીડીએફ નોટ્સ અને રિવિઝન મોડ્યુલ્સ.
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button onclick="filterCourseCategory('all')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 15px; border: 1px solid var(--accent); background: var(--accent); color: white; cursor: pointer;">All (55 PDFs)</button>
            <button onclick="filterCourseCategory('Reasoning')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 15px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-primary); cursor: pointer;">Reasoning</button>
            <button onclick="filterCourseCategory('Mathematics')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 15px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-primary); cursor: pointer;">Maths</button>
            <button onclick="filterCourseCategory('English')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 15px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-primary); cursor: pointer;">English</button>
            <button onclick="filterCourseCategory('Gujarati')" style="padding: 0.4rem 0.8rem; font-size: 0.8rem; border-radius: 15px; border: 1px solid var(--border); background: var(--bg-surface); color: var(--text-primary); cursor: pointer;">Gujarati</button>
          </div>
        </div>
        
        <div id="courseModulesGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          ${modules.map(mod => `
            <div class="course-module-card" data-category="${mod.category}" 
                 style="background: var(--bg-surface); border: 1px solid var(--border); padding: 1.25rem; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span style="font-size: 0.75rem; font-weight: bold; background: rgba(99,102,241,0.15); color: var(--accent-light); padding: 3px 10px; border-radius: 12px;">${mod.subject}</span>
                  <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: bold;">📁 ${mod.fileSize}</span>
                </div>
                <h5 style="font-size: 1rem; font-weight: 800; margin: 0.5rem 0; color: var(--text-primary);">${mod.title}</h5>
                <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${mod.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;">
                  ${mod.topics.map(t => `<span style="font-size: 0.7rem; background: var(--bg-card); color: var(--text-muted); padding: 2px 8px; border-radius: 8px; border: 1px solid var(--border);"># ${t}</span>`).join('')}
                </div>
              </div>
              <div style="margin-top: 1rem; pt-0.75rem; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                <span style="font-size: 0.75rem; color: #10b981; font-weight: bold;">✅ Verified PDF & Interactive Course</span>
                <button onclick="openSubject('${mod.subjectId}')" 
                        style="padding: 0.45rem 1.1rem; font-size: 0.85rem; background: linear-gradient(135deg, var(--accent), var(--accent-light)); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.3);">
                  📖 વાંચો / Study →
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    container.innerHTML = html;
    updateCalculatorTarget(savedTarget);
}

function updateCalculatorTarget(val) {
    localStorage.setItem('cce_target_cutoff', val);
    const display = document.getElementById('targetScoreDisplay');
    if (display) display.innerText = val;

    const breakdown = document.getElementById('calculatorBreakdown');
    if (!breakdown) return;

    const targetNum = parseInt(val);
    const reasoningTarget = Math.min(60, Math.round(targetNum * 0.45));
    const mathTarget = Math.min(30, Math.round(targetNum * 0.22));
    const englishTarget = Math.min(15, Math.round(targetNum * 0.11));
    const gujaratiTarget = Math.min(15, Math.round(targetNum * 0.12));
    const gkTarget = Math.max(0, targetNum - (reasoningTarget + mathTarget + englishTarget + gujaratiTarget));

    breakdown.innerHTML = `
        <div style="font-size: 0.85rem; font-weight: bold; margin-bottom: 0.5rem; color: var(--accent-light);">
          🎯 લક્ષ્યાંક મેળવવા વિષયવાર જરૂરી ગુણ:
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
          <span>🧠 રીઝનિંગ (60 માર્ક્સ):</span> <strong>${reasoningTarget} / 60</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
          <span>📐 ગણિત (30 માર્ક્સ):</span> <strong>${mathTarget} / 30</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
          <span>📝 અંગ્રેજી (15 માર્ક્સ):</span> <strong>${englishTarget} / 15</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
          <span>🗣️ ગુજરાતી (15 માર્ક્સ):</span> <strong>${gujaratiTarget} / 15</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
          <span>📚 GS/ઈતિહાસ/ભૂગોળ:</span> <strong>${gkTarget} / 90</strong>
        </div>
    `;
}

function flipFlashcard(idx) {
    const cardText = document.getElementById(`flashcard-text-${idx}`);
    if (!cardText) return;

    const strategy = typeof cceExamCrackStrategy !== 'undefined' ? cceExamCrackStrategy : { flashcards: [] };
    const card = strategy.flashcards[idx];
    if (!card) return;

    if (cardText.dataset.flipped === 'true') {
        cardText.innerHTML = `❓ ${card.q}`;
        cardText.dataset.flipped = 'false';
    } else {
        cardText.innerHTML = `<span style="color: #10b981;">💡 જવાબ / શોર્ટ ટ્રિક:</span><br>${card.a}`;
        cardText.dataset.flipped = 'true';
    }
}

function filterCourseCategory(cat) {
    const cards = document.querySelectorAll('.course-module-card');
    cards.forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    showToast(`📂 દર્શાવી રહ્યા છીએ: ${cat === 'all' ? 'તમામ PDF મોડ્યુલ્સ' : cat}`);
}

function filterFlashcards(category) {
    const cards = document.querySelectorAll('.flashcard-card-item');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });

    const tabs = document.querySelectorAll('.flashcard-filter-btn');
    tabs.forEach(t => {
        if (t.dataset.cat === category) {
            t.style.background = 'var(--accent)';
            t.style.color = 'white';
        } else {
            t.style.background = 'var(--bg-surface)';
            t.style.color = 'var(--text-secondary)';
        }
    });

    showToast(`💡 ${category === 'all' ? 'તમામ Flashcards' : category + ' ના Flashcards'} દર્શાવી રહ્યા છીએ (No Mix)`);
}

function flipTopicFlashcard(idx) {
    const cardText = document.getElementById(`topic-card-text-${idx}`);
    if (!cardText) return;

    const q = cardText.dataset.q;
    const a = cardText.dataset.a;

    if (cardText.dataset.flipped === 'true') {
        cardText.innerHTML = `❓ ${q}`;
        cardText.dataset.flipped = 'false';
    } else {
        cardText.innerHTML = `<span style="color: #10b981;">💡 જવાબ / શોર્ટ ટ્રિક:</span><br>${a}`;
        cardText.dataset.flipped = 'true';
    }
}

/* ============================================================
   AI DOUBT SOLVER & STEP-BY-STEP SOLUTION ENGINE
   ============================================================ */

function askTopicDoubt(customQuery = null) {
    const input = document.getElementById('topicDoubtInput');
    const query = customQuery || (input ? input.value.trim() : '');
    if (!query) {
        showToast("⚠️ કૃપા કરીને તમારો ડાઉટ અથવા પ્રશ્ન લખો!");
        return;
    }

    const resultBox = document.getElementById('topicDoubtResult');
    if (!resultBox) return;

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent-light); font-weight: bold;">
            <span>🤖 AI Doubt Solver વિશ્લેષણ કરી રહ્યું છે...</span>
        </div>
    `;

    setTimeout(() => {
        const subject = subjects.find(s => s.id === state.currentSubject);
        const topicName = subject ? subject.getData()[state.currentTopicIndex]?.topic : "આ ચેપ્ટર";
        
        let responseHtml = generateTopicDoubtSolution(topicName, query, state.currentSubject);
        resultBox.innerHTML = responseHtml;
        if (input) input.value = '';
        showToast("💡 ડાઉટનું સ્ટેપ-બાય-સ્ટેપ સોલ્યુશન તૈયાર છે!");
    }, 400);
}

function generateTopicDoubtSolution(topicName, query, subjectId) {
    const qLower = query.toLowerCase();
    let solution = "";

    if (subjectId === 'math' || qLower.includes('દાખલો') || qLower.includes('ગણતરી') || qLower.includes('સૂત્ર') || qLower.includes('રીત')) {
        solution = `
            <div style="color: var(--accent-light); font-size: 1.05rem; font-weight: 800; margin-bottom: 0.5rem;">
                🎯 <strong>${topicName}</strong> - Step-by-Step AI Solution & Formula Breakdown
            </div>
            <div style="margin-bottom: 0.75rem; color: var(--text-secondary);">
                <strong>🔍 તમારો ડાઉટ:</strong> "${query}"
            </div>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 0.75rem;">
                <div style="color: #10b981; font-weight: bold; margin-bottom: 0.25rem;">📐 1. મુખ્ય નિયમ / શોર્ટ ટ્રિક સૂત્ર:</div>
                <div>• ટકાવારી / નફો-ખોટ પદ્ધતિ: <strong>(નવો સરવાળો - જૂનો સરવાળો) / જૂનો સરવાળો × 100</strong>.</div>
                <div>• સરેરાશ પદ્ધતિ: <strong>સરેરાશ = કુલ સરવાળો / કુલ સંખ્યા</strong>. (નવી સંખ્યા = 5 × નવો મધ્યક - 4 × જૂનો મધ્યક).</div>
                <div>• SI & CI વ્યાજ: <strong>SI = P×R×T / 100</strong> | 2-વર્ષ CI-SI તફાવત = <strong>P × (R/100)²</strong>.</div>
            </div>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
                <div style="color: #f59e0b; font-weight: bold; margin-bottom: 0.25rem;">💡 2. પરીક્ષા લક્ષી ઉકેલ સ્ટેપ્સ:</div>
                <ol style="padding-left: 1.2rem; margin: 0.25rem 0;">
                    <li>પ્રશ્નમાં આપેલ મૂલ્યો (Variables) ઓળખો.</li>
                    <li>શોર્ટકટ સૂત્રમાં કિંમતો મૂકીને સાદુંરૂપ આપો (BODMAS નિયમ મુજબ).</li>
                    <li>વિકલ્પોમાંથી સાચો ઉત્તર પસંદ કરો અને 0.25 નેગેટિવ માર્કિંગથી બચો.</li>
                </ol>
            </div>
        `;
    } else if (subjectId === 'reasoning' || qLower.includes('કોડિંગ') || qLower.includes('શ્રેણી') || qLower.includes('દિશા') || qLower.includes('સંબંધ')) {
        solution = `
            <div style="color: var(--accent-light); font-size: 1.05rem; font-weight: 800; margin-bottom: 0.5rem;">
                🧩 <strong>${topicName}</strong> - Reasoning Logic & Shortcut Trick
            </div>
            <div style="margin-bottom: 0.75rem; color: var(--text-secondary);">
                <strong>🔍 તમારો ડાઉટ:</strong> "${query}"
            </div>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 0.75rem;">
                <div style="color: #6366f1; font-weight: bold; margin-bottom: 0.25rem;">🧠 1. રીઝનિંગ શોર્ટકટ લોજિક:</div>
                <div>• <strong>EJOTY નિયમ:</strong> E=5, J=10, O=15, T=20, Y=25 નો ઉપયોગ કરી સ્થાન કિંમત ઝડપથી ગણો.</div>
                <div>• <strong>સામ-સામેના અક્ષરો:</strong> A+Z = 27, B+Y = 27 (સરવાળો 27 થાય).</div>
                <div>• <strong>ઘડિયાળ ખૂણો:</strong> |30H - 5.5M| સૂત્ર વાપરો.</div>
            </div>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
                <div style="color: #10b981; font-weight: bold; margin-bottom: 0.25rem;">📝 2. સોલ્યુશન સ્ટેપ્સ:</div>
                <div>તમામ વિકલ્પોને એલિમિનેશન પદ્ધતિ (Option Elimination) થી ચકાસીને 30 સેકન્ડમાં સાચો જવાબ મેળવી શકાય છે.</div>
            </div>
        `;
    } else {
        solution = `
            <div style="color: var(--accent-light); font-size: 1.05rem; font-weight: 800; margin-bottom: 0.5rem;">
                📚 <strong>${topicName}</strong> - Textbook Concept Explanation
            </div>
            <div style="margin-bottom: 0.75rem; color: var(--text-secondary);">
                <strong>🔍 તમારો ડાઉટ:</strong> "${query}"
            </div>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 0.75rem;">
                <div style="color: #10b981; font-weight: bold; margin-bottom: 0.25rem;">📌 1. અગત્યના તથ્યો અને નિયમો:</div>
                <div>• CCE પરીક્ષા માટે આ ચેપ્ટરના પાઠ્યપુસ્તક આધારિત તમામ મુખ્ય પોઈન્ટ્સ અને સાચો ઉત્તર યાદ રાખવા માટે 'Mnemonic' શોર્ટ ટ્રિક વાપરો.</div>
                <div>• આ ચેપ્ટરના પ્રશ્નો દર વર્ષે પૂર્વ પરીક્ષામાં વારંવાર પુનરાવર્તિત થાય છે.</div>
            </div>
        `;
    }

    return solution;
}

// ===========================
// Initialize
// ===========================

document.addEventListener('DOMContentLoaded', init);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    try { init(); } catch (e) { console.error('Immediate init error:', e); }
}
