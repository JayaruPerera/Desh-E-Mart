import HeroSection from "../hero";
import HeroCCTVImage from "@/assets/images/pcctv.hero.png"

function CCTVDetails() {
    return ( 
        <div>
            <HeroSection heroImage={HeroCCTVImage.src}/>
            
            <h1>CCTV Details</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque id ex consequat malesuada.</p>
        </div>
    );
}

export default CCTVDetails;