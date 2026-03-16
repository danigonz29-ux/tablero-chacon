import type { DashboardData } from "./types";

export const DEMO_DATA: DashboardData = {
  kpis: {
    contenidosApoyados: 68,
    gusInteraccionesObtenidas: 50277,
    compartidosEnMedios: 33277,
    comentariosGenerados: 2643,
    seguidoresCaptados: 1546,
    ondaExpansiva: 0,
    ondaFactor: 500,
    ondaAuto: true,
    totalInvertido: 0,
  },

  principalesLinksApoyados: [
    {
      medio: "Facebook",
      links: [
        {
          id: "l1",
          publicacion: "Ser pilo paga",
          url: "https://www.facebook.com/reel/738035089100324",
          cantidad: 134646,
          engagementRate: 13,
        },
        {
          id: "l2",
          publicacion: "Taxis Impagables",
          url: "https://www.facebook.com/reel/927184122988620/",
          cantidad: 105468,
          engagementRate: 11,
        },
        {
          id: "l3",
          publicacion: "Renta Vida",
          url: "https://www.facebook.com/reel/1574730477106284",
          cantidad: 84968,
          engagementRate: 9,
        },
        {
          id: "l4",
          publicacion: "Economía colaborativa",
          url: "https://www.facebook.com/reel/1616183669384053",
          cantidad: 73896,
          engagementRate: 8,
        },
        {
          id: "l5",
          publicacion: "Sustituir el IVA",
          url: "https://www.facebook.com/reel/1593871485254454",
          cantidad: 63748,
          engagementRate: 7,
        },
        {
          id: "l6",
          publicacion: "Sin cédula no hay voto y sin voto no hay cambio",
          url: "https://www.facebook.com/ChaconDialoga/posts/pfbid08aYBSY5LRd6qADEFVq1Jstm97yXdUPwy29UvEr8eASz6gjD1UNwbBdEVCuf3ERQDl?rdid=n4fUYUBmmp8VxKpM#",
          cantidad: 47362,
          engagementRate: 5,
        },
      ],
    },
  ],

  temas: [
    { id: "t1", tema: "Territorio y comunidad", cantidad: 5510 },
    { id: "t2", tema: "Democracia", cantidad: 6450 },
    { id: "t3", tema: "Empleo Joven", cantidad: 5704 },
    { id: "t4", tema: "Salud Pública", cantidad: 2768 },
    { id: "t5", tema: "Medio Ambiente", cantidad: 1766 },
    { id: "t6", tema: "Defensa de conversación", cantidad: 2203 },
  ],

  medios: [],

  contactoDirecto: {
    diasCampana: 10,
    sms: {
      enviosDiarios: 385735,
      frecuencia: "Interdiario",
      costoUnitario: 0,
    },
    llamadas: {
      llamadasDiarias: 153789,
      frecuencia: "Interdiario",
      costoUnitario: 0,
    },
  },

  pautaMeta: [],

  conclusiones: [
    {
      id: "c1",
      texto:
        "El alcance orgánico impulsado por la tropa fue altamente efectivo alcanzando 931.367 personas.",
    },
    {
      id: "c2",
      texto:
        "La campaña de contención de ataques disminuyó los ataques de bodegas en un 90%.",
    },
    {
      id: "c3",
      texto:
        "La campaña de distribución de contenido alterno posicionó la imagen del Senador en sectores apolíticos.",
    },
    {
      id: "c4",
      texto:
        "Los temas relacionados con territorio, comunidad y democracia muestran mayor capacidad de resonancia, lo que sugiere que estas narrativas generan mayor conexión con las audiencias.",
    },
  ],
};