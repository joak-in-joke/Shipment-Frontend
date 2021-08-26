function createData(id, clients, reference, description, dateStart, dateEnd) {
  return {
    id,
    clients,
    reference,
    description,
    dateStart,
    dateEnd,
    data: [
      {
        id: 1,
        provider: "CRAFT",
        concept: "FLETE INTERNACIONAL",
        facture: 141078,
        tipe: "EX",
        amount: 13900,
        state: "PAGADO",
        date: "02-07-2021",
      },
      {
        id: 2,
        provider: "CRAFT",
        concept: "GASTO LOCAL",
        facture: 170114,
        tipe: "AF",
        amount: 41650,
        state: "PAGADO",
        date: "02-07-2021",
      },
      {
        id: 3,
        provider: "BROKER",
        concept: "SEGURO INTERNACIONAL",
        facture: 255,
        tipe: "EX",
        amount: 372750,
        state: "PAGADO",
        date: "02-07-2021",
      },
      {
        id: 4,
        provider: "EMCHI",
        concept: "RECUPERO FLETE INTERNACIONAL",
        facture: 156,
        tipe: "AF",
        amount: 72347,
        state: "PAGADO",
        date: "02-07-2021",
      },
      {
        id: 5,
        provider: "CRAFT",
        concept: "FLETE INTERNACIONAL",
        facture: 141078,
        tipe: "EX",
        amount: 13900,
        state: "PAGADO",
        date: "02-07-2021",
      },
      //   { date: "2020-01-05", customerId: "11091700", amount: 3 },
      //   { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

export const rows = [
  createData(
    1,
    "Gotta Chile/Trendy",
    "EMB.2922020",
    "IMP_FCL_CN_CL",
    "01/21",
    "03/21"
  ),
  createData(
    1,
    "Gotta Chile/Trendy",
    "EMB.2922020",
    "IMP_FCL_CN_CL",
    "01/21",
    "03/21"
  ),
  createData(
    1,
    "Gotta Chile/Trendy",
    "EMB.2922020",
    "IMP_FCL_CN_CL",
    "01/21",
    "03/21"
  ),
  createData(
    1,
    "Gotta Chile/Trendy",
    "EMB.2922020",
    "IMP_FCL_CN_CL",
    "01/21",
    "03/21"
  ),
];
