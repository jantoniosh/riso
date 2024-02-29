import { useState } from "react";
import "./RisoIlustracion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronUp,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { datos } from "../../variables";

export const RisoIlustracion = () => {
  const data = datos;

  const [num, setNum] = useState(0);

  const menosNum = () => {
    const n = num - 1;
    n < 0 ? setNum(data.length - 1) : setNum(n);
    console.log(num);
  };

  const masNum = () => {
    const n = num + 1;
    n == data.length ? setNum(0) : setNum(n);
    console.log(num);
  };

  return (
    <>
      <div className="risoIlustracion">
        <h2 className="flechas" onClick={menosNum}>
          <FontAwesomeIcon icon={faChevronUp} />
        </h2>
        <h2 className="titulo">{`0${num + 1}. ${data[num].nombre}`}</h2>
        <img className="gif" src={data[num].gif} alt={data[0].nombre} />
        <h3>
          <span>
            <a href={data[num].github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <a
              href={data[num].folder}
              download={datos[num].nombre}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFolder} />
            </a>
          </span>
        </h3>
        <h2 className="flechas" onClick={masNum}>
          <FontAwesomeIcon icon={faChevronDown} />
        </h2>
      </div>
    </>
  );
};
