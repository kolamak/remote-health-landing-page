import Footer_1 from "../components/Footer_1";
import aboutImg from  "../assets/about-header-img.svg"
import aboutImg1 from  "../assets/about-img-1.svg"
import aboutImg2 from  "../assets/about-img-2.svg"
import aboutImg3 from  "../assets/about-img-3.svg"
import aboutImg4 from  "../assets/about-img-4.svg"
import aboutImg5 from  "../assets/about-img-5.svg"

const About = () => {
  return (

  <div className="min-h-screen bg-white font-sans">
  <header>
    <img 
      src={aboutImg} 
      alt="About page header" 
      className="w-full h-auto max-h-[400px] object-cover"
    />

    {/* Header */}
    <div className="relative max-w-7xl mx-auto py-8 md:py-16 px-4 sm:px-6 text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#000000] mx-auto">
        RemoteHealth provides best virtual consultations
      </p>
    </div>
  </header>

  <section>
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
      
      {/* virtual-consultations */}
      <div className="flex flex-col md:flex-row mb-6 md:mb-8 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-4 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 md:mb-4">Virtual Consultations</h3>
          <p className="text-sm sm:text-base text-[#000000] font-medium">
            RemoteHealth provides a platform for virtual consultations between Patients and Healthcare Providers via secure audio and video calls. The quality of consultations depends on internet connectivity, which we do not control.
          </p>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <img 
            src={aboutImg1} 
            alt="Person using video call on phone" 
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* AI-powered-symptom-checker */}
      <div className="flex flex-col md:flex-row mb-6 md:mb-8 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 md:mb-4">AI-Powered Symptom Checker</h3>
          <p className="text-sm sm:text-base text-[#000000] font-medium">
            The AI symptom checker is provided for informational and triage purposes only. It does not constitute medical advice, diagnosis, or treatment. You should always consult with a licensed Healthcare Provider for medical concerns. AI tools on the Platform are informational only and do not constitute medical diagnosis or treatment.
          </p>
        </div>

        <div className="md:w-1/2">
          <img 
            src={aboutImg2} 
            alt="Person on laptop ordering medicine" 
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* e-prescription */}
      <div className="flex flex-col md:flex-row mb-6 md:mb-8 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-4 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 md:mb-4">E-Prescriptions</h3>
          <p className="text-sm sm:text-base text-[#000000] font-medium">
            Healthcare Providers may issue electronic prescriptions through the Platform. Patients are responsible for obtaining medications from licensed pharmacies and following all prescription instructions.
          </p>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <img 
            src={aboutImg3} 
            alt="Doctors in a hospital setting" 
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* medical-records */}
      <div className="flex flex-col md:flex-row mb-6 md:mb-8 shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-4 sm:p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 md:mb-4">Medical Records Storage</h3>
          <p className="text-sm sm:text-base text-[#000000] font-medium">
            We provide secure, cloud-based storage for your medical records. While we implement industry-standard security measures, you acknowledge that no system is completely secure and use this feature at your own risk.
          </p>
        </div>

        <div className="md:w-1/2">
          <img 
            src={aboutImg4} 
            alt="Doctor looking at medical screens" 
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>

      {/* preventive-care */}
      <div className="flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden">
        <div className="md:w-1/2 bg-[#E6F2FF] p-4 sm:p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007BFF] mb-2 md:mb-4">Appointment Scheduling</h3>
          <p className="text-sm sm:text-base text-[#000000] font-medium">
            The Platform allows you to schedule appointments with available Healthcare Providers. Appointments are subject to Provider availability and may be rescheduled or canceled in accordance with our cancellation policy.
          </p>
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <img 
            src={aboutImg5} 
            alt="Doctor talking with patient on a couch" 
            className="w-full h-[250px] sm:h-[300px] md:h-full object-cover"
          />
        </div>
      </div>
      
    </div>
  </section>
    <Footer_1 />
  </div>
  );
};

export default About;
