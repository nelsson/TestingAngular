import { obtenerRobots } from './arreglos';

describe('Prueba de Arreglos', () => {
  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir MegaMan y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('Ultron');
    expect(res).toContain('MegaMan');
  });
});
