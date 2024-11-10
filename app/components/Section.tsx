
interface SectionProps {
  id: string;
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({ id, title, description }) => {
  return (
    <section id={id} >
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default Section;
