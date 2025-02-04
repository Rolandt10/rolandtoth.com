const BaseIcon = ({ label = "", size = "20", children, ...props }) => {
  return (
    <svg
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
};

export const BookIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Book" size={size} {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </BaseIcon>
  );
};

export const MusicIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Music" size={size} {...props}>
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </BaseIcon>
  );
};

export const HomeIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Home" size={size} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </BaseIcon>
  );
};

export const MenuIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Menu" size={size} {...props}>
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
    </BaseIcon>
  );
};

export const EmailIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Email" size={size} {...props}>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
    </BaseIcon>
  );
};

export const BookOpenIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Book" size={size} {...props}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </BaseIcon>
  );
};

export const ApertureIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Blog" size={size} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
      <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
      <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
      <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
      <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
      <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
    </BaseIcon>
  );
};

export const TwitterIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Blog" size={size} {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </BaseIcon>
  );
};

export const ArrowRightIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </BaseIcon>
  );
};

export const SearchIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </BaseIcon>
  );
};

export const PinIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </BaseIcon>
  );
};

export const GithubIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </BaseIcon>
  );
};

export const RSSIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </BaseIcon>
  );
};

export const ExternalLinkIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Arrow right" size={size} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </BaseIcon>
  );
};
