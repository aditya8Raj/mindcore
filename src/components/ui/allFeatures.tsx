import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Globe, Workflow, Bot, Code, ArrowRight } from "lucide-react";

const allFeatures = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* CARD 1 */}
        <CardSpotlight className="group p-6 h-80 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold relative z-20 mt-2 text-white group-hover:text-neutral-100 transition-colors duration-200">
              Web-Scale Intelligence
            </h3>
            <p className="text-neutral-300 mt-4 relative z-20 text-2xl group-hover:text-neutral-200 transition-colors duration-200">
              Automatically scrape high-quality, relevant data from across the
              web for your unique AI use cases.
            </p>
          </div>
          <div className="text-neutral-200 mt-6 relative z-20 flex justify-between items-center group-hover:text-neutral-100 transition-colors duration-200">
            <Globe className="h-6 w-6" />
            <div className="flex items-center text-sm font-medium">
              <span className="mr-2 text-base">Explore More</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </CardSpotlight>

        {/* CARD 2 */}
        <CardSpotlight className="group p-6 h-80 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold relative z-20 mt-2 text-white group-hover:text-neutral-100 transition-colors duration-200">
              Modular AI Pipelines
            </h3>
            <p className="text-neutral-300 mt-4 relative z-20 text-2xl group-hover:text-neutral-200 transition-colors duration-200">
              Connect, compose, and control modular components with unified APIs
              and CLI support.
            </p>
          </div>
          <div className="text-neutral-200 mt-6 relative z-20 flex justify-between items-center group-hover:text-neutral-100 transition-colors duration-200">
            <Workflow className="h-6 w-6" />
            <div className="flex items-center text-sm font-medium">
              <span className="mr-2 text-base">Explore More</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </CardSpotlight>

        {/* CARD 3 */}
        <CardSpotlight className="group p-6 h-80 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold relative z-20 mt-2 text-white group-hover:text-neutral-100 transition-colors duration-200">
              Build Agents in Minutes
            </h3>
            <p className="text-neutral-300 mt-4 relative z-20 text-2xl group-hover:text-neutral-200 transition-colors duration-200">
              Use our open-source CLI framework to spin up intelligent agents
              quickly and efficiently.
            </p>
          </div>
          <div className="text-neutral-200 mt-6 relative z-20 flex justify-between items-center group-hover:text-neutral-100 transition-colors duration-200">
            <Bot className="h-6 w-6" />
            <div className="flex items-center text-sm font-medium">
              <span className="mr-2 text-base">Explore More</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </CardSpotlight>

        {/* Card 4 */}
        <CardSpotlight className="group p-6 h-80 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold relative z-20 mt-2 text-white group-hover:text-neutral-100 transition-colors duration-200">
              Machine-Ready Data
            </h3>
            <p className="text-neutral-300 mt-4 relative z-20 text-2xl group-hover:text-neutral-200 transition-colors duration-200">
              Seamlessly convert raw training data into formats like JSON,
              optimized for model ingestion.
            </p>
          </div>
          <div className="text-neutral-200 mt-6 relative z-20 flex justify-between items-center group-hover:text-neutral-100 transition-colors duration-200">
            <Code className="h-6 w-6" />
            <div className="flex items-center text-sm font-medium">
              <span className="mr-2 text-base">Explore More</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </CardSpotlight>
      </div>
    </>
  );
};

export default allFeatures;
