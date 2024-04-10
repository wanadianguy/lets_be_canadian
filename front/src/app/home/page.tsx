'use client';
import Image from 'next/image';
import './home.css';
import {Button} from '@/components/button/button';

const Home = () => (
    <div className='home-page'>
        <Image className="home-logo" src='/logo.png' width={500} height={450} alt='logo'/>
        <Button
            onClick={() => {window.location.href = window.location.origin + '/application-dashboard';}}
            label="Let's go !"
            width={10}
            height={5}
            backgroundColor='white'/>
    </div>
);

export default Home;
