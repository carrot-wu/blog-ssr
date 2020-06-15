import React from "react"
import './styles.scss'
import {Header} from "@src/components";
import {useTitle} from "@src/hooks";

const Index: React.FC = () => {
  useTitle('关于她')
  return (
    <div className="love-wrapper">
      <Header/>
      <div className="love-content">
        <span>完善中</span>
      </div>
    </div>
  )
}
export default Index
