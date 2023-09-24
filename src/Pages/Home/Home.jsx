import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
    const donations = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;