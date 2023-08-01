import ContactUsSection from '@/components/Homepage/ContactUsSection'
import CoursesSection from '@/components/Homepage/CoursesSection'
import FAQsection from '@/components/Homepage/FAQsection'
import HeroSection from '@/components/Homepage/HeroSection'
import KeyFeaturesSection from '@/components/Homepage/KeyFeaturesSection'
import ServicesSection from '@/components/Homepage/ServicesSection'
import TestimonialSection from '@/components/Homepage/TestimonialSection'
import WhatWeDoSection from '@/components/Homepage/WhatWeDoSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <TestimonialSection />
      <KeyFeaturesSection />
      <CoursesSection />
      <FAQsection />
      <ContactUsSection />
    </div>
  )
}

export default Home