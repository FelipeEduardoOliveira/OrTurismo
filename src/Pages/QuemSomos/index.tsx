import React from "react";
import Container_Section from "../../Components/Containers/Section";
import TitleDivisor from "../../Components/TitleDivisor";

const QuemSomos = () => {
  return (
    <div>
      <TitleDivisor title="Quem somos" />

      <Container_Section
        title="Quem somos"
        subtitle="O nome da empresa foi pensado e repensado, pois gostaríamos de algo marcante e que tivesse uma história, o nome é OR em português é OU, mas para mim são as iniciais do nome dos meus filhos. Então, para o cliente se entende que OU pode ser esse destino OU outro, pois minha missão será que se ele não for para um lugar, iria para outro, mas irá realizar uma viagem com certeza. Meu trabalho é ser a designer de viagem. Para que você entenda melhor, trouxe uma breve explicação sobre"
        invert={false}
      />

      <TitleDivisor title="DESIGN DE VIAGENS" />

      <Container_Section
        title="O que é?"
        subtitle="É uma pessoa apaixonada em viagens, que mantém o hábito de conhecer lugares distintos e vivenciar as mais variadas experiências. Ao aproveitar a própria expertise para planejar e organizar viagens para outras pessoas, a profissão aproxima-se de uma consultoria.
"
        invert={false}
      />
      <Container_Section
        title="O que um Design de Viagens faz?"
        subtitle="O Designer de viagens começa com uma reunião com o cliente. A partir de uma conversa, o profissional fica sabendo quais são as preferências de viagem do cliente, destinos que ele tem em mente, o que gosta e o que não gosta de fazer, além do orçamento disponível para a contratação da consultoria, que envolve inclusive a compra dos serviços. Além de verificar detalhes ainda mais pessoais, como o estilo de música preferido do viajante, podendo fazer a diferença no roteiro a ser planejado. 
        Assim, é chegado o momento de planejar o itinerário e as atividades. Com o projeto finalizado, o designer de viagens e o turista voltam a comunicar-se para verificação do itinerário. Se aprovado, o profissional parte para a compra de passagens, reservas, etc.
        Não se trata de um mero agente de viagens, nem de um operador turístico. Esse profissional propõe experiências mais exclusivas e, quase sempre, a partir de uma recomendação pessoal de quem já vivenciou determinada atividade. Resumindo, também se trata de um curador altamente criativo e com capacidade de customização."
        invert={false}
      />
      <Container_Section
        title="Como Funciona?"
        subtitle=""
        list={[
          {
            title: "1° BATE PAPO",
            text:
              "Ao optar pelo serviço de personalização de viagens, a gente se conhece, você me explica seus objetivos e o que deseja e não deseja no seu roteiro. Pode ser uma viagem a dois, lua de mel, em família, com amigos, grupo, etc.",
          },
          {
            title: "2° DESIGN DA SUA VIAGEM",
            text:
              "Buscarei os melhores fornecedores do turismo para a sua viagem ser no mínimo excelente. As melhores opções de aéreo, hotéis, passeios, etc, de acordo com o seu perfil e objetivos.",
          },
          {
            title: "3° APRESENTAÇÃO DA PROPOSTA",
            text:
              "Apresento a melhor proposta de viagem para você. Se estiver de acordo, seguimos com o contrato e pagamento dos serviços de interesse.",
          },
          {
            title: "4° VOCÊ VIAJA",
            text:
              "Você viaja e se diverte. Caso precise de qualquer suporte durante a viagem, poderá contar com nosso canal de atendimento 24 horas.",
          },
        ]}
        invert={false}
      />
      <Container_Section
        title="FEEDBACK"
        subtitle="Após o seu retorno, lhe procurarei para saber como foi a sua viagem."
        invert={false}
      />
    </div>
  );
};

export default QuemSomos;
