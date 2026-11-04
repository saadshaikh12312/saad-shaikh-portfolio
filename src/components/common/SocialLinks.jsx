import React from 'react';
import { socialLinks } from '../../data/socialLinks';
import IconLink from './IconLink';

export default function SocialLinks({ className = 'flex items-center gap-2.5 sm:gap-3' }) {
  return (
    <div className={className}>
      {socialLinks.map((item) => (
        <IconLink
          key={item.name}
          href={item.url}
          icon={item.icon}
          ariaLabel={item.ariaLabel}
          target={item.url.startsWith('mailto:') ? undefined : '_blank'}
        />
      ))}
    </div>
  );
}
