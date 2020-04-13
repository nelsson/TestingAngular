import { usuarioIngresado } from './booleanos';

describe('Pruebas de ingreso', () => {
  it('Debe devolver true', () => {
    const res = usuarioIngresado();

    expect(res).toBeTruthy();
  });
});
