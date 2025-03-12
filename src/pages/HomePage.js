import React from "react";
import Hero from "../components/Hero";
import JobListings from "../components/JobListings";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobListings />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
