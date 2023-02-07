import { createContext } from "react";

const UserContext = createContext(null);

// Provider  //////////////////////////////////////////////////////////////////////
// Сүү ХХК байж болно. Иргэдэд сүү ханган нийлүүлдэг.                            //
//
const UserProvider = ({ children }) => {
  //
  const userName = "Шинэ сүү"; //
  return (
    //
    <UserContext.Provider value={userName}>{children}</UserContext.Provider> //
    // value gedegiig hurgeltin mashin gj oilgoj bolno.                          //
  ); //
}; //
//
export { UserContext, UserProvider }; //
///////////////////////////////////////////////////////////////////////////////////

// Consumer
// Жирийн иргэд болон хэрэглэгчид
