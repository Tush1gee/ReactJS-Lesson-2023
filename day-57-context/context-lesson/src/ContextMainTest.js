import ContextsTests from "./components/ContextsTests";
import { ContextTestProvider } from "./context/ContextTestJS";

export default function ContextMainTest () {
    return (
        <ContextTestProvider>  
            <ContextsTests/>
        </ContextTestProvider>
    )
}