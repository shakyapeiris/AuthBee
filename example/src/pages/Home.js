import React from 'react';
import classes from './Home.module.css'
import {IconDownload,IconStar} from "@tabler/icons"

const Home = () => {
    return <>
    	<div className={classes.Container}>
			<div className={classes.wrapper}>
			<img src="/hero.png" alt="" />
    		<h1>Welcome To The Bee Hive!</h1>
    		<p>No more stings!</p>
			<div className={classes.btnGroup}>
				<a href="https://github.com/shakyapeiris/AuthBee" className={classes.install}><IconDownload size={20} /><span>Install</span></a>
				<a href="https://www.npmjs.com/package/authbee"><IconStar size={20} /><span>Star Me On Github</span></a>
			</div>
			</div>
    	</div>
    </>;
};

export default Home;
