import { BreadcrumbPedidos } from 'utils/Mocks/Breadcrumb';
import Header from "components/Header";
import Breadcrumb from "components/Breadcrumb";
import Footer from "components/Footer";

function Pedidos() {
  return (
    <>
      <h1>VIEW PEDIDOS</h1>
      <h1>Companhia do Saldo - Página Pedidos</h1>

      <Header />

      <h1>BODY</h1>

      <Breadcrumb
        Path={BreadcrumbPedidos.Path}
        Title={BreadcrumbPedidos.Title}
      />

      <p>
        Gostaria de facilitar suas compras? Se cadastre, e com isso, você poderá
        fazer seus pedidos, sem sair de casa.
      </p>

      <h3>FORMULÁRIO</h3>
      <h3>Identificação do Cliente</h3>
      <h4>Nome:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>E-mail:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Sexo:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Masculino</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Feminino</h4>
      <h4>Data de Nascimento:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>Endereço do Cliente</h3>
      <h4>Logradouro:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Número:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Estado:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Cidade:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>Mensagem do Cliente</h3>
      <h4>Grau de Urgência:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Mensagem:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>Quero comprar</h3>
      <h4>Produto:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Cor:</h4>
      <h4>AQUI VAI UM CAMPO</h4>
      <h4>Quantidade:</h4>
      <h4>AQUI VAI UM CAMPO</h4>

      <h3>AQUI VAI UM BOTÃO</h3>

      <Footer />
    </>
  );
};

export default Pedidos;