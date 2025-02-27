import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2'; // Importar o gráfico de barras
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar os módulos necessários para o gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Função para calcular o Resultado Operacional (EBIT)
const calculateOperatingResult = (data) => {
  const revenue = data.sales + data.services + data.subsidies + data.otherIncome;
  const costs = data.cogs + data.externalServices + data.staff + data.inventoryLoss + data.receivablesLoss + data.otherExpenses;
  return revenue - costs;
};

const Result = ({ data }) => {
  // Calcular o resultado operacional (EBIT)
  const result = calculateOperatingResult(data);
  
  // Evita divisão por zero e calcula projeção anual
  const months = data.month || 1; // Garante que pelo menos seja 1
  const resultAnnual = result * (12 / months);

  // Configuração do gráfico
  const labels = ['EBIT Provisional', 'EBIT Anual'];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Ano Atual',
        data: [result, resultAnnual], // Valores dinâmicos
        backgroundColor: [ 
          result >= 0 ? 'rgba(135, 235, 130, 0.5)' : 'rgba(235, 90, 90, 0.5)',  // Verde se positivo, vermelho se negativo
          resultAnnual >= 0 ? 'rgba(135, 235, 130, 0.5)' : 'rgba(235, 90, 90, 0.5)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'EBIT Provisional vs Anual',
      },
    },
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Resultado Operacional (EBIT): {result.toFixed(2)}</Typography>
      <Typography variant="h6">Projeção Anual (EBIT): {resultAnnual.toFixed(2)}</Typography>
      {/* Exibir o gráfico */}
      <Bar data={chartData} options={options} />
    </Stack>
  );
};

export default Result;
