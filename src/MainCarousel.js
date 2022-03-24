import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import MobileSection from './components/MobileSection';
import {gsap} from 'gsap';

const MainCarousel = (props) => {

    useEffect(() => {
        let Owl = gsap.utils.toArray(".owl-carousel")
        gsap.set("body", {height: (Owl.length * 100) + "%"});
    }, [])

    const {texts} = props

    const options = {
        items: '1',
        mouseDrag: true,
        pullDrag: true,
    }

    return (
        <>
            <OwlCarousel className='owl-theme position-absolute start-0 end-0 h-100' touchDrag rewind open loop {...options} nav={false}>
    <div className='vh-100'>
        <MobileSection  bgColor={'#6411A9'}  page={texts.page1} bgColor2={'#CDCACE'}/> 
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#4F26CE'}  page={texts.page2} bgColor2={'#1C0362'}/> 
        
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#0E113A'}  page={texts.page3} bgColor2={'#151547'}/> 
        
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#17263C'}  page={texts.page4} bgColor2={'#0E121D'}/> 
        
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#124CA3'} bgSvg={'#1457c1'}  page={texts.page5} bgColor2={'#2bc8d9'}/> 
        
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#032893'}  page={texts.page6} bgColor2={'#cdcace'}/> 
        
    </div>
    <div className='vh-100 '>
        <MobileSection bgColor={'#00834D'}  page={texts.page7} bgColor2={'#00B66A'}/> 
        
    </div>
</OwlCarousel>;
        </>
    )
}

export default MainCarousel
