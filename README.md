# 📊 K6 + Grafana Load Testing and Monitoring Pipeline

This project demonstrates how to perform **load testing** using [K6](https://k6.io/), send real-time metrics to [InfluxDB](https://www.influxdata.com/), and visualize the performance data in [Grafana](https://grafana.com/). It’s built entirely with Docker Compose for ease of setup and portability.

---

## 🚀 Features

- 📌 Load test any HTTP API using K6
- 📥 Stream K6 metrics directly to InfluxDB
- 📊 Visualize test results using Grafana dashboards
- 🐳 Fully containerized with Docker Compose
- 💡 Great for learning observability and performance testing in DevOps

---

## 🛠️ Tech Stack

| Tool      | Purpose                          |
|-----------|----------------------------------|
| K6        | Load testing tool (CLI-based)    |
| InfluxDB  | Time-series database for metrics |
| Grafana   | Metrics dashboard & visualization|
| Docker    | Containerized all services       |

---

## 📁 Folder Structure
k6-grafana-loadtest-monitor/
├── docker-compose.yml # Sets up InfluxDB & Grafana
├── test.js # K6 test script
├── README.md # This documentation
└── screenshots/ # (Optional) Dashboard images
