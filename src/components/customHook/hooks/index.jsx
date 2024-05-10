import { useEffect,useState,useCallback } from "react";

const useWindowWidth = (screenSize)=>{
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    const checkScreenSize = useCallback(()=>{
        setOnSmallScreen(window.innerWidth < screenSize);
    },[screenSize])

    useEffect(()=>{
        /* const checkScreenSize = ()=>{
            setOnSmallScreen(window.innerWidth < screenSize);
        } */
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        // Cleanup function
        return ()=>{
            window.removeEventListener('resize', checkScreenSize);
        }
    }, [checkScreenSize]);

    return onSmallScreen;

}

export default useWindowWidth;