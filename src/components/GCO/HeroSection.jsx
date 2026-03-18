import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";

import redImg from "../../assets/3aab4451afd875f66a83eb26e0ca2d6f58abce98.png";
import peopleImg from "../../assets/a440209918fa81a1c528e2e95290d4f1f12546e7.png";
import partner1 from "../../assets/e54e08242e5e8cea29c382ba6bc82218d425f28e.png";
import abcImg from "../../assets/e985b07ea1f916546c05a06ca93558ef62ecc870.png";
import partner2 from "../../assets/eba887f3bcae20b7a5611026256348307e65c2c4.png";

const HeroSection = () => {

return(

<section className="bg-[#F4EFE6] min-h-[920px] relative overflow-hidden">

{/* NAVBAR */}

<div className="flex justify-between items-center px-[72px] pt-[28px]">

<img src={logo} className="w-[30px]" />

<div className="flex gap-[10px] bg-[#E8E3DA] px-[12px] py-[6px] rounded-full">

<button className="px-[18px] py-[6px] text-[14px] text-[#3A312A]">
About us
</button>

<button className="px-[18px] py-[6px] text-[14px] text-[#3A312A]">
Workshops ▼
</button>

<Link to="/gco">

<button className="px-[22px] py-[6px] text-[14px] bg-[#FF5449] text-white rounded-full">
GCO
</button>

</Link>

<button className="px-[18px] py-[6px] text-[14px] text-[#3A312A]">
Learn
</button>

</div>

<button className="bg-[#FF5449] text-white px-[20px] py-[8px] rounded-full text-[14px]">
Get Connected
</button>

</div>

{/* HERO TEXT */}

<div className="text-center mt-[115px] relative z-20">

<h1 className="text-[84px] leading-[88px] font-semibold text-[#1A120B]">

Global Capability  
<br/>

Olympiad

</h1>

<p className="text-[16px] text-[#5B5149] mt-[20px] max-w-[650px] mx-auto leading-[26px]">

The Global Capability Olympiad is the world's first preparation-free,
syllabus-free, AI-integrated Master Olympiad designed to measure thinking,
not memory.

</p>

<div className="flex justify-center gap-[18px] mt-[28px]">

<button className="border border-[#1A120B] px-[30px] py-[11px] rounded-full text-[15px]">

Contact us

</button>

<button className="bg-[#0E0E0E] text-white px-[30px] py-[11px] rounded-full text-[15px]">

Explore more

</button>

</div>

</div>

{/* RIGHT IMAGE STACK */}

{/* TOP RED */}
<img
src={redImg}
className="absolute right-[230px] top-[170px] w-[240px] rounded-[6px] z-30"
/>

{/* MIDDLE ABC */}
<img
src={abcImg}
className="absolute right-[110px] top-[250px] w-[270px] rounded-[6px] z-20"
/>

{/* SMALL CIRCLE */}
<div className="absolute right-[200px] top-[310px] w-[44px] h-[44px] bg-[#FF6A3D] rounded-full flex items-center justify-center text-white font-medium z-40">

k

</div>

{/* BOTTOM PEOPLE */}
<img
src={peopleImg}
className="absolute right-[170px] top-[390px] w-[260px] rounded-[6px] z-10"
/>

{/* PARTNERS */}

<div className="mt-[160px] text-center">

<p className="text-[13px] text-[#6E645C] mb-[18px]">
Aligned with :
</p>

<div className="flex justify-center gap-[22px]">

<img src={partner1}
className="w-[95px] h-[65px] object-contain bg-white rounded-[10px] p-[8px]"
/>

<img src={partner2}
className="w-[95px] h-[65px] object-contain bg-white rounded-[10px] p-[8px]"
/>

<img src={partner1}
className="w-[95px] h-[65px] object-contain bg-white rounded-[10px] p-[8px]"
/>

<img src={partner2}
className="w-[95px] h-[65px] object-contain bg-white rounded-[10px] p-[8px]"
/>

</div>

</div>

</section>

);

};

export default HeroSection;