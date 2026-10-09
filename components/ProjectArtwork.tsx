export type ProjectArtworkKind = 'annotations' | 'generation' | 'aperiovis' | 'scscape' | 'cadence' | 'website';
type Props = { kind?: ProjectArtworkKind; compact?: boolean };

// Decorative concept illustrations, not research data or product screenshots.
export function ProjectArtwork({ kind = 'annotations', compact = false }: Props) {
  return (
    <div className={`project-art ${kind} ${compact ? 'compact' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 620 390" fill="none" focusable="false">
        {kind === 'annotations' && <>
          <path d="M89 224C27 89 198 28 344 77S620 259 506 313" stroke="currentColor" opacity=".3" />
          <rect x="170" y="66" width="302" height="246" rx="3" transform="rotate(8 170 66)" fill="var(--field)" stroke="var(--forest)" />
          <rect x="136" y="80" width="302" height="246" rx="3" transform="rotate(-5 136 80)" fill="var(--paper)" stroke="var(--forest)" />
          <rect x="143" y="86" width="302" height="246" rx="3" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
          <path d="M143 129H445M167 109H198M167 272H315M167 288H280M167 304H328" stroke="var(--forest)" strokeWidth="1.5" />
          <g fill="var(--forest)">{[[198,177],[219,162],[237,191],[202,204],[247,167],[270,187],[222,221],[287,213],[316,176],[334,202],[353,184],[367,221],[325,234]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 7 : 4} opacity={i % 2 === 0 ? '.8' : '.4'}/>)}</g>
          <ellipse cx="231" cy="192" rx="62" ry="48" stroke="var(--clay)" strokeWidth="2" transform="rotate(-12 231 192)" />
          <path d="M294 193C365 137 414 156 484 135M474 129L486 134L480 146" stroke="var(--clay)" strokeWidth="1.6" />
          <circle cx="492" cy="130" r="9" fill="var(--clay)" />
        </>}
        {kind === 'generation' && <>
          <path d="M139 191H247M375 191H492M481 186L492 191L481 196" stroke="var(--paper)" strokeWidth="1.5" opacity=".7" />
          <g stroke="var(--paper)" opacity=".65"><rect x="79" y="145" width="74" height="86" rx="2" /><path d="M91 164H141M91 178H141M91 192H125M91 206H133" /></g>
          <circle cx="310" cy="191" r="66" stroke="var(--paper)" opacity=".6" />
          <circle cx="310" cy="191" r="93" stroke="var(--paper)" strokeDasharray="3 7" opacity=".35" />
          <path d="M281 165L339 174L307 224Z" stroke="var(--paper)" strokeWidth="1.5" />
          <g fill="var(--field)"><circle cx="281" cy="165" r="10" /><circle cx="339" cy="174" r="10" /><circle cx="307" cy="224" r="10" /></g>
          <rect x="492" y="145" width="83" height="86" rx="2" stroke="var(--paper)" />
          <path d="M492 163H575M529 163V231" stroke="var(--paper)" opacity=".6" />
          <circle cx="510" cy="184" r="5" fill="var(--field)" /><circle cx="517" cy="202" r="4" fill="var(--field)" />
          <path d="M539 213L547 191L557 202L567 178" stroke="var(--field)" strokeWidth="1.5" />
        </>}
        {kind === 'aperiovis' && <>
          <rect x="106" y="76" width="402" height="242" rx="3" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
          <path d="M106 109H508M395 109V318M395 214H508" stroke="var(--forest)" opacity=".6" />
          <g fill="var(--forest)"><circle cx="123" cy="93" r="3" /><circle cx="136" cy="93" r="3" /><circle cx="149" cy="93" r="3" /></g>
          <path d="M133 135V289H370" stroke="var(--forest)" opacity=".35" />
          <g fill="var(--forest)">{[[169,231],[182,249],[193,220],[205,239],[218,254],[227,226],[248,239],[270,213],[279,235],[294,205],[310,226],[332,212]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%3===0?6:4} opacity={i%2===0?'.7':'.4'}/>)}</g>
          <g fill="var(--clay)">{[[221,164],[236,147],[248,174],[258,154],[277,166],[265,185]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i%2===0?5:7}/>)}</g>
          <ellipse cx="250" cy="166" rx="48" ry="36" stroke="var(--clay)" strokeWidth="1.5" transform="rotate(-15 250 166)" />
          <path d="M295 156H413" stroke="var(--clay)" strokeDasharray="4 5" />
          <g fill="var(--clay)"><rect x="417" y="142" width="59" height="8" opacity=".8" /><rect x="417" y="158" width="39" height="8" opacity=".6" /><rect x="417" y="174" width="49" height="8" opacity=".4" /></g>
          <path d="M415 287L429 258L442 275L455 244L469 262L489 235" stroke="var(--forest)" strokeWidth="1.5" />
        </>}
        {kind === 'scscape' && <>
          <path d="M99 108H203C237 108 221 195 260 195M99 195H260M99 282H203C237 282 221 195 260 195M358 195H434M478 195H530" stroke="var(--forest)" strokeWidth="1.5" />
          {[108,195,282].map(y=><g key={y}><rect x="73" y={y-23} width="55" height="46" rx="3" fill="var(--paper)" stroke="var(--forest)" /><path d={`M85 ${y-8}H116M85 ${y}H116M85 ${y+8}H107`} stroke="var(--forest)" opacity=".5" /></g>)}
          <rect x="260" y="146" width="98" height="98" rx="3" fill="var(--forest)" />
          <path d="M282 173H336M282 195H336M282 217H336" stroke="var(--paper)" opacity=".4" />
          <g fill="var(--paper)"><circle cx="294" cy="173" r="6" /><circle cx="323" cy="195" r="6" /><circle cx="304" cy="217" r="6" /></g>
          <circle cx="456" cy="195" r="22" fill="var(--paper)" stroke="var(--forest)" />
          <path d="M446 195L453 202L467 187" stroke="var(--forest)" strokeWidth="2" />
          <path d="M533 147V244M533 147H569M533 195H569M533 244H569" stroke="var(--clay)" strokeWidth="1.5" />
          <g fill="var(--clay)"><circle cx="569" cy="147" r="6" /><circle cx="569" cy="195" r="6" /><circle cx="569" cy="244" r="6" /></g>
          <path d="M252 273H371M252 117H371" stroke="var(--forest)" opacity=".2" />
        </>}
        {kind === 'cadence' && <>
          <circle cx="310" cy="195" r="126" stroke="var(--paper)" opacity=".2" />
          <circle cx="310" cy="195" r="102" stroke="var(--paper)" strokeWidth="1.5" opacity=".5" />
          <path d="M310 93A102 102 0 0 1 410 176" stroke="var(--paper)" strokeWidth="5" />
          <circle cx="410" cy="176" r="7" fill="var(--paper)" />
          <path d="M62 203H213L229 185L249 215L271 144L295 246L316 191L332 203H558" stroke="var(--paper)" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M310 54V67M310 323V336M169 195H182M438 195H451" stroke="var(--paper)" opacity=".6" />
        </>}
        {kind === 'website' && <>
          <rect x="111" y="77" width="398" height="236" rx="3" fill="var(--paper)" stroke="var(--forest)" strokeWidth="1.5" />
          <path d="M111 112H509M354 96H384M398 96H428M442 96H481" stroke="var(--forest)" opacity=".45" />
          <path d="M137 94H161" stroke="var(--clay)" strokeWidth="3" />
          <g transform="translate(145 126) scale(1.25)"><path d="M15 77V35M15 49C15 35 32 29 42 37M83 38C73 30 54 31 51 42C47 57 85 51 83 66C81 80 59 82 48 73" stroke="var(--forest)" strokeWidth="7" /></g>
          <rect x="343" y="139" width="139" height="147" rx="2" fill="var(--field)" />
          <circle cx="412" cy="190" r="27" stroke="var(--forest)" opacity=".5" />
          <path d="M371 259C371 212 453 212 453 259" stroke="var(--forest)" opacity=".5" />
          <path d="M154 255H284M154 271H253" stroke="var(--forest)" opacity=".4" />
          <path d="M127 333H493" stroke="var(--forest)" opacity=".2" />
        </>}
      </svg>
    </div>
  );
}
