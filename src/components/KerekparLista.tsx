import type { KerekparInterface } from "../types/KerekparInterface";
import data from "../data/kerekparok.json";
import { Kerekpar } from "./Kerekpar";

export function KerekparLista() {
  const kerekparok: KerekparInterface[] = data;

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <h2 className="text-center">Kerekpárok száma:</h2>
          <p className="text-center">
            <b>{kerekparok.length}</b>
          </p>
        </div>

        <div className="col-md-4">
          <h2 className="text-center">Legolcsóbb kerékpár bérleti díja:</h2>
          <p className="text-center">
            <b>{Math.min(...kerekparok.map((kerekpar) => kerekpar.napiDij))}</b>
          </p>
        </div>

        <div className="col-md-4">
          <h2 className="text-center">Legdrágább kerékpár bérleti díja:</h2>
          <p className="text-center">
            <b>{Math.max(...kerekparok.map((kerekpar) => kerekpar.napiDij))}</b>
          </p>
        </div>
      </div>

      <div className="row g-3">
        {kerekparok.map((kerekpar: KerekparInterface, index: number) => (
          <Kerekpar key={index} id={index} kerekpar={kerekpar} />
        ))}
      </div>
    </>
  );
}
