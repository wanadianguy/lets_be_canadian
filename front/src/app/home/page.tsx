'use client'
import Image from 'next/image';
import './home.css';
import {Button} from '@/components/button/button'

export default () =>
    <div className='home'>
        <Image className="homeLogo" src='/logo.png' width={500} height={450} alt='logo'/>
        <Button onClick={() => {window.location.href = 'https://google.com'}} label="Let's go !" width={10} height={5} backgroundColor='white'></Button>
    </div>
;
