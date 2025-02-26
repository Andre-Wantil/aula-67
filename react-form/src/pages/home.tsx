import ClassCard from "../components/classCard";
import turmas from "../mocks/turmas.json";
import IClass from "../interfaces/IClass";

export default function Home() {
    return (
        <section>
        {turmas.map((turma: IClass) => (
          <ClassCard key={turma.id} turma={turma} />
        ))}
      </section>
    )
}