import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Chart from "react-google-charts";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Dashboard() {

  const TITULO = 'Quantidade de cadastros primeiro semestre';
  const ANIMACAO = { duration: 1000, easing: 'out', startup: true };

  const [dados, setDados] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Feveriro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]);


  useEffect(() => {
    function alterarDados() {
      const dadosGraficos = dados.map(linha => {
        if (Number.isInteger(linha[1])) {
          linha[1] = Math.floor(Math.random() * 101);
        }
        return linha;
      });
      setDados(dadosGraficos);
    }


    const intervalId = setInterval(() => alterarDados(), 5000);

    return () => {
      // Executa quando o componente for destruído
      clearInterval(intervalId);
    }

  }, [dados]);


  return (
    <Row>

      <Col md={12}><h1 className="text-center mt-5 mb-5">Dashboard</h1></Col>

      <Col md={6} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'PieChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
          }}
        />
      </Col>

      <Col md={6} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'PieChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
            is3D: true
          }}
        />
      </Col>

      <Col md={6} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'PieChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
            pieHole: 0.4
          }}
        />
      </Col>

      <Col md={6} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'BarChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
            chartArea: { width: '50%' },
            hAxis: { title: 'Quantidade' },
            vAxis: { title: 'Mês' },
            animation: ANIMACAO
          }}
        />
      </Col>

      <Col md={12} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'LineChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
            chartArea: { width: '70%' },
            hAxis: { title: 'Mês' },
            vAxis: { title: 'Quantidade' },
            animation: ANIMACAO
          }}
        />
      </Col>

      <Col md={12} className="mb-3">
        <Chart
          width={'100%'}
          height={'300px'}
          chartType={'AreaChart'}
          loader={<div>Carregando gráfico</div>}
          data={dados}
          options={{
            title: TITULO,
            chartArea: { width: '70%' },
            hAxis: { title: 'Mês' },
            vAxis: { title: 'Quantidade' },
            animation: ANIMACAO
          }}
        />
      </Col>

    </Row>
  );
}

export default Dashboard;
