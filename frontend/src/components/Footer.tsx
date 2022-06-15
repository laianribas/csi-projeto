import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className="main-footer">
        <strong>2022, criado por <a href="https:/github.com/laianribas" target="_blank" rel='noreferrer'>Laian Ribas</a>.</strong>
        <div className="float-right d-none d-sm-inline-block">
          <b>Version</b> 1.0.0
        </div>
      </footer>
    </>

  )
}

export default Footer