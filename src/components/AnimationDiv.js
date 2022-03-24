import React, { useEffect } from 'react'
import {ExpoScaleEase} from 'gsap/EasePack'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import {useMediaQuery} from 'react-responsive'

gsap.registerPlugin(ScrollTrigger);

const AnimationDiv = props => {

// const isLaptop = useMediaQuery({ minWidth: 768 })

  const { page } = props
  useEffect(() => {
    
    let sections = gsap.utils.toArray("section"),
    currentSection = sections[0];
  gsap.defaults({overwrite: 'auto', duration: 0.1});

    // stretch out the body height according to however many sections there are. 
    gsap.set("body", {height: (sections.length * 100) + "%"});


// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // markers:true, //console.log()
    toggleClass:'itemActive',
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * window.innerHeight,
    end: () => (i + 0.5) * window.innerHeight,
    // when a new section activates (from either direction), set the section accordinglyl.
    onToggle: self => self.isActive && setSection(section)
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, {autoAlpha:0})
    gsap.to(newSection, {autoAlpha:1});

   gsap.fromTo(
  `.key11`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key22`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key33`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key44`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key55`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key66`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)
   gsap.fromTo(
  `.key77`,
  {
    y:-50,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1
  }
)

    gsap.fromTo('.imgAnime111', {
      y:'600px'
    },
    {
      duration: 0.5,
      delay:0.5,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime112', {
      y:'120%'
    },
    {
      duration: 0.5,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime221', {
      y:'120%'
    },
    {
      ease: ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime222', {
      y:'-120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime331', {
      y:'120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime332', {
      y:'-120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime441', {
      y:'120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime442', {
      y:'-120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime443', {
      left:'-120%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      left:'45%',
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime444', {
      y:'120%',
      right:'-100%'
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:'-10%',
      right:'-1%',
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime445', {
      y:'-120%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.same55', {
      y:'-120%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.same551', {
      y:'120%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:0,
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime554', {
      right:'-120%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      right:'1%',
      stagger:0.1,
    })
    gsap.fromTo('.imgAnime661', {
      y:'120%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:'1%',
      stagger:0.1,
    })
    gsap.fromTo('.same77', {
      y:'50%',
    },
    {
      ease:ExpoScaleEase.config(8,1),
      duration: 0.1,
      delay:0.8,
      y:'1%',
      stagger:0.1,
    })
    currentSection = newSection;

  }
  
}

  }, [])

  return (
    <>
      {page.key === '11' && (
        <>
        <div className='d-flex flex-row p-5' style={{margin:'5%'}}>
        <img className='imgAnime111' src={page.media.one} style={{width:'50%', marginRight:'-10%'}} alt='11 img not availble' />
        <img className='imgAnime112' src={page.media.two} style={{width:'50%', marginRight:'10%'}} alt="11 img not availbe" /> 
        </div>
        </>
      )}
      {page.key === '22' && (
        <>
        <img style={{width:'20%', bottom:'0', right:'26%'}} className='imgAnime221 position-absolute' src={page.media.one} alt='22 img not availble' />
        <img style={{width:'20%', top:'-13%', right:'2%' }} className='imgAnime222 position-absolute' src={page.media.two} alt='22 img not availble' />
        </>
      )}
      {page.key === '33' && (
        <>
        <img style={{width:'20%', bottom:'8%', right:'25%'}} className='imgAnime331 position-absolute' src={page.media.one}  alt='33 img not availble' />
        <img style={{width:'15%', top:'-14%', right:'2%'}} className='imgAnime332 position-absolute' src={page.media.two}  alt='33 img not availble' />
        </>
      )}
      {page.key === '44' && (
        <>
        <img style={{width:'15%', bottom:'0%', right:'34%'}} className='imgAnime441 position-absolute' src={page.media.one} alt='44 img not availble' />
        <img style={{width:'15%', top:'12%', right:'12%'}} className='imgAnime442 position-absolute' src={page.media.two} alt='44 img not availble' />
        <img style={{width:'18%', top:'-6%', right:'37%'}} className='imgAnime443 position-absolute' src={page.media.box} alt='44 img not availble' />
        <img style={{width:'20%', right:'-1%', bottom:'-10%'}} className='imgAnime444 position-absolute' src={page.media.bread1} alt='44 img not availble' />
        <img style={{width:'12%', top:'-19%', right:'2%'}} className='imgAnime445 position-absolute' src={page.media.bread2} alt='44 img not availble' />
        </>
      )}
      {page.key === '55' && (
        <>
        <img style={{width:'15%', top:'-12%', right:'31%'}} className='imgAnime551 same55 position-absolute' src={page.media.one} alt='55 img not availble' />
        <img style={{width:'15%', bottom:'-24%', right:'17%',}} className='imgAnime552 same551 position-absolute' src={page.media.two} alt='55 img not availble' />
        <img style={{width:'15%', top:'-4%', right:'16%',}} className='imgAnime553 same55 position-absolute' src={page.media.three} alt='55 img not availble' />
        <img style={{width:'15%', right:'1%', top:'25%'}} className='imgAnime554 position-absolute' src={page.media.four} alt='55 img not availble' />
        <img style={{width:'15%', right:'33%', bottom:'-12%',}} className='imgAnime555 same551 position-absolute' src={page.media.five} alt='55 img not availble' />
        </>
      )}
      {page.key === '66' && (
        <>
        <img style={{width:'55%',zIndex:'1'}} className='imgAnime661 end-0 top-0 position-absolute' src={page.media.one} alt='66 img not availble' />
        <img style={{width:'55%',}} className='imgAnime662 bottom-0 end-0 h-100 position-absolute' src={page.media.interior} alt='66 img not availble' />
        </>
      )}
      {page.key === '77' && (
        <>
        <img style={{width:'20%', right:'6%', bottom:'-5%', }} className='imgAnime771 same77 position-absolute' src={page.media.one} alt='77 img not availble' />
        <img style={{width:'25%', right:'19%', bottom:'-8%', }} className='imgAnime772 same77 position-absolute' src={page.media.two} alt='77 img not availble' />
        </>
      )}
    </>
  )
}

export default AnimationDiv
