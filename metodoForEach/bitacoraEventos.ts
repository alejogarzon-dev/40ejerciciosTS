/*
Tienes un array de objetos evento con descripcion y prioridad (alta, media, baja). 
Usa forEach para imprimir cada evento con un emoji diferente según la prioridad 
(🔴 alta, 🟡 media, 🟢 baja) y la descripción
*/

type Evento = [string, "alta" | "media" | "baja"];

let eventos: Evento[] = [ 
  ["Reunión con el equipo", "alta"],
  ["Presentación del informe", "media"],
  ["Actualización del sistema", "baja"]
];

eventos.forEach(([descripcion, prioridad]) => {
  let emoji = "";
  switch (prioridad) {
    case "alta":
      emoji = "🔴";
      break;
    case "media":
      emoji = "🟡";
      break;
    case "baja":
      emoji = "🟢";
      break;
  }
  console.log(`${emoji} ${descripcion}`);
});

