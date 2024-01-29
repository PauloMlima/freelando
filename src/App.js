import { Card } from "./Componentes/Card/Card";
import { Estilos } from "./Componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./Componentes/ProvedorTema/ProvedorTema";



function App() {
  return (
    <ProvedorTema>
    <Estilos/>
    <Card>
      <h1>Freelando</h1>
    </Card>
    </ProvedorTema>
  );
}

export default App;
