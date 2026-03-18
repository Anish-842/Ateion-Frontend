const HowGCOWorks = () => {

return(

<section className="bg-[#F4EFE6] px-[80px] pt-[160px] pb-[120px]">

{/* TITLE */}

<h2 className="text-center text-[32px] font-medium text-[#1A120B] mb-[90px]">
How GCO Works ?
</h2>

{/* TIMELINE */}

<div className="relative max-w-[900px] mx-auto">

{/* Vertical line */}

<div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#2A2139]"></div>

<div className="space-y-[85px]">

{/* STEP 1 */}

<div className="flex justify-between items-center">

<div className="w-[38%] flex justify-end">

<div className="w-[70px] h-[70px] bg-[#D8CFBF] rounded-full flex items-center justify-center text-[22px]">

📖

</div>

</div>

<div className="w-[30px] h-[30px] bg-[#2A2139] text-white rounded-full flex items-center justify-center text-[14px] z-10">

1

</div>

<div className="w-[38%] text-[15px] text-[#2A2520]">

Students face unfamiliar  
real-world scenarios.

</div>

</div>

{/* STEP 2 */}

<div className="flex justify-between items-center">

<div className="w-[38%] text-right text-[15px] text-[#2A2520]">

There is no syllabus to  
prepare from.

</div>

<div className="w-[30px] h-[30px] bg-[#2A2139] text-white rounded-full flex items-center justify-center text-[14px] z-10">

2

</div>

<div className="w-[38%]">

<div className="w-[70px] h-[70px] bg-[#D8CFBF] rounded-full flex items-center justify-center text-[22px]">

☒

</div>

</div>

</div>

{/* STEP 3 */}

<div className="flex justify-between items-center">

<div className="w-[38%] flex justify-end">

<div className="w-[70px] h-[70px] bg-[#D8CFBF] rounded-full flex items-center justify-center text-[22px]">

🧠

</div>

</div>

<div className="w-[30px] h-[30px] bg-[#2A2139] text-white rounded-full flex items-center justify-center text-[14px] z-10">

3

</div>

<div className="w-[38%] text-[15px] text-[#2A2520]">

AI evaluates reasoning  
pathways — not memory.

</div>

</div>

{/* STEP 4 */}

<div className="flex justify-between items-center">

<div className="w-[38%] text-right text-[15px] text-[#2A2520]">

Students receive a  
Strategic Capability Report.

</div>

<div className="w-[30px] h-[30px] bg-[#2A2139] text-white rounded-full flex items-center justify-center text-[14px] z-10">

4

</div>

<div className="w-[38%]">

<div className="w-[70px] h-[70px] bg-[#D8CFBF] rounded-full flex items-center justify-center text-[22px]">

📊

</div>

</div>

</div>

</div>

</div>

</section>

);

};

export default HowGCOWorks;