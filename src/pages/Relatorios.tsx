import React, { useState, useEffect } from "react";
import "./Relatorios.css";
import Header from "../components/Header";

const empresasMock = [
  { 
    id: 1, 
    nome: "TecBrasil Inovação LTDA", 
    cnpj: "12.345.678/0001-90", 
    status: "Ativo", 
    setor: "Tecnologia", 
    cidade: "São Paulo", 
    uf: "SP", 
    dataCadastro: "15/03/2024" 
  },
  { 
    id: 2, 
    nome: "Comercial Silva & Cia", 
    cnpj: "98.765.432/0001-10", 
    status: "Inativo", 
    setor: "Comércio", 
    cidade: "Rio de Janeiro", 
    uf: "RJ", 
    dataCadastro: "22/02/2024" 
  },
  { 
    id: 3, 
    nome: "AgroForte Distribuição S/A", 
    cnpj: "55.666.777/0001-88", 
    status: "Ativo", 
    setor: "Agronegócio", 
    cidade: "Curitiba", 
    uf: "PR", 
    dataCadastro: "10/01/2024" 
  }
];

function StatusBadge({ status }) {
  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'ativo':
        return { backgroundColor: '#d4edda', color: '#155724' };
      case 'inativo':
        return { backgroundColor: '#f8d7da', color: '#721c24' };
      default:
        return { backgroundColor: '#fff3cd', color: '#856404' };
    }
  };

  return (
    <span className="status-badge" style={getStatusStyle(status)}>
      {status}
    </span>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="stat-card">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Relatorio() {
  const [empresas, setEmpresas] = useState(empresasMock);
  const [filtros, setFiltros] = useState({
    nome: '',
    status: '',
    setor: '',
    cidade: '',
    uf: ''
  });

  const handleFiltroChange = (campo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const aplicarFiltros = () => {
    let empresasFiltradas = empresasMock;

    if (filtros.nome) {
      empresasFiltradas = empresasFiltradas.filter(emp => 
        emp.nome.toLowerCase().includes(filtros.nome.toLowerCase())
      );
    }

    if (filtros.status) {
      empresasFiltradas = empresasFiltradas.filter(emp => 
        emp.status.toLowerCase() === filtros.status.toLowerCase()
      );
    }

    if (filtros.setor) {
      empresasFiltradas = empresasFiltradas.filter(emp => 
        emp.setor.toLowerCase() === filtros.setor.toLowerCase()
      );
    }

    if (filtros.cidade) {
      empresasFiltradas = empresasFiltradas.filter(emp => 
        emp.cidade.toLowerCase().includes(filtros.cidade.toLowerCase())
      );
    }

    if (filtros.uf) {
      empresasFiltradas = empresasFiltradas.filter(emp => 
        emp.uf === filtros.uf
      );
    }

    setEmpresas(empresasFiltradas);
  };

  const limparFiltros = () => {
    setFiltros({
      nome: '',
      status: '',
      setor: '',
      cidade: '',
      uf: ''
    });
    setEmpresas(empresasMock);
  };

  useEffect(() => {
    aplicarFiltros();
  }, [filtros]);

  const totalEmpresas = empresasMock.length;
  const empresasAtivas = empresasMock.filter(emp => emp.status === 'Ativo').length;
  const empresasInativas = empresasMock.filter(emp => emp.status === 'Inativo').length;

  return (
    <div className="relatorio-container">
      {/* Header fixo e ajustado */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}>
        <Header />
      </div>

      {/* Conteúdo com espaçamento para não sobrepor o header */}
      <main style={{ marginTop: "80px", padding: "20px" }}>
        <div className="container">
          <h1 className="page-title">Relatório de Empresas</h1>
          <p className="page-subtitle">
            Consulte abaixo as empresas cadastradas no sistema. Use os filtros para refinar sua busca.
          </p>

          {/* Estatísticas */}
          <div className="stats-grid">
            <StatCard number={totalEmpresas} label="Total de Empresas" />
            <StatCard number={empresasAtivas} label="Empresas Ativas" />
            <StatCard number={empresasInativas} label="Empresas Inativas" />
            <StatCard number={empresas.length} label="Resultados Filtrados" />
          </div>

          {/* Filtros */}
          <div className="filters-section">
            <h3 className="filters-title">Filtrar por:</h3>
            <div className="filters-grid">
              <div className="filter-group">
                <label>Buscar Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  value={filtros.nome}
                  onChange={(e) => handleFiltroChange('nome', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>Status</label>
                <select
                  value={filtros.status}
                  onChange={(e) => handleFiltroChange('status', e.target.value)}
                >
                  <option value="">Todos</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Setor</label>
                <select
                  value={filtros.setor}
                  onChange={(e) => handleFiltroChange('setor', e.target.value)}
                >
                  <option value="">Todos</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Comércio">Comércio</option>
                  <option value="Agronegócio">Agronegócio</option>
                </select>
              </div>

              <div className="filter-group">
                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="Digite a cidade"
                  value={filtros.cidade}
                  onChange={(e) => handleFiltroChange('cidade', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>UF</label>
                <select
                  value={filtros.uf}
                  onChange={(e) => handleFiltroChange('uf', e.target.value)}
                >
                  <option value="">Todos</option>
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="PR">PR</option>
                  <option value="MG">MG</option>
                  <option value="RS">RS</option>
                </select>
              </div>

              <div className="filter-group">
                <label>&nbsp;</label>
                <button className="clear-btn" onClick={limparFiltros}>
                  Limpar Filtros
                </button>
              </div>
            </div>
          </div>

          {/* Resultados */}
          <div className="results-section">
            <div className="results-header">
              <h2 className="results-title">Empresas Cadastradas</h2>
              <p className="results-count">
                Mostrando {empresas.length} de {totalEmpresas} empresas
              </p>
            </div>

            <div className="table-container">
              <table className="empresas-table">
                <thead>
                  <tr>
                    <th>Empresa</th>
                    <th>CNPJ</th>
                    <th>Status</th>
                    <th>Setor</th>
                    <th>Cidade/UF</th>
                    <th>Data Cadastro</th>
                  </tr>
                </thead>
                <tbody>
                  {empresas.length > 0 ? (
                    empresas.map((empresa) => (
                      <tr key={empresa.id}>
                        <td>
                          <a href="#" className="company-link">
                            {empresa.nome}
                          </a>
                        </td>
                        <td>{empresa.cnpj}</td>
                        <td>
                          <StatusBadge status={empresa.status} />
                        </td>
                        <td>{empresa.setor}</td>
                        <td>{empresa.cidade}/{empresa.uf}</td>
                        <td>{empresa.dataCadastro}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-results">
                        Nenhuma empresa encontrada com os filtros aplicados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
