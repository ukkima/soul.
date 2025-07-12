export const SimpleIcon = ({ icon, size = 46 }) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ ["--icon-hover-color"]: `#${icon.hex}` }}
    width={size}
    height={size}
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);
