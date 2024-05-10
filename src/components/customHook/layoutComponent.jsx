import useWindowWidth from "./hooks";

export default function LayoutComponent(){
    const onSmallScreen = useWindowWidth(600);

    return(
        <div>
            <h1>Your browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
        </div>
    );

}