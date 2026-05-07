
import {
  Package,
  Bell,
  Monitor,
  Smartphone,
} from 'lucide-react';

import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

import chamados from '../../assets/project_icons/chamados.png';

const Chamados = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={chamados}
        title="Service Request and Inventory Management System"
        subtitle="Developed at INOVAÍ for the Municipal Secretariat of Technology of Piraí, Rio de Janeiro"
        githubUrl="https://github.com/Kaiqapenas/chamados_smcti_pirai"
        features={[
          {
            icon: Package,
            title: 'Inventory Management',
            description: 'Item registration, tracking, and stock control.',
          },
          {
            icon: Bell,
            title: 'Operational Workflow',
            description: 'Support for service requests and internal operational processes.',
          },
          {
            icon: Monitor,
            title: 'Desktop Platform',
            description: 'Administrative workflows and daily management tasks.',
          },
          {
            icon: Smartphone,
            title: 'Mobile Platform',
            description: 'Mobile-friendly access for operational use.',
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            'Developed a service request and inventory management system at INOVAÍ, a state technology laboratory, for the Municipal Secretariat of Technology of Piraí, Rio de Janeiro.',
            'The project included both desktop and mobile platforms, supporting operational workflows, service ticket management, item tracking, and inventory control.',
            'I contributed to both product design and software development, participating in prototype creation, interface design, and production-ready implementation.',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack
          technologies={[
            'Python',
            'Django',
            'HTML',
            'CSS',
            'JavaScript',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Designed user flows and interactive prototypes before implementation.',
            'Developed backend business logic, data modeling, and workflow support.',
            'Implemented service request and inventory control features.',
            'Built responsive interfaces for both desktop and mobile environments.',
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Chamados;