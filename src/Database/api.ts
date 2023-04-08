import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import firebaseApp from ".";
import { LocacaoVeiculosProps, MonteSuaViagemProps, PassagensAereasProps, ReservaHotelProps } from "../utils/enums";

const db = getFirestore(firebaseApp);
const contatoParaViagemCollectionReff = collection(db, "contato-para-viagens");
const contatoPassagemAereaCollectionReff = collection(db, "passagens-aereas");
const contatoLocacaoVeiculosCollectionReff = collection(db, "locacao-veiculos");
const contatoReservaHotelCollectionReff = collection(db, "reserva-hotel");

export async function getAllContatoDeViagem() {
  const data = await getDocs(contatoParaViagemCollectionReff);
  return data.docs.map((docs) => ({ ...docs.data(), id: docs.id }));
}

export async function setContatosViagens(params: MonteSuaViagemProps) {
  await addDoc(contatoParaViagemCollectionReff, params);
}
export async function setContatosPassagensAereas(params: PassagensAereasProps) {
  await addDoc(contatoPassagemAereaCollectionReff, params);
}
export async function setContatosLocacaoDeVeiculos(params: LocacaoVeiculosProps) {
  await addDoc(contatoLocacaoVeiculosCollectionReff, params);
}
export async function setContatosReservaHotel(params: ReservaHotelProps) {
  await addDoc(contatoReservaHotelCollectionReff, params);
}
