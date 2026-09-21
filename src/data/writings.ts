export type Stanza = {
  lines: string[];
};

export type Movement = {
  stanzas: Stanza[];
};

export type LineEmphasis = {
  movementIndex: number;
  stanzaIndex: number;
  lineIndex: number;
  kind: "display-interrupt";
};

export type Writing = {
  id: string;
  label: string;
  title?: string;
  order: number;
  published: boolean;
  movements: Movement[];
  emphasis?: LineEmphasis[];
};

export const writings: Writing[] = [
  {
    id: "escrito-001",
    label: "Escrito 001",
    order: 1,
    published: true,
    movements: [
      {
        stanzas: [
          {
            lines: [
              "No quiero salvarte,",
              "ni sanarte.",
              "Me gustas así, con tus",
              "heridas ya lamidas,",
              "algunas ardiendo,",
              "otras cerradas,",
            ],
          },
          {
            lines: [
              "y me arriesgo a decir,",
              "que también con las",
              "que llegarán en",
              "invierno.",
            ],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: [
              "No quiero aliviarte,",
              "ni edulcorar tu",
              "tristeza,",
            ],
          },
          {
            lines: [
              "me gustas así, con la",
              "sal gruesa dispersa",
              "por todo tu cuerpo.",
            ],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: [
              "Ni siquiera pienso en",
              "canciones,",
              "fechas, rituales, o en",
              "cualquier otra cosa",
              "que haga de esto un",
              "convento.",
              "Porque antes de eso,",
              "prefiero un incendio.",
            ],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: ["Yo solo quiero mirarte", "de frente,"],
          },
          {
            lines: ["darte un beso en el", "costado,", "acariciar tu mano", "suavemente,"],
          },
          {
            lines: ["y preguntarte si ha", "valido la pena,"],
          },
          {
            lines: ["el latido apresurado."],
          },
        ],
      },
    ],
    emphasis: [
      {
        movementIndex: 2,
        stanzaIndex: 0,
        lineIndex: 7,
        kind: "display-interrupt",
      },
    ],
  },
  {
    id: "escrito-002",
    label: "Escrito 002",
    order: 2,
    published: true,
    movements: [
      {
        stanzas: [
          {
            lines: [
              "Qué canción",
              "nos va a",
              "acompañar,",
              "cuando el",
              "río deje de",
              "cantar, y",
              "nos",
              "comience a",
              "devorar?",
            ],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: [
              "Tu lengua se",
              "atragantará",
              "en la mía,",
              "cuando el",
              "pez nos",
              "confiese que",
              "la orilla no",
              "existe?",
            ],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: ["Little", "princess..."],
          },
        ],
      },
      {
        stanzas: [
          {
            lines: ["El oxígeno", "se nos", "acaba."],
          },
        ],
      },
    ],
    emphasis: [
      {
        movementIndex: 2,
        stanzaIndex: 0,
        lineIndex: 0,
        kind: "display-interrupt",
      },
      {
        movementIndex: 2,
        stanzaIndex: 0,
        lineIndex: 1,
        kind: "display-interrupt",
      },
    ],
  },
];

export const publishedWritings: Writing[] = writings
  .filter((writing) => writing.published)
  .sort((a, b) => a.order - b.order);

export function lineClassName(
  writing: Writing,
  movementIndex: number,
  stanzaIndex: number,
  lineIndex: number,
): string | undefined {
  const match = writing.emphasis?.find(
    (item) =>
      item.movementIndex === movementIndex &&
      item.stanzaIndex === stanzaIndex &&
      item.lineIndex === lineIndex,
  );

  if (match?.kind === "display-interrupt") {
    return "line-interrupt";
  }

  return undefined;
}
