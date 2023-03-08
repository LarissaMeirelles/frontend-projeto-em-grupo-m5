import React, { useState, useEffect } from 'react'
import BarChart from '../components/BarChart'
import Menus from '../components/Menus';
import FooterMenus from '../components/FooterMenus';
import { useParams } from "react-router-dom";
import {api} from "../axios/api";
import cookie from '../axios/function';
import '../css/cards-index.css'
import Extract from '../components/Extract';


function HomePage() {
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  const info = cookie.getCookie('info');
  const user = JSON.parse(info)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    setUsuario([user])
  }, []);


  const [gastos, setGastos] = useState([]);




  const getGastos = async () => {
    try {

      const token = cookie.getCookie('token');
      api.defaults.headers.Authorization = `Bearer ${token}`

      const response = await api.get(`/spendings`);
      const data = response.data.result;
      setGastos(data);
      
    } catch (error) {
      console.log(error);
    }
  };


  const getCategories = async () =>{
    const token = cookie.getCookie('token');
    api.defaults.headers.Authorization = `Bearer ${token}`

    const response = await api.get('/categories')
    const categories = response.data.result
    setCategorias(categories)
  }
  

  // Despesas

  let despesasTotal = 0;

  const atualizaSaldo = () => usuario.map((u)=> (u.u_income - despesasTotal))
  
  const calculaDespesa = () => {
  gastos.map((gasto) => {
  despesasTotal += Number(gasto.s_value);
  atualizaSaldo();
  })
  }

  useEffect(() => {
    getGastos();
    calculaDespesa()
    getCategories()
    }, []);

  return (

    <>
        <Menus />
        {usuario.map((u,index)=>(
        <>

        <React.Fragment key={index}>

        {gastos.map((gast)=>(

        <main className="container py-5 coisas" >
        
        <div className="row" >
  
        <div className="col-sm-6 col-lg-8 mb-4">
  
          <div className="card infos col-sm-12 col-lg-12 mb-12" key={u.u_id}>
            <p className='title-bom'>Bom dia, {u.u_name}</p>
  
  
            <div className="d-flex">
  
              <div className="coluna col">
                <div className="card receita">
                  <p className='receita-sub'>receita mensal</p>
                  <p className='receita-valor renda'>R${u.u_income}</p>
                </div>
              </div>
  
              <div className="coluna col">
                <div className="card receita">
                  <p className='receita-sub'>despesa mensal</p>
                  <p className='receita-valor despesa'>R${despesasTotal}</p>
                </div>
              </div>
  
              <div className="coluna col">
                <div className="card receita">
                  <p className='receita-sub'>saldo atual</p>
                  <p className='receita-valor saldo'>R${atualizaSaldo()}</p>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        <div className="col-sm-6 col-lg-4 mb-4 eita">
            <div className="card text-center borda">
              <div className="card-body">
                <h5 className="card-title">Não sei ainda</h5>
                <p className="card-text">?</p>
              </div>
            </div>
          </div>
          
          <div className="col-sm-6 col-lg-4 mb-4 eita">
            <div className="card borda">
              <div className="card-body">
                <h5 className="card-title">Categorias</h5>
                <p className="card-text" key={gast.s_id}>
                  {gast.c_name} = {gast.s_value}
                </p>
              </div>
            </div>
          </div>
  
         
          <div className="col-sm-6 col-lg-4 mb-4 eita">
          <div className="card">
            <div className="card-body">
              <p className="card-text"><Extract/></p>
            </div>
          </div>
        </div>
        
  
          <div className="col-sm-6 col-lg-4 mb-4 eita">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Não sei ainda</h5>
                <p className="card-text">?</p>
              </div>
            </div>
          </div>
        </div>
      
      </main>
      ))
          }
      </React.Fragment>
      </>
  
      ))
    }
    <FooterMenus/>
   </>
  )
}

export default HomePage