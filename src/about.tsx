import CustomFooter from "./components/custom-footer";
import CustomHeader from "./components/custom-header";
import Info from "./components/info";
import SmoothScroll from "./components/smooth-scroll";


export default function AboutPage() {
    return (
        <SmoothScroll>
            <CustomHeader />
            <Info />
            <CustomFooter />
        </SmoothScroll>
    );
}