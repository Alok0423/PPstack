import { useState } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CourseCard from "../components/courses/CourseCard";
import FilterSidebar from "../components/courses/FilterSidebar";
import { ChevronDown } from "lucide-react";

// Dummy Data simulating an API response
const COURSES_DATA = [
  {
    id: 1,
    type: "Short Course",
    title: "ChatGPT Prompt Engineering for Developers",
    description: "Learn how to use a large language model (LLM) to quickly build new and powerful applications. Using the OpenAI API, you'll be able to build capabilities that...",
    partner: "OpenAI",
    color: "bg-green-600"
  },
  {
    id: 2,
    type: "Professional Certificate",
    title: "PyTorch for Deep Learning Professional Certificate",
    description: "Learn the core principles of building, optimizing, and deploying deep learning models using PyTorch. Master the framework used by top researchers.",
    partner: "DeepLearning.AI",
    color: "bg-red-500"
  },
  {
    id: 3,
    type: "Short Course",
    title: "LangChain for LLM Application Development",
    description: "Learn how to apply fine-tuning and reinforcement learning techniques to shape the behavior of Large Language Models for your specific use cases.",
    partner: "LangChain",
    color: "bg-purple-600"
  },
  {
    id: 4,
    type: "Course",
    title: "Generative AI with Large Language Models",
    description: "Gain the skills to use Generative AI in your projects. Understand the transformer architecture and how to train these models efficiently.",
    partner: "AWS",
    color: "bg-yellow-600"
  },
  {
    id: 5,
    type: "Short Course",
    title: "JavaScript for AI Developers",
    description: "Integrate AI capabilities into your web applications using standard JavaScript. No Python required for this specialized track.",
    partner: "PPStack",
    color: "bg-blue-600"
  },
  {
    id: 6,
    type: "Short Course",
    title: "Vector Databases for Embeddings",
    description: "Understand how to store and retrieve high-dimensional data for RAG applications using modern vector databases.",
    partner: "Pinecone",
    color: "bg-indigo-500"
  },
];

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Most Popular");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8 w-full mt-20 flex-1">
        
        <div className="flex flex-col md:flex-row gap-12">
            
          {/* LEFT SIDEBAR */}
          <aside className="hidden md:block">
             <FilterSidebar />
          </aside>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            
            {/* Header: Tabs & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div className="flex gap-8">
                    {["Most Popular", "Top Rated", "Newest"].map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${
                                activeTab === tab 
                                ? "border-brand-blue text-brand-blue" 
                                : "border-transparent text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                    <span className="text-gray-500 text-sm">Sort by:</span>
                    <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Newest <ChevronDown size={14} />
                    </button>
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {COURSES_DATA.map((course) => (
                    <CourseCard key={course.id} {...course} />
                ))}
            </div>

            {/* Pagination (Simple) */}
            <div className="mt-12 flex justify-center">
                <button className="px-4 py-2 border border-gray-300 rounded-l hover:bg-gray-50 text-gray-600">Prev</button>
                <button className="px-4 py-2 bg-brand-blue text-white border border-brand-blue">1</button>
                <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-600">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-r hover:bg-gray-50 text-gray-600">Next</button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;