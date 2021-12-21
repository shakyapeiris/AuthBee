import React from 'react';
import classes from './Home.module.css'

const Home = () => {
    return <>
    	<div className={classes.Container}>
    		<h1>Welcome To The Bee Hive!</h1>
    		<p>No more stings! <a href="https://dummylink.org">Check it out</a></p>
    	</div>
    </>;
};

export default Home;
