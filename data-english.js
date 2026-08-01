const englishData = [
  {
    topic: "Grammar & Parts of Speech",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>In English Grammar, words are categorized into <strong>8 Parts of Speech</strong> based on their function in a sentence. (અંગ્રેજી વ્યાકરણમાં શબ્દોના ૮ મૂળભૂત પ્રકારો છે):</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📝 8 Parts of Speech Detailed Summary Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 10px; border: 1px solid var(--border);">Part of Speech</th>
              <th style="padding: 10px; border: 1px solid var(--border);">Definition & Function</th>
              <th style="padding: 10px; border: 1px solid var(--border);">Examples & Types</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૧. Noun (નામ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Name of a person, place, thing, or abstract idea.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">
                • <strong>Proper Noun:</strong> India, Rahul<br>
                • <strong>Common Noun:</strong> City, Book<br>
                • <strong>Collective Noun:</strong> Army, Team<br>
                • <strong>Material Noun:</strong> Gold, Water<br>
                • <strong>Abstract Noun:</strong> Honesty, Truth
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૨. Pronoun (સર્વનામ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Replaces a Noun to avoid repetition.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">I, We, You, He, She, It, They, Himself, Which, Who.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૩. Verb (ક્રિયાપદ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Expresses an action, state, or occurrence.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Play, Write, Is, Am, Are, Have, Become, Run.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૪. Adjective (વિશેષણ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Modifies or describes a Noun or Pronoun.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Good boy, Honest man, Red pen, Tall tree.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૫. Adverb (ક્રિયા વિશેષણ)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Modifies a Verb, Adjective, or another Adverb.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Runs <strong>fast</strong>, Writes <strong>neatly</strong>, Very high.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૬. Preposition (નામયોગી)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Shows relationship of position, time, or direction.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">In, On, At, By, Under, Between, Among, Into, Onto.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૭. Conjunction (સંયોજક)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Joins words, phrases, or clauses.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">And, But, Or, Because, Although, Unless, Until.</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid var(--border); font-weight: bold;">૮. Interjection (કેવળપ્રયોગી)</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Expresses sudden strong emotion or feelings.</td>
              <td style="padding: 10px; border: 1px solid var(--border);">Hurrah!, Alas!, Wow!, Oh!, Ouch!</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "Noun has 5 types: Proper, Common, Collective, Material, Abstract.",
      "Pronoun replaces a noun to avoid repetition.",
      "Adjective describes Noun | Adverb describes Verb/Adjective.",
      "Preposition indicates position/time (in, on, at).",
      "Conjunction connects words or sentences (FANBOYS: For, And, Nor, But, Or, Yet, So)."
    ],
    mnemonics: "8 Parts of Speech: N-P-V-A-A-P-C-I"
  },
  {
    topic: "Tenses (૧૨ કાળ અને રચના)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>English in CCE exams tests all <strong>12 Tenses</strong>. Below is the complete master table of structures, signal keywords, and examples for rapid revision:</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📊 12 Tenses Master Comparison Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">Tense Name</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Sentence Structure</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Signal Keywords</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Example Sentence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">1. Simple Present</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + V1 (s/es) + Object</td>
              <td style="padding: 8px; border: 1px solid var(--border);">daily, always, usually, often</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>plays</strong> cricket daily.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">2. Present Continuous</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + am/is/are + V-ing + Obj</td>
              <td style="padding: 8px; border: 1px solid var(--border);">now, look!, listen!, at present</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Look! She <strong>is dancing</strong>.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">3. Present Perfect</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + have/has + V3 + Obj</td>
              <td style="padding: 8px; border: 1px solid var(--border);">just, already, yet, recently</td>
              <td style="padding: 8px; border: 1px solid var(--border);">I <strong>have just finished</strong> my work.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">4. Present Perf. Cont.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Sub + have/has + been + V-ing</td>
              <td style="padding: 8px; border: 1px solid var(--border);">since, for + time duration</td>
              <td style="padding: 8px; border: 1px solid var(--border);">She <strong>has been working</strong> since 2015.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">5. Simple Past</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + V2 + Object</td>
              <td style="padding: 8px; border: 1px solid var(--border);">yesterday, ago, last year/week</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>visited</strong> Surat yesterday.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">6. Past Continuous</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + was/were + V-ing + Obj</td>
              <td style="padding: 8px; border: 1px solid var(--border);">at that time, while, when</td>
              <td style="padding: 8px; border: 1px solid var(--border);">I <strong>was reading</strong> when he came.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">7. Past Perfect</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + had + V3 + Object</td>
              <td style="padding: 8px; border: 1px solid var(--border);">before, after, by the time</td>
              <td style="padding: 8px; border: 1px solid var(--border);">The train <strong>had left</strong> before I reached.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">8. Past Perf. Cont.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + had + been + V-ing</td>
              <td style="padding: 8px; border: 1px solid var(--border);">for... when..., had been...</td>
              <td style="padding: 8px; border: 1px solid var(--border);">They <strong>had been living</strong> there for 5 yrs.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">9. Simple Future</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + shall/will + V1 + Obj</td>
              <td style="padding: 8px; border: 1px solid var(--border);">tomorrow, next week, soon</td>
              <td style="padding: 8px; border: 1px solid var(--border);">I <strong>will call</strong> you tomorrow.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">10. Future Continuous</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + shall/will + be + V-ing</td>
              <td style="padding: 8px; border: 1px solid var(--border);">at this time tomorrow</td>
              <td style="padding: 8px; border: 1px solid var(--border);">I <strong>will be travelling</strong> tomorrow.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">11. Future Perfect</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Subject + shall/will + have + V3</td>
              <td style="padding: 8px; border: 1px solid var(--border);">by tomorrow, by 2026</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>will have finished</strong> by 5 PM.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">12. Future Perf. Cont.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Sub + will + have + been + V-ing</td>
              <td style="padding: 8px; border: 1px solid var(--border);">for... by next year...</td>
              <td style="padding: 8px; border: 1px solid var(--border);">I <strong>will have been teaching</strong> for 10 yrs.</td>
            </tr>
          </tbody>
        </table>

        <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1rem; margin-top: 1rem; border-radius: 8px;">
          <strong style="color: #10b981;">💡 Important Rule for Since vs For:</strong><br>
          • <strong>Since:</strong> Point of time (ચોક્કસ સમયબિંદુ) - e.g., <em>since 2015, since Monday, since 8 AM, since morning</em>.<br>
          • <strong>For:</strong> Period of time (સમયગાળો) - e.g., <em>for 2 hours, for 5 years, for 10 days</em>.
        </div>
      </div>
    `,
    keyPoints: [
      "Simple Present: Daily habits, Universal truth (s/es with He/She/It).",
      "Present Perfect: have/has + V3 (just, already, recently).",
      "Since = Point of time (since 2015) | For = Period of time (for 5 years).",
      "Simple Past: V2 form (yesterday, ago, last year).",
      "Past Perfect: had + V3 (Action completed before another past action)."
    ],
    mnemonics: "Since=Point | For=Period"
  },
  {
    topic: "Active & Passive Voice (કર્તરી-કર્મણી)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>In <strong>Active Voice</strong>, the Subject performs the action. In <strong>Passive Voice</strong>, the Object receives the action. Active to Passive structure formula: <strong>Object + Helping Verb + V3 (Past Participle) + by + Subject</strong>.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🔄 Tense-wise Active to Passive Conversion Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">Tense</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Active Voice Example</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Passive Voice Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Simple Present</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>writes</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>is written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Present Continuous</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>is writing</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>is being written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Present Perfect</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>has written</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>has been written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Simple Past</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>wrote</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>was written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Past Continuous</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>was writing</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>was being written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Past Perfect</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>had written</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>had been written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Simple Future</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>will write</strong> a letter.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">A letter <strong>will be written</strong> by him.</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Modals (can/must/may)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">He <strong>can solve</strong> this sum.</td>
              <td style="padding: 8px; border: 1px solid var(--border);">This sum <strong>can be solved</strong> by him.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "Passive formula: Object + Auxiliary Verb + V3 (Past Participle) + by + Subject.",
      "Present Cont. Passive: is/am/are + BEING + V3.",
      "Present Perfect Passive: have/has + BEEN + V3.",
      "Modals Passive: Modal + BE + V3 (can solve → can be solved).",
      "Subject Pronoun to Object Pronoun: I→me, We→us, He→him, She→her, They→them."
    ],
    mnemonics: "Continuous = BEING | Perfect = BEEN"
  },
  {
    topic: "Direct & Indirect Speech (Narration)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>In <strong>Direct Speech</strong>, exact words of the speaker are quoted. In <strong>Indirect Speech</strong>, the speech is reported without exact quotes, shifting tenses, pronouns, and time/place adverbs backward into the past.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🕒 Time & Place Adverb Conversions Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">Direct Speech Word</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Indirect Speech Conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Now → Then</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Today → That day</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Here → There</td>
              <td style="padding: 8px; border: 1px solid var(--border);">This → That / These → Those</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Yesterday → The day before / The previous day</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Tomorrow → The next day / The following day</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">Ago → Before</td>
              <td style="padding: 8px; border: 1px solid var(--border);">Last night → The previous night</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "Present Simple → Past Simple (says/is → said/was).",
      "Present Perfect → Past Perfect (has done → had done).",
      "Past Simple → Past Perfect (went → had gone).",
      "Reporting verb: said to → told, asked, requested, advised.",
      "Universal truth never changes tense (He said, 'The Earth revolves round the Sun')."
    ],
    mnemonics: "Today → That day | Yesterday → Previous day | Tomorrow → Next day"
  },
  {
    topic: "Articles & Prepositions Guide",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <h4 style="color: var(--accent-light);">🅰️ Articles (a, an, the) Exceptions:</h4>
        <ul style="padding-left: 1.25rem;">
          <li><strong>Use 'a':</strong> Before consonant <em>sounds</em> - e.g., <em>a book, a European (ય-ધ્વનિ), a university (ય-ધ્વનિ), a one-rupee note (વ-ધ્વનિ)</em>.</li>
          <li><strong>Use 'an':</strong> Before vowel <em>sounds</em> (અ, આ, ઇ, ઈ, એ, ઓ) - e.g., <em>an apple, an hour (આવર), an honest man (ઓનેસ્ટ), an MLA (એમ-એલ-એ)</em>.</li>
          <li><strong>Use 'the':</strong> Unique objects (the Sun, the Moon), rivers (the Ganga), oceans, holy books (the Gita), superlative degrees (the best).</li>
        </ul>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">📍 Prepositions (In / On / At / Into / Between / Among):</h4>
        <ul style="padding-left: 1.25rem;">
          <li><strong>At:</strong> Specific time (at 5 PM), small places (at Navrangpura), exact points (at the door).</li>
          <li><strong>On:</strong> Days & dates (on Monday, on 15th August), surfaces (on the table).</li>
          <li><strong>In:</strong> Months, years, seasons (in July, in 2026, in summer), large cities/countries (in Gujarat, in India).</li>
          <li><strong>Into:</strong> Motion towards inside (He jumped <strong>into</strong> the river).</li>
          <li><strong>Between vs Among:</strong> <strong>Between</strong> for 2 items/persons (between Ram and Shyam); <strong>Among</strong> for more than 2 (among the students).</li>
        </ul>
      </div>
    `,
    keyPoints: [
      "An hour, An honest man, An MLA (Sound is vowel).",
      "A university, A European, A one-rupee note (Sound is consonant).",
      "At = exact time/small place | On = day/date | In = month/year/large place.",
      "Into = motion into inside.",
      "Between = 2 persons/things | Among = 3+ persons/things."
    ],
    mnemonics: "Sound determines A/AN, not spelling! | 2 = Between, 3+ = Among"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { englishData };
}
