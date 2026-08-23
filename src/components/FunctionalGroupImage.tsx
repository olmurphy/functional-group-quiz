import { useState } from 'react';
import type { FunctionalGroup } from '../data/functionalGroups';
import { getFunctionalGroupImageUrl } from '../data/functionalGroups';
import './FunctionalGroupImage.css';

interface FunctionalGroupImageProps {
  group: FunctionalGroup;
  className?: string;
}

export const FunctionalGroupImage = ({ group, className = '' }: FunctionalGroupImageProps) => {
  const [hasError, setHasError] = useState(false);
  const src = getFunctionalGroupImageUrl(group.image);

  if (hasError) {
    return (
      <div className={`fg-image-placeholder ${className}`} aria-label={group.name}>
        <span className="fg-image-placeholder-label">{group.name}</span>
        <span className="fg-image-placeholder-hint">Add {group.image}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={group.name}
      className={`fg-image ${className}`}
      onError={() => setHasError(true)}
    />
  );
};

export default FunctionalGroupImage;
