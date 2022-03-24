import React from 'react'
import MobileImageDiv from './MobileImageDiv'
import {useMediaQuery} from 'react-responsive'

const MobileSection = (props) => {

    const isMobile = useMediaQuery({ maxWidth: 425 })

    const {page, bgColor, bgColor2}=props

    return (
        <>

<div
          className='flex-nowrap order-md-1 contain vh-100'
          style={{ backgroundColor: `${bgColor2}` , height:'100%'}}
          >
          <MobileImageDiv page={page} />

        </div>
            <div className='position-absolute w-100 mx-0' style={{bottom:'-42px' ,objectFit: 'contain', height:'50%' }}>


        <div
          className='text-white  order-md-2 d-flex flex-column-reverse position-relative'
          style={{zIndex:'1', height:'100%' ,backgroundColor: `${bgColor}`, border: 'none', boxShadow:'-1px -5px 20px 0px black' }}
        >
          <div className='container my-auto mx-2' style={{height:'75%'}}>
            {page.media.badge && 
              <div className=' d-inline-block overflow-hidden  ' 
              style={{ width:'100%'}}>
                <img src={page.media.badge} alt='eee' 
              style={{ width:`${isMobile?'50%':'250px'}`,
              position:'absolute', 
              top:'-9%', 
              backgroundColor:'white', 
              border:'239px black', 
              borderRadius:'10px 10px',
              }} 
              className={`textAnime key11 key77 `}
              />
              </div>
            }
            <div className=' d-inline-block overflow-hidden  ' 
            style={{ backgroundColor: ''}}>
              <h1 className={`textAnime key${page.key} `} style={{}}>{page.h1}</h1>
            </div>

            <div className='  ' 
            style={{ backgroundColor: '', height:'19px'}}>
              <p className={`textAnime key${page.key}`} style={{ fontWeight:'100px' }}>{page.small}</p>
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
            </div>
          </div>
           {/* <SVG />  */}
            
            {/* <div
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
            </div> */}
          </div>
            </div>
        </>
    )
}

export default MobileSection
