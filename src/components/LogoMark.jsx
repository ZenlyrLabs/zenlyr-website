export default function LogoMark({ size = 36 }) {
  return (
    <svg viewBox="0 0 54 68" width={size} height={size} className="logo-mark">
      <rect x="18" y="14" width="36" height="54" rx="4" fill="none" stroke="#c8a84b" strokeWidth="3" opacity="0.22"/>
      <rect x="9" y="7" width="36" height="54" rx="4" fill="none" stroke="#c8a84b" strokeWidth="3.5" opacity="0.48"/>
      <rect x="0" y="0" width="36" height="54" rx="4" fill="#c8a84b"/>
      <line x1="9" y1="0" x2="9" y2="54" stroke="#0c0c18" strokeWidth="2" opacity="0.45" strokeLinecap="round"/>
      <line x1="18" y1="0" x2="18" y2="54" stroke="#0c0c18" strokeWidth="2" opacity="0.22" strokeLinecap="round"/>
      <polyline points="27,3 34,3 34,10" fill="none" stroke="#0c0c18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
