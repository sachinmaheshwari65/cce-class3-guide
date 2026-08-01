const reasoningData = [
  {
    topic: "કોડિંગ-ડીકોડિંગ & અક્ષર ક્રમ (Coding-Decoding & Alphabet Positions)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>રીઝનિંગમાં અક્ષરોની સ્થાન કિંમતો (Alphabet Numerical Values) યાદ રાખવી અનિવાર્ય છે. A થી Z ના સ્થાન કિંમત (૧ થી ૨૬) અને તેમના વિરુદ્ધ અક્ષરો યાદ રાખવા માટેની માસ્ટર ટ્રિક્સ નીચે મુજબ છે:</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🅰️-𝓩 અક્ષર સ્થાન કિંમતો અને EJOTY ટ્રિક Table:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">અક્ષર</th>
              <th style="padding: 8px; border: 1px solid var(--border);">E</th>
              <th style="padding: 8px; border: 1px solid var(--border);">J</th>
              <th style="padding: 8px; border: 1px solid var(--border);">O</th>
              <th style="padding: 8px; border: 1px solid var(--border);">T</th>
              <th style="padding: 8px; border: 1px solid var(--border);">Y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">સ્થાન કિંમત (૫ ના ગુણાંકમાં)</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">૫</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">૧૦</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">૧૫</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">૨૦</td>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold; color: var(--accent-light);">૨૫</td>
            </tr>
          </tbody>
        </table>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🔄 સામ-સામેના (Opposite) અક્ષરો યાદ રાખવાની યાદગાર ટ્રિક:</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.88rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">જોડી (Pair)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">યાદ રાખવાની શોર્ટ ટ્રિક (Mnemonic Word)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">સરવાળો (Sum = 27)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">A - Z</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>A-Z</strong> (Azad / Amazon)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧ + ૨૬ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">B - Y</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>BY</strong> (Boy / Bye)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૨ + ૨૫ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">C - X</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>CX</strong> (Crux / Crax)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૩ + ૨૪ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">D - W</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>DW</strong> (Dew / Doodhwala)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૪ + ૨૩ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">E - V</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>EV</strong> (Evening / EV vehicle)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૫ + ૨૨ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">F - U</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>FU</strong> (Fun / Full)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૬ + ૨૧ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">G - T</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>GT</strong> (GT Road / Gujarat Titans)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૭ + ૨૦ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">H - S</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>HS</strong> (High School)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૮ + ૧૯ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">I - R</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>IR</strong> (Indian Railway)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૯ + ૧૮ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">J - Q</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>JQ</strong> (Jungle Queen / Jack-Queen)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૦ + ૧૭ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">K - P</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>KP</strong> (Kanpur / Kurkure-Pack)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૧ + ૧૬ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">L - O</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>LO</strong> (Love)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૨ + ૧૫ = ૨૭</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">M - N</td>
              <td style="padding: 8px; border: 1px solid var(--border);"><strong>MN</strong> (Man / Moon)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">૧૩ + ૧૪ = ૨૭</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "EJOTY: E=5, J=10, O=15, T=20, Y=25.",
      "કોઈ પણ અક્ષર અને તેના વિરુદ્ધ અક્ષરની સ્થાન કિંમતનો સરવાળો હંમેશા ૨૭ થાય (જેમ કે A+Z = 1+26 = 27).",
      "વિરુદ્ધ જોડીઓ: Azad, Boy, Crux, Dew, Evening, Fun, GT-Road, High-School, Indian-Railway, Jungle-Queen, Kanpur, Love, Man.",
      "G=7 (G-7 દેશો), H=8 (H નો આકાર 8 જેવો), I=9 (I Know = 9)."
    ],
    mnemonics: "EJOTY (5-10-15-20-25) | Opposites Sum = 27"
  },
  {
    topic: "રક્ત સંબંધ (Blood Relations)",
    content: `
      <div style="font-size: 1.05rem; line-height: 1.7; color: var(--text-primary);">
        <p>રક્ત સંબંધના પ્રશ્નો ઝડપથી અને સચોટ રીતે ઉકેલવા માટે <strong>ફેમિલી ટ્રી ડાયાગ્રામ (Family Tree Signs)</strong> નો ઉપયોગ કરવો સૌથી શ્રેષ્ઠ પદ્ધતિ છે.</p>

        <h4 style="color: var(--accent-light); margin-top: 1.25rem;">🌳 સંકેતોની પદ્ધતિ (Family Tree Notation Table):</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--accent-glow); color: var(--accent-light); text-align: left;">
              <th style="padding: 8px; border: 1px solid var(--border);">સંબંધ / લિંગ</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ડાયાગ્રામ સંકેત (Symbol)</th>
              <th style="padding: 8px; border: 1px solid var(--border);">ઉદાહરણ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">પુરુષ (Male)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">ચોરસ <strong>[ ]</strong> અથવા <strong>(+)</strong></td>
              <td style="padding: 8px; border: 1px solid var(--border);">[રાહુલ]</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">સ્ત્રી (Female)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">વર્તુળ <strong>( )</strong> અથવા <strong>(-)</strong></td>
              <td style="padding: 8px; border: 1px solid var(--border);">(પૂજા)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">પતિ-પત્ની (Married Couple)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">બેવડી રેખા <strong><=></strong></td>
              <td style="padding: 8px; border: 1px solid var(--border);">[રામ] <=> (સીતા)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">ભાઈ-બહેન (Siblings)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">એકલ આડી રેખા <strong>---</strong></td>
              <td style="padding: 8px; border: 1px solid var(--border);">[અમન] --- (પ્રિયા)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid var(--border); font-weight: bold;">પેઢીનો તફાવત (Generation Gap)</td>
              <td style="padding: 8px; border: 1px solid var(--border);">ઊભી રેખા <strong>|</strong></td>
              <td style="padding: 8px; border: 1px solid var(--border);">[પિતા] ↑ / ↓ [પુત્ર]</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    keyPoints: [
      "પુરુષ = ચોરસ [+], સ્ત્રી = વર્તુળ [-].",
      "પતિ-પત્ની = <=> double line | ભાઈ-બહેન = --- single line.",
      "પોતાને મધ્યમાં રાખીને સંબંધો વિચારો.",
      "મામાનો છોકરો = સાળો/પિતરાઈ, માસીનો પુત્ર = માસીયાઈ ભાઈ."
    ],
    mnemonics: "ચોરસ=પુરુષ, ગોળ=સ્ત્રી | Double line=દંપતી"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { reasoningData };
}
