import { NextPage } from "next";
import Head from "next/head";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <main className="flex flex-col flex-grow px-6 pt-1 ">
      <Head>
        <title>Web Developer | portfolio |sanvi sun</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <p className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </p>
      <div
        className="flex-grow p-4 mt-5 bg-gray-300 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h2 className="my-3 text-xl text-black font-semibold tracking-wide">
          What I am doing
        </h2>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
