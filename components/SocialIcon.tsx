import React from 'react';

interface SocialIconProps {
  href: string;
  iconClass: string;
  ariaLabel: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, iconClass, ariaLabel }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-14 h-14 flex items-center justify-center border-2 border-white rounded-full text-white text-xl hover:bg-white hover:text-[#030341] transition-all duration-300"
    >
      <i className={iconClass} aria-hidden="true"></i>
    </a>
  );
};

export default SocialIcon;
