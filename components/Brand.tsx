import { Link } from 'react-router-dom';
import { Monogram } from './Monogram';
export function Brand() {
  return <Link className="brand" to="/" aria-label="Ryan Seaman — home">
    <Monogram />
    <span>ryan seaman</span>
  </Link>;
}
