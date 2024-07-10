import { Title, Subtitle, Div, Icon } from "../components";

export default function DivTest() {
  return (
    <section className="mt-4">
      <Title>DivTest</Title>
      <Div
        className="text-center text-blue-100 bg-blue-600 rounded-2xl"
        height="6rem"
      >
        <Icon name="home" className="text-3xl"></Icon>
        <Subtitle>Home</Subtitle>
      </Div>
    </section>
  );
}
