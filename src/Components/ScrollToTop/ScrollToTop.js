import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);
    return <>
        {children}
    </>
}