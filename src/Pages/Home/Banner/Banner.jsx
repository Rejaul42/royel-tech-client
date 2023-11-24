import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../assets/image/1.jpg";
import img2 from "../../../assets/image/2.jpg";
import img3 from "../../../assets/image/3.jpg";
import img4 from "../../../assets/image/4.jpg";
import img5 from "../../../assets/image/5.jpg";
import img6 from "../../../assets/image/6.jpg";

const Banner = () => {
    return (
        <div className="mb-12">
            <div className=" w-full h-[600px] absolute z-10 bg-gradient-to-r from-black to-[rgba(255, 255, 255, 0.00)] text-white ">
                <div className="pl-3 lg:pl-12 mt-40">
                    <h1 className=" text-5xl font-bold mb-6">Empowering Your Digital Journey with <br /> <span className="text-orange-600">R O Y E L</span> <span className="text-orange-500">T E C H</span></h1>
                    <p>
                        Empower Your Tomorrow, Today. Explore Infinite Possibilities with Royel Tech Technology. Unleash the Future Now! <br />Here, the emphasis is on the personal connection with the audience. The brand is positioned as more than just a <br /> provider of tech. it is a companion in the journey. Connecting Dreams,  <br /> Share your latest Tech product here.</p>
                </div>
            </div>
            <div className="relative">
                <Carousel className="text-center h-[650px]">
                    <div className="h-[600px]">
                        <img className="" src={img1} />

                        <p className="legend">Legend 1</p>
                    </div>
                    <div className="h-[600px]">
                        <img src={img2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div className="h-[600px]">
                        <img src={img3} />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div className="h-[600px]">
                        <img src={img4} />
                        <p className="legend">Legend 4</p>
                    </div>
                    <div className="h-[600px]">
                        <img src={img5} />
                        <p className="legend">Legend 5</p>
                    </div>
                    <div className="h-[600px]">
                        <img src={img6} />
                        <p className="legend">Legend 6</p>
                    </div>
                </Carousel>
            </div>

        </div>
    );
};

export default Banner;