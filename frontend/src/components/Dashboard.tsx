import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>150</h3>
                    <p>Chamados</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>

              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-gradient-danger">
                  <div className="inner">
                    <h3>5</h3>
                    <p>Cargos</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-gradient-success">
                  <div className="inner">
                    <h3>44</h3>
                    <p>Funcionários</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="small-box bg-gradient-primary">
                  <div className="inner">
                    <h3>5</h3>
                    <p>Setores</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-user-plus" />
                  </div>
                  <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div></div>

  )
}

export default Dashboard