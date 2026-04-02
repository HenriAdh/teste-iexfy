const vendas = [
  { vendedor: "Ana", valor: 1200, status: "aprovado" },
  { vendedor: "Bruno", valor: 850, status: "cancelado" },
  { vendedor: "Ana", valor: 3400, status: "aprovado" },
  { vendedor: "Carlos", valor: 2100, status: "aprovado" },
  { vendedor: "Bruno", valor: 1700, status: "aprovado" },
  { vendedor: "Ana", valor: 600, status: "cancelado" },
];

function getData() {
  const vendasAprovadas = vendas.filter((venda) => venda.status === "aprovado");

  const result = {
    totalGeral: 0,
    ticketMedio: 0,
    topVendedor: "",
    ranking: [],
  };

  const totalPorVendedor = {};

  for (const venda of vendasAprovadas) {
    result.totalGeral += venda.valor;

    if (!totalPorVendedor[venda.vendedor]) {
      totalPorVendedor[venda.vendedor] = venda.valor;
    } else {
      totalPorVendedor[venda.vendedor] += venda.valor;
    }
  }

  result.ticketMedio = result.totalGeral / vendasAprovadas.length;

  for (const key in totalPorVendedor) {
    result.ranking.push({ vendedor: key, total: totalPorVendedor[key] });
  }

  result.ranking = result.ranking.sort((a, b) => b.total - a.total);

  result.topVendedor = result.ranking[0].vendedor;

  return result;
}

console.log(getData());
