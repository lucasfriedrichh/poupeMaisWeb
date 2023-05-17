import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css"

function InvestmentPage() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create or update the chart
    const ctx = document.getElementById("myChart").getContext("2d");

    if (chartRef.current) {
      // Destroy existing chart
      chartRef.current.destroy();
    }

    const labels = ["January", "February", "March", "April", "May"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Sales",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: [65, 59, 80, 81, 56],
          fill: false,
        },
      ],
    };

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <header className="mb-3">
        <Header />
      </header>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 " >
            <div className="card shadow mb-4 ">
              <div className="card-body" style={{ backgroundColor: "var(--background-primary)"}}>
                <canvas id="myChart" style={{ height: "200px" }}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default InvestmentPage;
