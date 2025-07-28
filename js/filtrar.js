// filtrar.js

document.addEventListener("DOMContentLoaded", () => {
  const filtroOperacion = document.getElementById("filtro-operacion");
  const filtroTipo = document.getElementById("filtro-tipo");
  const filtroDepartamento = document.getElementById("filtro-departamento");
  const filtroPrecio = document.getElementById("filtro-precio");
  const propiedades = document.querySelectorAll(".propiedad");

  function filtrarPropiedades() {
    const operacion = filtroOperacion.value;
    const tipo = filtroTipo.value;
    const departamento = filtroDepartamento.value;
    const precioMax = parseInt(filtroPrecio.value, 10);

    propiedades.forEach((prop) => {
      const op = prop.dataset.operacion;
      const tp = prop.dataset.tipo;
      const dep = prop.dataset.departamento;
      const prc = parseInt(prop.dataset.precio, 10);

      const coincideOperacion = operacion === "" || operacion === op;
      const coincideTipo = tipo === "" || tipo === tp;
      const coincideDepartamento = departamento === "" || departamento === dep;
      const coincidePrecio = isNaN(precioMax) || prc <= precioMax;

      if (coincideOperacion && coincideTipo && coincideDepartamento && coincidePrecio) {
        prop.style.display = "block";
      } else {
        prop.style.display = "none";
      }
    });
  }

  filtroOperacion.addEventListener("change", filtrarPropiedades);
  filtroTipo.addEventListener("change", filtrarPropiedades);
  filtroDepartamento.addEventListener("change", filtrarPropiedades);
  filtroPrecio.addEventListener("input", filtrarPropiedades);
});
