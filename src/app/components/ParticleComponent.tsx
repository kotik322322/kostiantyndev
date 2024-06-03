import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

interface ParticlesComponentProps {
  config: any
}

const ParticlesComponent = ({ config }: ParticlesComponentProps) => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 -z-50 ">
      <Particles id="tsparticles" params={config} init={particlesInit} />
    </div>
  );
};

export default ParticlesComponent;
