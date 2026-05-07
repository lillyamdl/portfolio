
import {
  Package,
  Bell,
  ShoppingBag,
  Workflow,
} from 'lucide-react';

import ProjectLayout from '../../components/project/ProjectLayout';
import ProjectHeader from '../../components/project/ProjectHeader';
import ProjectSection from '../../components/project/ProjectSection';
import ProjectOverview from '../../components/project/ProjectOverview';
import TechStack from '../../components/project/TechStack';
import TechnicalHighlights from '../../components/project/TechnicalHighlights';

import bakery from '../../assets/project_icons/bakery.png';

const Bakery = () => {
  return (
    <ProjectLayout>
      <ProjectHeader
        icon={bakery}
        title="Bakery Management and Inventory API"
        subtitle="Operational workflow, stock control, and direct manager notifications"
        githubUrl="https://github.com/Jose-George/api-padaria"
        features={[
          {
            icon: Package,
            title: 'Inventory Control',
            description: 'Real-time stock monitoring and product availability tracking.',
          },
          {
            icon: Bell,
            title: 'Manager Notifications',
            description: 'Direct alerts for low-stock items and operational updates.',
          },
          {
            icon: ShoppingBag,
            title: 'Product Management',
            description: 'Structured product registration and stock movement tracking.',
          },
          {
            icon: Workflow,
            title: 'Operational Workflow',
            description: 'Support for daily bakery operations and decision-making.',
          },
        ]}
      />

      <ProjectSection title="Overview">
        <ProjectOverview
          paragraphs={[
            'Developed a management and inventory API for a bakery to support daily operations, stock control, and workflow organization.',
            'The system tracks inventory levels in real time, manages product availability, and provides direct notifications to the manager regarding low-stock items and operational updates.',
            'The solution was designed to improve internal organization, support faster decision-making, and increase operational efficiency.',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Tech Stack">
        <TechStack
          technologies={[
            'Python',
            'Django',
            'REST API',
            'PostgreSQL',
          ]}
        />
      </ProjectSection>

      <ProjectSection title="Technical Highlights">
        <TechnicalHighlights
          highlights={[
            'Implemented inventory tracking and stock movement control.',
            'Designed API endpoints for product registration and management.',
            'Built notification flows for low-stock alerts and operational monitoring.',
            'Structured backend logic to support daily workflow automation.',
          ]}
        />
      </ProjectSection>
    </ProjectLayout>
  );
};

export default Bakery;