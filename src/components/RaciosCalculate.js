import React from 'react'
import RaciosCalculateComponent from '../common/RaciosCalculateComponent'

const RaciosCalculate = ({ data, setData }) => {

  return (
    <>
      <RaciosCalculateComponent
        label="Vendas 71"
        value={data.sales}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, sales: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Prestação de Serviços 72"
        value={data.services}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, services: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Subsidios Exploração 75"
        value={data.subsidies}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, subsidies: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="CMVMC 61 ou Compras 31"
        value={data.cogs}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, cogs: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Fornecimento Serviços Externos 62"
        value={data.externalServices}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, externalServices: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Gastos Pessoal 63"
        value={data.staff}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, staff: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Imparidade Inventário (Perdas/Reversões) 652/7622"
        value={data.inventoryLoss}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, inventoryLoss: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Imparidade Dividas a Receber 651 / 7621"
        value={data.receivablesLoss}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, receivablesLoss: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Outros Rendimentos 78 salvo 785"
        value={data.otherIncome}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, otherIncome: formattedValue }));
        }}
      />
      <RaciosCalculateComponent
        label="Outros Gastos e Perdas 68 salvo 685"
        value={data.otherExpenses}
        onChange={(formattedValue) => {
          setData(prev => ({ ...prev, otherExpenses: formattedValue }));
        }}
      />
    </>
  )
}

export default RaciosCalculate