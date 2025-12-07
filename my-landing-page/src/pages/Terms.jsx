import React from "react";

export const TermsOfService = () => {
  return (
    <div className="w-full bg-white px-6 md:px-12 lg:px-20 py-16">

      {/* HEADER */}
      <h1 className="text-[22px] md:text-[28px] lg:text-[32px] px-20 font-bold text-black mb-6">
        Terms of Service
      </h1>

      {/* INTRO + IMAGE */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        
        {/* TEXT */}
        <div className="lg:w-[60%]">
          <p className="text-[14px] md:text-[16px] lg:text-[28px] text-[#000000] font-normal leading-relaxed">
            Welcome to Remote Health. By accessing or <br />using our platform, you agree to the <br />
            following Terms of Service. Please <br /> read them carefully.
          </p>

          <p className="text-[13px] md:text-[14px] lg:text-[28px] italic text-[#007BFF] font-medium mt-4">
            Last Updated: 20-08-25
          </p>
        </div>

        {/* IMAGE */}
        <div className="lg:w-[40%] flex justify-center lg:justify-end">
          <img
            src="./public/images/Group-7.svg"
            alt="Terms Visual"
            className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-[380px] rounded-lg"
          />
        </div>
      </div>

      {/* SECTIONS */}
      <div className="mt-12 space-y-10">

        {/* SECTION TEMPLATE */}
        {[
          {
            title: "1. Acceptance of Terms",
            bullets: [
              "By using Remote Health, you agree to comply with these Terms and Conditions.",
              "If you do not agree, you must discontinue use of the platform immediately.",
              "We may update these terms at any time. Continued use indicates acceptance of changes."
            ]
          },
          {
            title: "2. Use of Services",
            bullets: [
              "Services are strictly for non-emergency medical consultations.",
              "In emergencies, call your local emergency number immediately.",
              "Users must provide accurate, complete, and truthful health and personal information.",
              "Misuse of the platform (fraud, false information, or illegal activity) may result in account suspension or termination."
            ]
          },
          {
            title: "3. User Eligibility",
            bullets: [
              "You must be 18 years or older or have parental/guardian consent to use Remote Health.",
              "Users confirm they are accessing the service for themselves or dependents under their care."
            ]
          },
          {
            title: "4. Subscriptions and Payments",
            bullets: [
              "Remote Health offers pay-per-consultation and subscription-based services.",
              "Payments are securely processed via Moovvy (debit/credit cards, bank transfers, mobile wallets).",
              "Payments are non-refundable except in cases of proven technical issues preventing service access.",
              "Insurance payments may be available through select HMO partnerships."
            ]
          },
          {
            title: "5. Medical Consultations & Limitations",
            bullets: [
              "Consultations are conducted only by licensed medical professionals.",
              "Remote Health is not responsible for:",
              " • Misdiagnosis caused by incorrect or incomplete user information.",
              " • Unavailability of specialists at specific times.",
              " • Prescription denied due to local or international regulations.",
              "Prescriptions, when applicable, can be sent directly to pharmacies or delivered to patients."
            ]
          },
          {
            title: "6. Privacy and Data Protection",
            bullets: [
              "Remote Health complies with NDPR (Nigeria Data Protection Regulation) and HIPAA (Health Insurance Portability and Accountability Act).",
              "All personal and medical data is encrypted and securely stored.",
              "Data will not be shared without user consent unless required by law.",
              "Users may request access, correction, or deletion of their data at any time."
            ]
          },
          {
            title: "7. User Responsibilities",
            bullets: [
              "By using Remote Health, you agree to:",
              "  Use the platform only for lawful, intended medical purposes.",
              "  Maintain the confidentiality of your login details.",
              "  Respect doctors, staff, and other users.",
              "  Not attempt to hack, reverse-engineer, or disrupt the platform."
            ]
          },
          {
            title: "8. Limitation of Liability",
            bullets: [
              "Remote Health provides medical consultations but does not guarantee specific outcomes.",
              "The platform is not a replacement for physical medical examination where necessary.",
              "RemoteHealth shall not be held liable for:'",
              "Internet or technical disruptions.",
              "Delays beyond reasonable control.",
              "Indirect, incidental, or consequential damages."
              ]
          },
          {
            title: "9. Termination",
            bullets: [
              "Remote Health reserves the right to suspend or terminate accounts in cases of:",
              " Breach of terms.",
              " Fraudulent use.",
              " Abusive behavior toward doctors or staff."
            ]
          }
        ].map((section, index) => (
          <div key={index}>

            {/* SECTION TITLE */}
            <h2 className="text-[18px] md:text-[22px] lg:text-[28px] font-bold text-[#007BFF] mb-4">
              {section.title}
            </h2>

            {/* BULLETS */}
            <div className="space-y-3">
              {section.bullets.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  
                  {/* Dot */}
                  <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center mt-[6px]">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#007BFF] rounded-full"></div>
                  </div>

                  {/* Text */}
                  <p className="text-[14px] md:text-[16px] lg:text-[28px] text-[#000000] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default TermsOfService;
