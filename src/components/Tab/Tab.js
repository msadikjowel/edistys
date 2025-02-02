"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import customerFocused from "../../assets/customerFocused.jpg";
import agile from "../../assets/agile.jpg";
import compliance from "../../assets/compliance.jpg";
import secure from "../../assets/secure.jpg";
import styles from "../Tab/tab.module.css";

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const firstButtonRef = useRef();

  useEffect(() => {
    firstButtonRef.current.focus();
  }, []);

  // data for the tab
  const items = [
    {
      title: "Customer focused",
      Content: (
        <div
          className={`${styles.tabContainer} flex items-center justify-between border-2 border-blue-400 rounded-lg p-4`}
        >
          <div className={`${styles.tabDiv} w-1/2`}>
            <p className="text-xl font-400 text-blue-600 my-4">
              Customer focused
            </p>
            <h1 className="text-blue-950 font-500 text-5xl my-8">
              Purpose-built financial services
            </h1>
            <p className="text-blue-950 my-4 font-bold">
              Elevate customer experience and achieve agile financial product
              innovation with the worlds first, consumer-centric, real-time
              transaction account processing and credit limit system
            </p>
            <p className="text-blue-700">
              Experience the advantages of integrated retail financial services
              technology, real-time analysis of transactional behaviour and
              product marketing opportunites.
            </p>
          </div>

          <div className={`${styles.tabDiv} ${styles.tabImage} w-1/2 ml-8`}>
            <Image
              src={customerFocused}
              width="auto"
              height="auto"
              alt="customer focused image"
              className={` rounded-3xl`}
            />
          </div>
        </div>
      ),
    },

    {
      title: "Agile and adaptable",
      Content: (
        <div
          className={`${styles.tabContainer} flex items-center justify-between border-2 border-blue-400 rounded-lg p-4`}
        >
          <div className={`${styles.tabDiv} w-1/2`}>
            <p className="text-xl font-400 text-blue-600 my-4">
              Agile and adaptable
            </p>
            <h1 className="text-blue-950 font-500 text-5xl my-8">
              Agile and adaptable for growth
            </h1>
            <p className="text-blue-950 my-4 font-bold">
              Innovate with evolving customer demands through our open
              platform-based technology architecture. Stay ahead of the
              ever-changing financial landscape with a strong focus on security,
              compliance and performance.
            </p>
            <p className="text-blue-700">
              Optimise your offerings to unlock new revenue streams and deliver
              an extraordinary customer experience, with digitally designed core
              banking, payment processing and lending capabilities.
            </p>
          </div>

          <div className={`${styles.tabDiv} ${styles.tabImage} w-1/2 ml-8`}>
            <Image
              src={agile}
              width="auto"
              height="auto"
              alt="customer focused image"
              className="rounded-3xl"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Compliance ready",
      Content: (
        <div
          className={`${styles.tabContainer} flex items-center justify-between border-2 border-blue-400 rounded-lg p-4`}
        >
          <div className={`${styles.tabDiv} w-1/2`}>
            <p className="text-xl font-400 text-blue-600 my-4">
              Compliance ready
            </p>
            <h1 className="text-blue-950 font-500 text-5xl my-8">
              Manage compliance with ease
            </h1>
            <p className="text-blue-950 my-4 font-bold">
              Navigate through the evolving regulatory landscape with confidence
              by streamlining compliance management—through real-time risk
              monitoring solutions powered by AI and machine learning.
            </p>
            <p className="text-blue-700">
              Transform your compliance strategy with flexible and diversified
              policy rules, powered by cutting-edge technology that is designed
              for seamless integration with core banking and card payment
              systems.
            </p>
          </div>

          <div className={`${styles.tabDiv} ${styles.tabImage} w-1/2 ml-8`}>
            <Image
              src={compliance}
              width="auto"
              height="auto"
              alt="customer focused image"
              className="rounded-3xl"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Secure and safe",
      Content: (
        <div
          className={`${styles.tabContainer} flex items-center justify-between border-2 border-blue-400 rounded-lg p-4`}
        >
          <div className={`${styles.tabDiv} w-1/2`}>
            <p className="text-xl font-400 text-blue-600 my-4">
              Secure and safe
            </p>
            <h1 className="text-blue-950 font-500 text-5xl my-8">
              Highly secure and safe
            </h1>
            <p className="text-blue-950 my-4 font-bold">
              Discover unparalleled security trusted by financial institutions
              across the globe. Our applications are meticulously developed in
              compliance with international security standards, drawing on 20
              years of technical expertise.
            </p>
            <p className="text-blue-700">
              Join over 40 esteemed Fls, each serving more than 200 million
              customers, and benefit from our secure, robust and reliable
              infrastructure.
            </p>
          </div>

          <div className={`${styles.tabDiv} ${styles.tabImage} w-1/2 ml-8`}>
            <Image
              src={secure}
              width="auto"
              height="auto"
              alt="customer focused image"
              className="rounded-3xl"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-lg p4 mt-40">
      <p className="text-center font-400 mt-8 text-blue-400">
        TECHNOLOGY BUILT FOR YOU
      </p>
      <h1 className="text-center font-bold my-4 text-blue-950 text-6xl">
        The future of finance
      </h1>

      <div className=" flex justify-center items-center py-12">
        <div className="max-w-screen-lg flex flex-col gap-y-2 w-full">
          <div
            className={`${styles.tabButtonDiv} p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-blue-600`}
          >
            {items.map((item, index) => (
              <button
                onClick={() => setSelectedTab(index)}
                ref={index === 0 ? firstButtonRef : null}
                className={`outline-none w-full p-2 hover:bg-blue-100 rounded-3xl text-center  focus:bg-blue-100 focus:text-blue-600 ${
                  selectedTab === index
                    ? " bg-blue-100 text-blue-600 outline-none"
                    : ""
                }`}
                key={index}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="bg-white p-2 rounded-xl">
            {items.map((item, index) => (
              <div
                className={`${selectedTab === index ? "" : "hidden"}`}
                key={index}
              >
                {item.Content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
