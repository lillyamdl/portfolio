import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import courseLogo from '../../assets/badges/bfd.png';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const credentials = [
    {
      id: 'backend-python-django',
      image: courseLogo,
      alt: 'Back-End Python Django Certificate',
      title: 'Back-End Python - Django',
      subtitle: 'Professional Training Course',
      issuer: 'Bolsa Futuro Digital',
      issued: '2025',
      credentialId: '',
      credentialUrl: '',
      status: 'completed'
    }
  ];

  return (
    <section
      id="certifications"
      className="py-8 relative"
      style={{
        background:
          themeColors.background.sections?.certifications ||
          themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-6"
          style={{
            color: isDarkMode
              ? themeColors.colors.white
              : themeColors.colors.pink[500],
          }}
        >
          Certifications
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {credentials.map((credential) => (
              <div key={credential.id} className="flex flex-col items-center">
                <div className="mb-4">
                  <img
                    src={credential.image}
                    alt={credential.alt}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain"
                  />
                </div>

                <h3
                  className="text-center text-sm font-medium mb-2"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.pink[300]
                      : themeColors.colors.pink[500],
                  }}
                >
                  {credential.title}
                </h3>

                <p
                  className="text-center text-sm"
                  style={{
                    color: isDarkMode
                      ? themeColors.colors.dark[300]
                      : themeColors.colors.dark[600],
                  }}
                >
                  {credential.issuer} • {credential.issued}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;