import { FaUserLock } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";

export const Home = () => {
  return (
    <>
    <article className="py-20 px-4 sm:px-6 lg:px-8 lg:h-[730px]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mt-15">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[48px] font-bold text-[#007BFF] leading-relaxed">
            Your Health, <br /> Anywhere. Anytime.</h1>

        <p className="text-base sm:text-lg md:text-xl text-[#333435] font-normal py-10 mb-10 max-w-md mx-auto md:mx-0">
            Get expert medical care from licensed professionals - all from the comfort of your home.</p>

        <div className="flex flex-col sm:flex-row items-center justify-between border border-black rounded-lg overflow-hidden mt-15 max-w-[450px]">
  
        <div className="px-4 py-4 text-black font-normal text-center sm:text-left flex-1">
        Connect with trusted doctors
        </div>

 
        <button className="bg-[#007BFF] text-white font-bold px-6 py-4 hover:bg-blue-600 transition-colors w-full sm:w-auto">
        Start a consultation
        </button>
        </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/images/Frame-92.svg"
            alt="smiling doctor"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>

      </div>
    </article>

    <main className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 bg-[#E6F2FF] justify-center">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold text-[#000000] mb-4">WHY CHOOSE US?</h2>
        </div>
    
            {/*CARDS */}
        <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 lg:gap-12 max-w-7xl">
            
        <div className="w-full md:w-[427px] h-[327px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
            bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">
        
            <h2 className="text-[20px] font-bold flex items-center gap-5">
            <FaStethoscope className="text-3xl text-[#007BFF]"/>
            Licensed Medical Experts</h2>

            <p className="text-[20px] font-normal mt-6 text-[#000000]">
            Connect with trusted doctors <br /> and nurses anytime, anywhere.</p>
        </div>
            
    
        <div className="w-full md:w-[427px] h-[327px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
            bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">
    
            <h2 className="text-[18px] font-bold flex items-center gap-2"> 
            <FcPhoneAndroid className='text-3xl'/>24/7 Virtual Assistance</h2>

            <p className="text-[20px] font-normal mt-6 text-[#000000]">
            Healthcare that fits into your <br /> schedule, no waiting rooms.</p>
        </div>
    
        <div className="w-full md:w-[427px] h-[360px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
            bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">
    
            <h2 className="text-[20px] font-bold font-nunito flex items-center gap-3"> 
            <GiMedicines className="text-4xl text-[#007BFF]"/>
            E-Prescriptions & Referrals</h2>

            <p className="text-[20px] font-normal mt-6 text-[#000000]">
            Get prescriptions and referrals <br /> sent straight to your local <br /> pharmacy.</p>
        </div>
    
        <div className  ="w-full md:w-[427px] h-[360px] flex flex-col items-center justify-center gap-[12px] rounded-[20px] py-[28px] px-[12px] 
            bg-[#F7F8F8] opacity-100 shadow hover:shadow-lg transition-shadow duration-300">
    
           <h2 className="text-[20px] font-bold flex items-center gap-3"> 
            <FaUserLock className="text-3xl text-[#007BFF]"/>
            Private and Secured</h2>

            <p className="text-[20px] font-normal mt-6 text-[#000000]">We protect your data with top- <br /> grade encryption.</p>
        </div>
    
        </div>
        </div>
        </div>
    </main>

    <section className="w-full py-20 px-4 md:px-10 lg:px-20 mt-20 bg-white">
        <div className="flex flex-col items-center gap-[12px] w-full max-w-[1259px] mx-auto">
            <h1 className="text-center text-[28px] md:text-[36px] lg:text-[28px] font-nunito font-bold text-black">
            Trusted Remote Healthcare for You and Your Family</h1>
                
            <p className="text-center text-[18px] md:text-[22px] lg:text-[20px] font-nunito font-medium leading-[150%] text-black max-w-[900px]">
                We believe access to quality healthcare is a right, not a privilege. Our platform connects you
                with licensed healthcare professionals for virtual consultations, diagnoses, and treatment —all from wherever you arez
                </p>
        </div>

            <h2 className="flex justify-center items-center text-[24px] md:text-[28px] font-bold mx-auto mt-20 p-[10px] gap-[10px] w-auto md:w-[201px] 
            h-auto md:h-[62px] text-black font-nunito">How It Works</h2>
            
        <div className="w-full mt-20">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-14 lg:gap-[56px]">

        {/* 1 */}
        <div className="flex flex-row items-start gap-[17px] w-full md:w-auto">
            <h2 className="text-[48px] md:text-[60px] font-bold leading-[72px]">1.</h2>
                    
        <div className="flex flex-col">
        <div className="flex items-center p-[10px]">
            <h3 className="text-[20px] md:text-[24px] font-semibold leading-[36px]">
            Book an Appointment</h3>
        </div>
                        
        <div className="flex items-center p-[10px]">
            <p className="text-[16px] md:text-[20px] leading-[30px] max-w-[283px]">Pick a time that works for you — even nights or weekends.</p>
        </div>
        </div>
        </div>

        {/* 2 */}
        <div className="flex flex-row items-start gap-[17px] w-full md:w-auto">
            <h2 className="text-[48px] md:text-[60px] font-bold leading-[72px]">2.</h2>

        <div className="flex flex-col">
        <div className="flex items-center p-[10px]">
            <h3 className="text-[20px] md:text-[24px] font-semibold leading-[36px]">Meet Online</h3>
        </div>
                    
        <div className="flex items-center p-[10px]">
            <p className="text-[16px] md:text-[20px] leading-[30px] max-w-[283px]">Join a secure call with a healthcare professional.</p>
        </div>
        </div>
        </div>

        {/* 3 */}
       <div className="flex flex-row items-start gap-[17px] w-full md:w-auto">
              <h2 className="text-[48px] md:text-[60px] font-bold leading-[72px]">3.</h2>
              
       <div className="flex flex-col">
            <div className="flex items-center p-[10px]">
               <h3 className="text-[20px] md:text-[24px] font-semibold leading-[36px]">
               Get Treated</h3>
            </div>

            <div className="flex items-center p-[10px]">
                <p className="text-[16px] md:text-[20px] leading-[30px] max-w-[300px]">
                Receive your diagnosis, treatment plan, and prescription.</p>
            </div>

        </div>
        </div>

        </div>
        </div>
    </section>
    </>
  );
};
export default Home;