import React from 'react'
import SVG from '../Assets/SVG';
import Section from './Section';


const main = (props) => {

    const {texts}=props

    return (
        <>
          <div
    id='12345678'
    className=''
    style={{
      zIndex:'5',
      width: '350px',
      height: '350px',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      right: '44%',
      top: '1%',
      rotate: '180deg',
      position:'fixed'
    }}
    >
    <SVG />
    </div>

<section className='first item' style={{}}>
<Section  bgColor={'#6411A9'}  page={texts.page1} bgColor2={'#CDCACE'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#4F26CE'}  page={texts.page2} bgColor2={'#1C0362'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#0E113A'}  page={texts.page3} bgColor2={'#151547'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#17263C'}  page={texts.page4} bgColor2={'#0E121D'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#124CA3'} bgSvg={'#1457c1'}  page={texts.page5} bgColor2={'#2bc8d9'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#032893'}  page={texts.page6} bgColor2={'#cdcace'}/>

</section>
<section className='item' style={{}}>
<Section bgColor={'#00834D'}  page={texts.page7} bgColor2={'#00B66A'}/>

</section>
        </>
    )
}

export default main
