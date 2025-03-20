import React, { useState, useEffect } from "react";

const Privacy= () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 0 && sectionTop > -section.clientHeight) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      
      {/* Sidebar */}
      <div className="hidden lg:block lg:w-1/4 p-4 bg-sky-100 border-r sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
        <ul>
          <li className={activeSection === "section1" ? "text-blue-500" : ""}>
            <a href="#section1" className="block py-2">Information We Collect</a>
          </li>
          <li className={activeSection === "section2" ? "text-blue-500" : ""}>
            <a href="#section2" className="block py-2">How We Use Your Information</a>
          </li>
          <li className={activeSection === "section3" ? "text-blue-500" : ""}>
            <a href="#section3" className="block py-2">How We Protect Your Information</a>
          </li>
          <li className={activeSection === "section4" ? "text-blue-500" : ""}>
            <a href="#section4" className="block py-2">Cookies and Tracking Technologies</a>
          </li>
          <li className={activeSection === "section5" ? "text-blue-500" : ""}>
            <a href="#section5" className="block py-2">Sharing Your Information</a>
          </li>
          <li className={activeSection === "section6" ? "text-blue-500" : ""}>
            <a href="#section6" className="block py-2">Your Rights and Choices</a>
          </li>
          <li className={activeSection === "section7" ? "text-blue-500" : ""}>
            <a href="#section7" className="block py-2">Children's Privacy</a>
          </li>
          <li className={activeSection === "section8" ? "text-blue-500" : ""}>
            <a href="#section8" className="block py-2">Changes to This Privacy Policy</a>
          </li>
        </ul>
      </div>

      {/* Privacy Policy Content */}
      <div className="w-full lg:w-3/4 p-4 lg:p-8 space-y-8 overflow-y-auto bg-sky-100">
      <h2 className="text-lg font-extrabold text-center">Our Privacy & Policy</h2>
        <div id="section1" className="section">
          <h3 className="text-2xl font-semibold">Information We Collect</h3>
          <p className="mt-2">
            We collect personal information in the following ways:
          </p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">Account Information:</span> When you create an account with us, we collect your name, email address, phone number, billing and shipping address, and any other details required for processing your orders.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">Order Information:</span> When you make a purchase, we collect information related to the transaction, including payment details, order history, and product preferences.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">Website Activity:</span> We automatically collect information about your visit to our website, such as IP address, browser type, device type, pages visited, and time spent on our site through cookies and similar technologies.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">Communication Data:</span> If you contact us via email, phone, or through our customer service system, we may collect communication logs.</li>
          </ol>
        </div>

        <div id="section2" className="section">
          <h3 className="text-2xl font-semibold">How We Use Your Information</h3>
          <p className="mt-2">
            We use your personal information for the following purposes:
          </p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">To Process Orders:</span> We use your information to process and fulfill your orders, including payment processing, shipping, and customer service.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">To Improve Our Services:</span> We may use your information to improve our website, products, and services, and to personalize your shopping experience.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">To Communicate with You:</span> We may send you emails regarding your order status, promotional offers, and updates. You can opt-out of marketing communications at any time by following the unsubscribe link.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">To Prevent Fraud:</span> We may use your information to detect and prevent fraudulent transactions and ensure the security of our website and services.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold">To Comply with Legal Obligations:</span> We may need to use your personal information to comply with applicable laws, regulations, or legal processes.</li>
          </ol>
        </div>

        <div id="section3" className="section">
          <h3 className="text-2xl font-semibold">How We Protect Your Information</h3>
          <p className="mt-2">
          We take reasonable precautions to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes the use of encryption technologies and secure payment processing methods.
          </p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Secure Payment Processing:</span>We use [SSL/TLS encryption] and other security measures to protect your payment information during transactions.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Data Storage:</span>Personal data is stored on secure servers, and we limit access to personal information to authorized personnel only.</li>
          </ol>
         </div>

         <div id="section4" className="section">
          <h3 className="text-2xl font-semibold">Cookies and Tracking Technologies</h3>
          <p className="mt-2">
          We use cookies and other tracking technologies (such as web beacons) to collect information about your browsing behavior and to enhance your experience on our website.
          </p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Cookies: </span>Cookies are small text files placed on your device to help us analyze web traffic and improve our website.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Third-Party Tracking: </span>We may use third-party services such as Google Analytics to track your activity and improve our site’s functionality.</li>
          </ol>
         </div>

         <div id="section5" className="section">
          <h3 className="text-2xl font-semibold">Sharing Your Information</h3>
          <p className="mt-2">
          We do not sell or rent your personal information to third parties. However, we may share your information with trusted third-party partners in the following circumstances:
          </p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Service Providers:  </span>We may share your information with third-party vendors who help us process orders, deliver products, or handle payments.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Legal Compliance:  </span>We may disclose your information when required by law or to protect our rights, property, or safety, or that of others.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Business Transfers: </span>If we merge with or are acquired by another company, your information may be transferred as part of the transaction.</li>
          </ol>
         </div>
         
         <div id="section6" className="section">
          <h3 className="text-2xl font-semibold">Your Rights and Choices</h3>
          <p className="mt-2">
          You have the following rights regarding your personal data:</p>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Access:  </span>You may request access to the personal data we hold about you.</li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Correction: </span>You can request corrections to any inaccurate or incomplete information.
            </li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Deletion: </span>You may request the deletion of your personal data, subject to certain exceptions (such as if we need to retain it for legal or business reasons).
            </li>
          </ol>
          <ol className="list-disc pl-4 mt-2 ml-5">
            <li><span className="font-bold text-justify">Opt-Out: </span>You can opt out of receiving promotional emails at any time by using the unsubscribe link included in our emails.
            </li>
          </ol>
         </div>

        {/* More sections... */}
        
        <div id="section7" className="section">
          <h3 className="text-2xl font-semibold">Children's Privacy</h3>
          <p>
            Our website is not intended for individuals under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </div>

        <div id="section8" className="section">
          <h3 className="text-2xl font-semibold">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated "Effective Date." We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
