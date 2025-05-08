import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';

export const Grid = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
        
        {/* Profile Card */}
        <div className="col-span-1 sm:col-span-2 md:row-span-5 bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Profile"
            className="rounded-full w-28 h-28 mb-4 border-4 border-blue-100 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-800">Alex Chen</h1>
          <p className="text-blue-600 font-medium mb-2">Full Stack Developer</p>
          <p className="text-gray-600 mb-4">Building web applications with modern technologies</p>
          
          <div className="flex space-x-4 mb-6">
            <TechPill icon={<FaCode />} text="Frontend" />
            <TechPill icon={<FaServer />} text="Backend" />
            <TechPill icon={<FaDatabase />} text="DB" />
            <TechPill icon={<FaCloud />} text="DevOps" />
          </div>
          
          <div className="flex space-x-4">
            <SocialLink icon={<FaGithub />} href="#" />
            <SocialLink icon={<FaLinkedin />} href="#" />
            <SocialLink icon={<FaEnvelope />} href="#" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="col-span-1 md:row-span-5 md:col-start-3 bg-white p-6 rounded-xl shadow-md">
          <SectionTitle title="Tech Stack" />
          <SkillCategory title="Frontend" skills={['React', 'Next.js', 'Tailwind', 'TypeScript']} />
          <SkillCategory title="Backend" skills={['Node.js', 'Express', 'NestJS', 'Python']} />
          <SkillCategory title="Database" skills={['MongoDB', 'PostgreSQL', 'Firebase', 'Redis']} />
          <SkillCategory title="DevOps" skills={['Docker', 'AWS', 'CI/CD', 'Kubernetes']} />
        </div>

        {/* Featured Project */}
        <div className="col-span-1 md:row-span-2 md:col-start-4 bg-white p-6 rounded-xl shadow-md">
          <SectionTitle title="Featured Project" />
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 h-40 mb-4 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Project Preview</span>
          </div>
          <h3 className="font-bold text-lg text-gray-800">E-commerce Platform</h3>
          <p className="text-gray-600 text-sm mt-1">Full-featured online store with payment integration</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <TechBadge text="React" />
            <TechBadge text="Node.js" />
            <TechBadge text="Stripe API" />
          </div>
        </div>

        {/* Open Source */}
        <div className="col-span-1 md:row-span-2 md:col-start-5 bg-white p-6 rounded-xl shadow-md">
          <SectionTitle title="Open Source" />
          <RepoItem 
            name="react-ui-kit" 
            description="Collection of reusable components"
            stars="245" 
          />
          <RepoItem 
            name="express-boilerplate" 
            description="Production-ready backend starter"
            stars="189" 
          />
          <button className="mt-4 text-sm text-blue-600 hover:underline flex items-center">
            View all projects →
          </button>
        </div>

        {/* Experience */}
        <div className="col-span-1 sm:col-span-2 md:row-span-3 md:col-start-4 md:row-start-3 bg-white p-6 rounded-xl shadow-md">
          <SectionTitle title="Experience" />
          <TimelineItem 
            role="Senior Full Stack Developer"
            company="TechCorp"
            period="2021 - Present"
            highlights={['Led team of 5 developers', 'Improved performance by 40%']}
          />
          <TimelineItem 
            role="Web Developer"
            company="Digital Agency"
            period="2018 - 2021"
            highlights={['Built 20+ client websites', 'Implemented CI/CD pipelines']}
          />
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const SectionTitle = ({ title }) => (
  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h3>
);

const TechPill = ({ icon, text }) => (
  <span className="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
    {icon} <span className="ml-1">{text}</span>
  </span>
);

const SocialLink = ({ icon, href }) => (
  <a href={href} className="text-gray-500 hover:text-blue-600 text-xl transition-colors">
    {icon}
  </a>
);

const SkillCategory = ({ title, skills }) => (
  <div className="mb-4">
    <h4 className="font-medium text-gray-700 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <TechBadge key={index} text={skill} />
      ))}
    </div>
  </div>
);

const TechBadge = ({ text }) => (
  <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-xs font-medium">
    {text}
  </span>
);

const RepoItem = ({ name, description, stars }) => (
  <div className="mb-3 pb-3 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
    <h4 className="font-medium text-blue-600">{name}</h4>
    <p className="text-sm text-gray-600">{description}</p>
    <div className="flex items-center mt-1 text-xs text-gray-500">
      <span className="flex items-center">
        ★ {stars}
      </span>
    </div>
  </div>
);

const TimelineItem = ({ role, company, period, highlights }) => (
  <div className="mb-4 pl-4 border-l-2 border-blue-200 last:mb-0">
    <h4 className="font-bold text-gray-800">{role}</h4>
    <div className="flex justify-between text-sm text-gray-600">
      <span>{company}</span>
      <span>{period}</span>
    </div>
    <ul className="mt-2 space-y-1">
      {highlights.map((item, index) => (
        <li key={index} className="flex items-start text-sm text-gray-700">
          <span className="text-blue-500 mr-2">•</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

