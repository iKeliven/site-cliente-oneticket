import { Text } from './Text';
import { Heading } from './Heading';

export default function DashData({ icone, titulo, dado, imagem }) {
  return (
    <div className="flex bg-white shadow-md rounded-xl p-5  w-[28vw] justify-between">
      <section className="flex flex-col">
        <div style={{ color: '#FF9800' }}>{icone}</div>
        <Text size="medium">{titulo}</Text>
        <Heading size="large">{dado}</Heading>
      </section>
      <img src={imagem} alt="Imagem representativa" className="w-[8vw]" />
    </div>
  );
}
