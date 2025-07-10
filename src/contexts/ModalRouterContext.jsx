import { createContext, useState } from "react";

export const ModalRouterContext = createContext({
  background: null,
  setBackground: () => {},
});

export const ModalRouterProvider = ({ children }) => {
  const [background, setBackground] = useState(null);

  return (
    <ModalRouterContext value={[background, setBackground]}>
      {children}
    </ModalRouterContext>
  );
};
