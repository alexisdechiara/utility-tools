export class ManagerService{
  tools = [
    {
      id : 'text-converter',
      name : 'Convertisseur de texte',
      status : false,
      types : [
        {
          id: 'lowercase',
          name: 'minuscule',
          status: false,
        },
        {
          id: 'uppercase',
          name: 'Majuscule',
          status: false,
        },
        {
          id: 'titlecase',
          name: 'Titre',
          status: false,
        },
        {
          id: 'invert',
          name: 'Inversé',
          status: false,
        },
        {
          id: 'return',
          name: 'Retourné',
          status: false,
        }
      ]
    },
    {
      id : 'value-converter',
      name : 'Convertisseur de valeur',
      status : false,
      types : [
        {
          id: 'volume',
          name: 'Volume',
          status: false,
        },
        {
          id: 'distance',
          name: 'Distance',
          status: false,
        },
        {
          id: 'weight',
          name: 'Poids',
          status: false,
        },
        {
          id: 'speed',
          name: 'Vitesse',
          status: false,
        },
        {
          id: 'angle',
          name: 'Angle',
          status: false,
        },
        {
          id: 'intensity',
          name: 'Intensité électrique',
          status: false,
        },
        {
          id: 'quantity',
          name: 'Quantité de matière',
          status: false,
        },
      ]
    },
    {
      id : 'generator',
      name : 'Générateur',
      status : false
    },
    {
      id : 'calculator',
      name : 'Calcul',
      status : false
    }
  ];
}
