import Banner from "./components/Banner";
import Features from "./components/Features";
import Feedbacks from "./components/feedback/Feedbacks";
import Problems from "./components/Problems";
import Questions from "./components/questions/Question";

export default function Home() {
    return (
        <>
        <Banner/>
        <Problems/>
        <Features/>
        <Feedbacks/>
        <Questions/>
        </>
    )
}