import "./Descripcion.scss";

export const Descripcion = () => {
  return (
    <>
      <div className="descripcion">
        <h1>RISO</h1>
        <p>
          Proyecto pensado por la falta de ideas existentes durante una semana
          cualquiera del año 2020, por azares del destino se encontró la
          librería p5.Riso.js, esto me ayudó a desahogar un poco algunas cosas
          que tenía pendientes en mi mente, al parecer estás ideas llegaron a
          buen puerto y lo demuestran esta serie de animaciones.
        </p>
        <p>
          Idea Original:{" "}
          <a href="antoniosalinas.com" target="_blank">
            Antonio Salinas
          </a>
        </p>
        <p><a href="https://www.youtube.com/watch?v=8lSNZuFhYOI" target="_blank">Video de YouTube</a></p>
        <p>Año: 2020</p>
      </div>
    </>
  );
};
