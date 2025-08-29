import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import classes from "./styles.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceModal = ({ isOpen, onClose, icon, title, description, features }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={classes.overlay} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <button className={classes.closeButton} onClick={onClose}>
          <IoClose />
        </button>
        
        <div className={classes.header}>
          <div className={classes.iconContainer}>{icon}</div>
          <h2 className={classes.title}>{title}</h2>
        </div>
        
        <p className={classes.description}>{description}</p>
        
        <div className={classes.features}>
          <h3 className={classes.featuresTitle}>What we offer:</h3>
          <ul className={classes.featuresList}>
            {features.map((feature, index) => (
              <li key={index} className={classes.feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;