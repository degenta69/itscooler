import React, { } from 'react'
import AnimationDiv from './AnimationDiv'

const Section = props => {

  const { bgColor, bgColor2, bgSvg, page } = props

  return (
    <>
      <div className='main  mx-0 SH' style={{ objectFit: 'contain' }}>
        <div
          className='text-white vh-100 d-flex flex-column-reverse position-relative'
          style={{zIndex:'1', backgroundColor: `${bgColor}`, border: 'none', boxShadow:'-1px -5px 20px 0px black' }}
        >
          <div className='container mx-2'>
            {page.media.badge && 
              <div className=' d-inline-block overflow-hidden  ' 
              style={{ width:'100%'}}>
                <img src={page.media.badge} alt='eee' style={{width:'40%'}} className={`textAnime key11 key77 `} />
              </div>
            }
            <div className=' d-inline-block overflow-hidden  ' 
            style={{ backgroundColor: ''}}>
              <h1 className={`textAnime key${page.key} `} style={{}}>{page.h1}</h1>
            </div>

            <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'170px', height:'19px'}}>
              <p className={`textAnime key${page.key}`} style={{ fontWeight:'100px' }}>we are the best web</p>
            </div>
            <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'170px', height:'19px'}}>
              <p className={`textAnime key${page.key}`} style={{ fontWeight:'100px' }}>development company</p>
            </div>
            <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'170px', height:'19px'}}>
              <p className={`textAnime key${page.key}`} style={{ fontWeight:'100px' }}>in the world</p>
            </div>

            <div
              className='d-flex flex-row justify-content-between'
              style={{ marginTop: '35px' }}
            >
              <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'170px', height:'19px'}}>
                <p className={`textAnime key${page.key}`} style={{ }}>
                  view case study
                  <i class='fa fa-arrow-right' aria-hidden='true'></i>
                </p>
              </div>
              <p className='fw-bolder'>SKIP</p>
            </div>
          </div>
          <div
            className='container text-white '
            style={{
              zIndex:'2',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              backgroundColor: `${bgSvg ? bgSvg : bgColor}`,
              right: '44%',
              top: '4%',
              rotate: '180deg',
              position:'fixed'
            }}
          >
           {/* <SVG />  */}
            
            <div
              className='text-white circle '
              style={{
                left: `${page.circle.above?'31%':'26%'}`,
                // right: ' 15%',
                top: '23%',
                rotate: '180deg',
                position:'fixed'
              }}
            >
              <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'170px', height:'19px'}}>

              <p style={{ }} className={`textAnime key${page.key} fw-normal`}>{page.circle.above}</p>
              </div>
              
              <div className=' overflow-hidden  ' 
            style={{ backgroundColor: '', width:'350px'}}>

              {!page.circle.img ? (
                
                <h1 style={{ }} className={`textAnime key${page.key} fw-bolder`}>{page.circle.big}</h1>
                
                ) : (
                  <img style={{ }} className={`textAnime key${page.key} nasa`} src={page.circle.big} alt='' />
                  )}
              </div>


              <div className=' overflow-hidden  ' 
            style={{textAlign:'right' ,backgroundColor: '', width:'170px', height:'19px'}}>
                <p className={`textAnime key${page.key}`} style={{ }}>
                  {page.circle.footer}
                  </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className='flex-nowrap contain vh-100 '
          style={{ backgroundColor: `${bgColor2}` , zIndex:'-1'}}
        >
          <AnimationDiv page={page} />

        </div>
      </div>
    </>
  )
}

export default Section
