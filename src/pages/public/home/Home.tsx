import Banner from "./components/Banner";
import Features from "./components/Features";
import Feedbacks from "./components/feedback/Feedbacks";
import Problems from "./components/Problems";

export default function Home() {
    return (
        <>
        <Banner/>
        <Problems/>
        <Features/>
        <Feedbacks/>
        </>
    )
}