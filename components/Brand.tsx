import { Link } from 'react-router-dom';
export function Brand() {
  return <Link className="brand" to="/" aria-label="Ryan Seaman — home">
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M15 77V35M15 49C15 35 32 29 42 37M83 38C73 30 54 31 51 42C47 57 85 51 83 66C81 80 59 82 48 73" stroke="currentColor" strokeWidth="10" /></svg>
    <span>ryan seaman</span>
  </Link>;
}
