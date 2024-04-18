import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import axios from 'axios';

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getPortfolioData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/portfolio/get-portfolio-data');
      console.log(response);
    } catch (error) {

    }
  }

  useEffect(() => {
    console.log('useEffect is running');
    getPortfolioData();
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
