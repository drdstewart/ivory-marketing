import { useState } from "react";
import classes from "./styles.module.css";
import {
  IoConstructOutline,
  IoCloudOutline,
  IoCodeOutline,
} from "react-icons/io5";
import ServiceContainer from "./service-container";
import ServiceModal from "./service-modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: <IoCodeOutline className={classes.icon} />,
      title: "Development",
      description: "Custom software solutions tailored to your business needs. We build scalable, maintainable applications using modern technologies and best practices.",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Optimization",
        "Custom Software Solutions"
      ]
    },
    {
      icon: <IoCloudOutline className={classes.icon} />,
      title: "Cloud Experts",
      description: "Comprehensive cloud services to help you leverage the power of modern cloud infrastructure for scalability, reliability, and cost-effectiveness.",
      features: [
        "Cloud Migration & Strategy",
        "AWS/Azure Infrastructure Setup",
        "DevOps & CI/CD Pipelines",
        "Cloud Security & Compliance",
        "Performance Monitoring & Optimization"
      ]
    },
    {
      icon: <IoConstructOutline className={classes.icon} />,
      title: "Maintenance",
      description: "Ongoing support and maintenance services to keep your applications running smoothly, secure, and up-to-date with the latest technologies.",
      features: [
        "24/7 System Monitoring",
        "Regular Security Updates",
        "Performance Optimization",
        "Bug Fixes & Troubleshooting",
        "Feature Enhancements"
      ]
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contactSection")!;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.services}>
      <div className={classes.innerServices}>
        <div className={classes.serviceContainers}>
          {services.map((service, index) => (
            <ServiceContainer
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        <div className={classes.wideServicesText}>
          Wide range of services available
        </div>

        <div className={classes.transformingText}>
          Transforming ideas into digital solutions
        </div>

        <div className={classes.bodyText}>
          We specialise in delivering customised software solutions across
          various industries. With extensive experience in legal, medical, and
          most recently the energy sector, we ensure high-quality tailored
          services to meet your unique needs. Whether you require web
          development, mobile app creation, or complex system integrations, our
          expert team is equipped to bring your vision to life.
        </div>

        <button className={classes.button} onClick={scrollToContact}>
          Get In Contact
        </button>
      </div>
      
      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        icon={selectedService?.icon}
        title={selectedService?.title || ""}
        description={selectedService?.description || ""}
        features={selectedService?.features || []}
      />
    </div>
  );
};

export default Services;
