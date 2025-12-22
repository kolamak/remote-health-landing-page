import Footer_1 from "../components/Footer_1";
import aboutImg from  "../assets/about-header-img.svg"
import aboutImg1 from  "../assets/about-img-1.svg"
import aboutImg2 from  "../assets/about-img-2.svg"
import aboutImg3 from  "../assets/about-img-3.svg"
import aboutImg4 from  "../assets/about-img-4.svg"
import aboutImg5 from  "../assets/about-img-5.svg"

const About = () => {
  return (

<div class="min-h-screen bg-white font-sans">
  <header>
    <img src={aboutImg} alt="" />

    {/* Header */}
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:py-20 md:py-24 text-center">
      <p class="text-base sm:text-lg lg:text-[40px] font-bold text-[#000000] mx-auto">
        RemoteHealth provides best virtual consultations
      </p>
      {/* <span className="w-[200px] h-1 bg-blue-600 mx-auto rounded-lg"></span> */}
    </div>
  </header>

  <section>
    {/* virtual-consultations */}
      <div className="min-h-screen bg-white p-4 sm:p-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
          <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold  text-[#007BFF] mb-2">Virtual Consultations</h3>
          <p className="text-[#000000] font-medium">RemoteHealth provides a platform for virtual consultations between Patients and Healthcare Providers via secure audio and video calls. The quality of consultations depends on internet connectivity, which we do not control.</p>
        </div>

         <div className="md:w-1/2">
        <img src={aboutImg1} alt="Person using video call on phone" class="w-full h-full object-cover"></img>
        </div>
      </div>
  
    {/*  */}
      <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#007BFF] mb-2">AI-Powered Symptom Checker</h3>
          <p className="text-[#000000] font-medium">The AI symptom checker is provided for informational and triage purposes only. It does not constitute medical advice, 
            diagnosis, or treatment. You should always consult with a licensed Healthcare Provider for medical concerns. AI tools on the Platform are informational only and
             do not constitute medical diagnosis or treatment.
          </p>
        </div>

         <div className="md:w-1/2">
        <img src={aboutImg2} alt="Person on laptop ordering medicine" class="w-full h-full object-cover"></img>
        </div>
        </div>

      {/* e-prescription */}
      <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#007BFF] mb-2">E-Prescriptions</h3>
          <p className="text-[#000000] font-medium">Healthcare Providers may issue electronic prescriptions through the Platform. Patients are responsible
             for obtaining medications from licensed pharmacies and following all prescription instructions.</p>
        </div>

        <div className="md:w-1/2">
        <img src={aboutImg3} alt="Doctors in a hospital setting" class="w-full h-full object-cover"></img>
        </div>
      </div>
  
    {/* medical-records */}
      <div className="flex flex-col md:flex-row mb-6 shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#007BFF] mb-2">Medical Records Storage</h3>
          <p className="text-[#000000] font-medium">We provide secure, cloud-based storage for your medical records. While we implement industry-standard security measures, 
            you acknowledge that no system is completely secure and use this feature at your own risk.</p>
        </div>``
         <div className="md:w-1/2">
        <img src={aboutImg4} alt="Doctor looking at medical screens" class="w-full h-full object-cover"></img>
        </div>
      </div>
  
    {/*preventive-care */}
      <div className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-[#007BFF] mb-2">Appointment Scheduling</h3>
          <p className="text-[#000000] font-medium">The Platform allows you to schedule appointments with available Healthcare Providers. 
            Appointments are subject to Provider availability and may be rescheduled or canceled in accordance with our cancellation policy.</p>
        </div>

         <div className="md:w-1/2">
        <img src={aboutImg5} alt="Doctor talking with patient on a couch" class="w-full h-full object-cover"></img>
        </div>
      </div>
  
      </div>
      </section>
  
< Footer_1 />
</div>
  );
};

export default About;
