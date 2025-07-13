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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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

export const CalendarIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Calendar" size={size} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </BaseIcon>
  );
};

export const ClockIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Clock" size={size} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </BaseIcon>
  );
};

export const PlayIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Play" size={size} {...props}>
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </BaseIcon>
  );
};

export const PauseIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Pause" size={size} {...props}>
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
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
    <BaseIcon label="Aperture" size={size} {...props}>
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
    <BaseIcon label="X (formerly Twitter)" size={size} {...props}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </BaseIcon>
  );
};

export const ArrowRightIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="t" size={size} {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </BaseIcon>
  );
};

export const SearchIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Search" size={size} {...props}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </BaseIcon>
  );
};

export const PinIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Pin" size={size} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </BaseIcon>
  );
};

export const GithubIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Github" size={size} {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </BaseIcon>
  );
};

export const RSSIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="RSS" size={size} {...props}>
      <path d="M4 11a9 9 0 0 1 9 9"></path>
      <path d="M4 4a16 16 0 0 1 16 16"></path>
      <circle cx="5" cy="19" r="1"></circle>
    </BaseIcon>
  );
};

export const ExternalLinkIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="External Link" size={size} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </BaseIcon>
  );
};

export const LinkIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Link" size={size} {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </BaseIcon>
  );
};

export const FacebookIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Facebook" size={size} {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </BaseIcon>
  );
};

export const RedditIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Reddit" size={size} {...props}>
      <path
        fill="currentColor"
        d="M19.522,7.196c-1.062-1.064-2.775-1.077-3.896-0.069c-1.305-0.627-2.815-1.026-4.437-1.121 c0.6-1.862,1.834-4.465,3.077-4.715c0.418-0.083,0.874,0.137,1.353,0.657c-0.035,0.138-0.061,0.28-0.061,0.427
c0,0.921,0.748,1.669,1.669,1.669c0.921,0,1.669-0.746,1.669-1.669c0-0.921-0.748-1.667-1.669-1.667
c-0.3,0-0.581,0.086-0.825,0.226c-0.758-0.753-1.558-1.055-2.386-0.89c-2.417,0.487-3.88,5.023-4.157,5.955
C8.152,6.076,6.563,6.485,5.202,7.146c-1.119-1.031-2.849-1.022-3.92,0.049C0.227,8.25,0.207,9.942,1.189,11.064
c-0.319,0.731-0.498,1.512-0.498,2.324c0,4.089,4.371,7.417,9.744,7.417s9.746-3.327,9.746-7.417c0-0.831-0.189-1.628-0.522-2.375
C20.597,9.893,20.561,8.235,19.522,7.196z M1.731,7.645C2.506,6.869,3.73,6.818,4.598,7.467c-1.344,0.769-2.422,1.79-3.101,2.977
C0.904,9.58,0.977,8.398,1.731,7.645z M10.435,19.531c-4.673,0-8.473-2.755-8.473-6.143c0-3.385,3.8-6.142,8.473-6.142
c4.674,0,8.474,2.757,8.474,6.142C18.909,16.778,15.109,19.531,10.435,19.531z M16.234,7.446c0.868-0.627,2.071-0.567,2.838,0.2
c0.742,0.74,0.825,1.891,0.27,2.749C18.656,9.217,17.578,8.205,16.234,7.446z M6.886,13.284c-0.877,0-1.589-0.711-1.589-1.589
c0-0.877,0.711-1.589,1.589-1.589c0.878,0,1.589,0.711,1.589,1.589S7.763,13.284,6.886,13.284z M15.56,11.694
c0,0.877-0.711,1.589-1.589,1.589c-0.877,0-1.589-0.711-1.589-1.589c0-0.878,0.711-1.589,1.589-1.589
C14.848,10.105,15.56,10.816,15.56,11.694z M14.222,15.912c0.217,0.275,0.167,0.676-0.112,0.893
c-1.326,1.028-2.614,1.375-3.742,1.375c-2.255,0-3.874-1.378-3.898-1.4c-0.264-0.228-0.291-0.632-0.061-0.896
c0.231-0.264,0.63-0.291,0.894-0.063c0.118,0.101,2.884,2.42,6.027-0.02C13.606,15.584,14.005,15.637,14.222,15.912z"
      ></path>
    </BaseIcon>
  );
};

export const GoogleIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Google" size={size} {...props}>
      <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372  C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836  C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078  c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138  C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z" />
    </BaseIcon>
  );
};

export const CloseIcon = ({ size, ...props }) => {
  return (
    <BaseIcon label="Close" size={size} {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </BaseIcon>
  );
};

export const ChevronLeft = ({ size, ...props }) => {
  return (
    <BaseIcon label="Expand" size={size} {...props}>
      <polyline points="15 18 9 12 15 6"></polyline>
    </BaseIcon>
  );
};

export const ChevronsRight = ({ size, ...props }) => {
  return (
    <BaseIcon label="Expand" size={size} {...props}>
      <polyline points="13 17 18 12 13 7"></polyline>
      <polyline points="6 17 11 12 6 7"></polyline>
    </BaseIcon>
  );
};

export const ArrowLeftUp = ({ size, ...props }) => {
  return (
    <BaseIcon label="Expand" size={size} {...props}>
      <line x1="17" y1="17" x2="7" y2="7"></line>
      <polyline points="7 17 7 7 17 7"></polyline>
    </BaseIcon>
  );
};

export const Information = ({ size, ...props }) => {
  return (
    <BaseIcon label="Information" size={size} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </BaseIcon>
  );
};

export const CornerDownRight = ({ size, ...props }) => {
  return (
    <BaseIcon label="" size={size} {...props}>
      <polyline points="15 10 20 15 15 20"></polyline>
      <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
    </BaseIcon>
  );
};

export const Circle = ({ size, ...props }) => {
  return (
    <BaseIcon label="" size={size} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
    </BaseIcon>
  );
};

export const Squiggle = ({ size, ...props }) => {
  return (
    <BaseIcon label="" size={size} {...props}>
      <path d="M1 1C1 33 39 3.63014 39 33" strokeLinecap="round" />
    </BaseIcon>
  );
};

export const Code = ({ size, ...props }) => {
  return (
    <BaseIcon label="" size={size} {...props}>
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </BaseIcon>
  );
};

export const JavaScript = ({ size, ...props }) => {
  return (
    <BaseIcon label="JavaScript" size={size} {...props}>
      <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </BaseIcon>
  );
};

export const MessageSquare = ({ size, ...props }) => {
  return (
    <BaseIcon label="" size={size} {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      ;
    </BaseIcon>
  );
};
