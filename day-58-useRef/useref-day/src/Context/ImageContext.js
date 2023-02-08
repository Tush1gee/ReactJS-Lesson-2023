import { createContext, useState } from "react";

const ImageContext = createContext(null);

const ImageContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const ImageSize = isLarge ? 150 : 100;
  return (
    <ImageContext.Provider value={[isLarge, setIsLarge, ImageSize]}>
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ImageContextProvider };
