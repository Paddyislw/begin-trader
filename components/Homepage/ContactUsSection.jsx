import React from "react";

const ContactUsSection = () => {
  return (
    <div className="bg-primary space-y-10 py-20 px-3">
      <p className="text-center text-primaryLight font-bold text-xl mb:text-base">
        Contact With Us
      </p>
      <div>
        <p className="text-center text-white text-5xl font-semibold sm:text-3xl lg:text-4xl mb:text-2xl">
          Interested?
        </p>
        <p className="text-center text-white text-5xl font-semibold sm:text-3xl lg:text-4xl mb:text-2xl">
          Lets Start a Projects Together
        </p>
      </div>
      <button className="bg-primaryDark px-4 py-2 text-white mx-auto flex rounded-lg">
        Contact Us
      </button>
    </div>
  );
};

export default ContactUsSection;
