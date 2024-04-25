import React from 'react';
import CarouselComponent from '../components/carousel';
import Card from '../components/card';
import apple1 from '../assets/apple1.webp';
import apple2 from '../assets/apple2.avif';
import apple3 from '../assets/apple3.avif';
import people1 from '../assets/people1.png';
import people2 from '../assets/people2.jpg';
import people3 from '../assets/people3.png';

const Home = () => {
    const imageUrls1 = [
        {
            link: "https://upstract.com/",
            img: people1
          },
        {
            link: "https://upstract.com/",
            img: people2
          },
        {
            link: "https://upstract.com/",
            img: people3
          },
        // ... more image URLs
      ];
      const imageUrls2 = [
        {
            link: "https://levelup.riipen.com/lrn/dashboard",
            img: apple1
          },
        {
            link: "https://levelup.riipen.com/lrn/dashboard",
            img: apple2
          },
        {
            link: "https://levelup.riipen.com/lrn/dashboard",
            img: apple3
          },
        // ... more image URLs
      ];
      const card1 = [
        {
          link: "https://www.theglobeandmail.com/world/article-concert-hall-attack-dents-putins-tough-image-as-he-tries-to-use-it-to/",
          title: "Concert hall attack dents Putin’s tough image as he tries to use it to rally support for Ukraine war"
        },
        {
          link: "https://www.theglobeandmail.com/business/article-canada-temporary-residents-housing-inflation/",
          title: "With move to limit temporary residents, Ottawa is ‘attacking the demand curve now"
        },
        {
          link: "https://levelup.riipen.com/lrn/dashboard",
          title: "Riipen Level UP 🚀"
        }
        // ... more card objects
      ];

    return (
        <div className=" ">
            <b className="text-3xl pl-8 pr-8 ">CROW REPORT</b>
            {/* ... additional content ... */}
            
            <div className='flex flex-row justify-center'>
                <div className='topics w-4/5 p-8 max-w-screen-2xl'>
                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                    </div>

                    <div className='py-8 pb-14'>
                        <CarouselComponent images={imageUrls1}/>
                    </div>

                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                    </div>

                    <div className='py-8 pb-14'>
                        <CarouselComponent images={imageUrls2}/>
                    </div>

                    <div className='flex justify-between space-x-8 px-4'>
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                        
                        <Card 
                        title="Noteworthy technology acquisitions 2021" 
                        content={card1}
                        />
                    </div>
                
                
                </div>
                <div className='w-1/5 h-screen px-2'>
                    <div className='h-screen border-slate-600 border-2 border-dotted text-center'>ad space</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
