import { CardDemo } from "@/components/Card";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4">
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </div>
    </Container>
  );
}
