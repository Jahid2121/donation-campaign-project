import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Banner/Donations/Donations";
import { useState } from "react";

const Home = () => {
    const [find, setFind] = useState()
    const [search, setSearch] = useState(false)
    const donations = useLoaderData()
    return (
        <div>
            <Banner search={search} setSearch={setSearch} find={find} setFind={setFind} donations={donations}></Banner>
            <Donations search={search} find={find} donations={donations}></Donations>
        </div>
    );
};

export default Home;