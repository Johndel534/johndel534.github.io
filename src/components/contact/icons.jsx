const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

const icons = {
  mail: (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  facebook: (
    <svg {...common} aria-hidden="true">
      <path d="M14 9V6a2 2 0 0 1 2-2h2V1h-2a5 5 0 0 0-5 5v3H8v3h3v9h3v-9h3l1-3h-4z" />
    </svg>
  ),
  phone: (
    <svg {...common} aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2.2z" />
    </svg>
  ),
};

export default icons;
