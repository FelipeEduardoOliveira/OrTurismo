export interface MonteSuaViagemProps {
  nome: string;
  email: string;
  whatsApp: string;
  telefoneResidencial: string;
  telefoneComercial: string;
  tipoTransporte: string | number;
  destino: string;
  localEmbarque: string;
  dataSaida: string;
  dataRetorno: string;
  isNew: boolean;
  createdAt: Date;
}
export interface PassagensAereasProps {
  origem: string;
  dataSaida: string;
  dataRetorno: string;
  destino: string;
  passageirosAdultos: number;
  passageirosMenores: number;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  isNew: boolean;
  createdAt: Date;
}
export interface LocacaoVeiculosProps {
  localRetirada: string;
  LocalDevolucao: string;
  dataRetirada: string;
  dataDevolucao: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  isNew: boolean;
  createdAt: Date;
}
export interface ReservaHotelProps {
  dataSaida: string;
  dataRetorno: string;
  destino: string;
  passageirosAdultos: number;
  passageirosMenores: number;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  isNew: boolean;
  createdAt: Date;
}

export type AlertTypesSeverety = "error" | "warning" | "info" | "success";

export interface IpropsAlert {
  message: string;
  type: AlertTypesSeverety;
  open?: boolean;
}
