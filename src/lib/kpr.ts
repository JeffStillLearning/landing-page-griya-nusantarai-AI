interface KPRInput {
  hargaUnit: number;
  dpPersen: number;
  tenorTahun: number;
  bungaPerTahun: number;
}

interface KPRResult {
  dpNominal: number;
  pokokHutang: number;
  cicilanPerBulan: number;
  totalBayar: number;
  totalBunga: number;
}

export function hitungKPR(input: KPRInput): KPRResult {
  const { hargaUnit, dpPersen, tenorTahun, bungaPerTahun } = input;

  const dpNominal = Math.round(hargaUnit * (dpPersen / 100));
  const pokokHutang = hargaUnit - dpNominal;
  const bungaPerBulan = bungaPerTahun / 100 / 12;
  const tenorBulan = tenorTahun * 12;

  const cicilanPerBulan =
    bungaPerBulan === 0
      ? pokokHutang / tenorBulan
      : Math.round(
          (pokokHutang *
            bungaPerBulan *
            Math.pow(1 + bungaPerBulan, tenorBulan)) /
            (Math.pow(1 + bungaPerBulan, tenorBulan) - 1)
        );

  const totalBayar = cicilanPerBulan * tenorBulan;
  const totalBunga = totalBayar - pokokHutang;

  return { dpNominal, pokokHutang, cicilanPerBulan, totalBayar, totalBunga };
}
