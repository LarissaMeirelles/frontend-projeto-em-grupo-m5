import 'bootstrap/dist/css/bootstrap.min.css';
import Menus from '../components/Menus';
import FooterMenus from '../components/FooterMenus';
import { useParams } from "react-router-dom";
import blogFetch from "../control/axios";
import { useState, useEffect } from "react";
import '../css/cards-index.css'


const Index = () => {
    const { id } = useParams();

    const [usuario, setUsuario] = useState([]);

    const getUsuario = async () => {
      try {
        const response = await blogFetch.get(`/user/${id}`);
        const data = response.data.data[0];
        setUsuario(data);
        
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    getUsuario();
  }, []);


  const [gastos, setGastos] = useState([]);

  const getGastos = async () => {
    try {
      const response = await blogFetch.get(`/spending/user/${id}`);
      const data = response.data.data;
      setGastos(data);
      
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  getGastos();
}, []);

let despesasTotal = 0;
const atualizaSaldo = () => (usuario.income - despesasTotal)

const calculaDespesa = () => {
  gastos.forEach((gasto) => {
  despesasTotal += Number(gasto.value);
  atualizaSaldo();
})
}


calculaDespesa()

    return (
      <>
      <Menus user={usuario} />

      <main className="container py-5 coisas">
      
      <div className="row" >

      <div className="col-sm-6 col-lg-8 mb-4">

        <div className="card infos col-sm-12 col-lg-12 mb-12">
          <p className='title-bom'>Bom dia, {usuario.name}</p>


          <div className="d-flex">

            <div className="coluna col">
              <div className="card receita">
                <p className='receita-sub'>receita mensal</p>
                <p className='receita-valor renda'>R${usuario.income}</p>
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
              <p className="card-text">O total gasto em cada categoria</p>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 mb-4 eita">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Extrato</h5>
              <p className="card-text">Todos os gasto, do mais recente.</p>
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
        <FooterMenus/>
        </>
    )
}

export default Index