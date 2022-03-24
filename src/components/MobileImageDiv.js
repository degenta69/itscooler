import React from 'react'

const MobileImageDiv = (props) => {

    const {page} = props

    return (
        <div>
             {page.key === '11' && (
        <>
        <div className='d-flex flex-row ' style={{margin:'0px', paddingTop:'4rem'}}>
        <img className='img111' src={page.media.one} style={{width:'50%', marginRight:'-10%', marginLeft:'3rem'}} alt='11 img not availble' />
        <img className='img112' src={page.media.two} style={{width:'50%', marginRight:'10%'}} alt="11 img not availbe" /> 
        </div>
        </>
      )}
      {page.key === '22' && (
        <>
        <img style={{width:'50%', bottom:'9rem',}} className='img221 position-absolute' src={page.media.one} alt='22 img not availble' />
        <img style={{width:'40%', top:'-5%', right:'2%' }} className='img222 position-absolute' src={page.media.two} alt='22 img not availble' />
        </>
      )}
      {page.key === '33' && (
        <>
        <img style={{width:'50%', bottom:'9rem', }} className='img331 position-absolute' src={page.media.one}  alt='33 img not availble' />
        <img style={{width:'45%', top:'-14%', right:'2%'}} className='img332 position-absolute' src={page.media.two}  alt='33 img not availble' />
        </>
      )}
      {page.key === '44' && (
        <>
        <img style={{width:'40%', bottom:'9rem',left:'1rem'}} className='img441 position-absolute' src={page.media.one} alt='44 img not availble' />
        <img style={{width:'40%', top:'-3%', right:'12%'}} className='img442 position-absolute' src={page.media.two} alt='44 img not availble' />
        <img style={{width:'40%', bottom:'6rem',right:'12%'}} className='2-img441-2 position-absolute' src={page.media.one} alt='44 img not availble' />
        <img style={{width:'35%', top:'0%', left:'0%'}} className='img443 position-absolute' src={page.media.box} alt='44 img not availble' />
        <img style={{width:'35%', right:'-12%', bottom:'-12%'}} className='img444 position-absolute' src={page.media.bread1} alt='44 img not availble' />
        <img style={{width:'17%', top:'-3%', right:'-4%'}} className='img445 position-absolute' src={page.media.bread2} alt='44 img not availble' />
        </>
      )}
      {page.key === '55' && (
        <>
        <img style={{width:'35%', top:'-12%', }} className='img551 same55 position-absolute' src={page.media.one} alt='55 img not availble' />
        <img style={{width:'35%', bottom:'7rem', right:'27%',}} className='img552 same551 position-absolute' src={page.media.two} alt='55 img not availble' />
        <img style={{width:'40%', top:'-5%', right:'24%',}} className='img553 same55 position-absolute' src={page.media.three} alt='55 img not availble' />
        <img style={{width:'30%', right:'-6%', top:'25%'}} className='img554 position-absolute' src={page.media.four} alt='55 img not availble' />
        <img style={{width:'40%', bottom:'9rem',}} className='img555 same551 position-absolute' src={page.media.five} alt='55 img not availble' />
        </>
      )}
      {page.key === '66' && (
        <>
        <img style={{width:'100%',zIndex:'1', top:'3rem'}} className='img661 end-0 position-absolute' src={page.media.one} alt='66 img not availble' />
        <img style={{width:'100%',bottom:'9rem',}} className='img662 end-0 h-100 position-absolute' src={page.media.interior} alt='66 img not availble' />
        </>
      )}
      {page.key === '77' && (
        <>
        <img style={{width:'40%', right:'0', bottom:'14rem', }} className='img771 same77 position-absolute' src={page.media.one} alt='77 img not availble' />
        <img style={{width:'60%', bottom:'14rem', }} className='img772 same77 position-absolute' src={page.media.two} alt='77 img not availble' />
        </>
      )}
        </div>
    )
}

export default MobileImageDiv
