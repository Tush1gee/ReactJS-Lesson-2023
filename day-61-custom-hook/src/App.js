import { ThemeContext } from "@emotion/react";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <h1>DAY - 61 CUSTOM HOOK</h1>
      <ThemeContext />
      <Header />
      <Body />
      <Footer />
      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
