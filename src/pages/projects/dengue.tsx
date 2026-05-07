
import {
  Satellite,
  ScanSearch,
  Database,
  Brain,
} from 'lucide-react';

import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

import dengue from '../../assets/project_icons/dengue.png';

const DengueCNN = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={dengue}
        title="Satellite-Based Swimming Pool Detection for Dengue Prevention"
        subtitle="Convolutional neural network developed as the final project of my PIVIC research"
        githubUrl="https://github.com/lillyamdl/Aprendizado-de-maquina-para-reconhecer-objetos"
        features={[
          {
            icon: Satellite,
            title: 'Satellite Imagery',
            description: 'Detection of swimming pools using remote sensing data.',
          },
          {
            icon: ScanSearch,
            title: 'Computer Vision',
            description: 'Automated identification of potential mosquito breeding hotspots.',
          },
          {
            icon: Database,
            title: 'Custom Dataset',
            description: 'Dataset creation, annotation, preprocessing, and validation.',
          },
          {
            icon: Brain,
            title: 'Neural Network',
            description: 'CNN-based model for object detection and classification.',
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            'Developed a convolutional neural network as the final project of my PIVIC research, focused on identifying swimming pools from satellite imagery to support dengue prevention efforts.',
            'The project involved dataset creation, image annotation, preprocessing, data augmentation, model training, and validation.',
            'The resulting study was published as a research article, demonstrating the potential of computer vision techniques to assist public health monitoring and the identification of potential mosquito breeding hotspots.',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack
          technologies={[
            'Python',
            'PyTorch',
            'YOLOv8',
            'OpenCV',
            'LabelImg',
            'NumPy',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Built and annotated a custom dataset from satellite imagery.',
            'Performed preprocessing, augmentation, and dataset splitting.',
            'Trained and validated a convolutional neural network for detection tasks.',
            'Published the resulting work as a scientific research article.',
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default DengueCNN;