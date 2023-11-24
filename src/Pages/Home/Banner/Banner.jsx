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
    );
};

export default Banner;