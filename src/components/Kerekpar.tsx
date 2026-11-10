import type { KerekparInterface } from "../types/KerekparInterface";
import { useState } from "react";

interface Props {
  id: number;
  kerekpar: KerekparInterface;
}

export function Kerekpar({ id, kerekpar }: Props) {
  const [megjelen, setMegjelen] = useState(false);

  return (
    <>
      <div className="card col-md-4 p-3" key={id}>
        <h3 className="" style={{ color: kerekpar.szin }}> {kerekpar.nev}</h3>
        <button className="btn btn-primary " onClick={() => setMegjelen(!megjelen)}>
          {megjelen ? "Részletek elrejtése" : "Részletek megjelenítése"}
        </button>
        {megjelen && (
          <div className="">
            <p><em>Tipus: {kerekpar.tipus}</em></p>
            <p><u>Napi díj: {kerekpar.napiDij}</u></p>
          </div>
        )}
      </div>
    </>
  );
}
