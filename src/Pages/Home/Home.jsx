import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Banner/Donations/Donations";
import { useState } from "react";

const Home = () => {
    const [find, setFind] = useState()
    const donations = useLoaderData()
    return (
        <div>
            <Banner find={find} setFind={setFind} donations={donations}></Banner>
            <Donations find={find} donations={donations}></Donations>
        </div>
    );
};

export default Home;