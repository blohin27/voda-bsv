import { action, makeAutoObservable, observable } from "mobx";

export class ModalStore {
  @observable public modalOpen = false;
  @observable public stateServiceAll = "пульт1";

  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  openModal = () => {
    this.modalOpen = true;
  };

  @action.bound
  closeModal = () => {
    this.modalOpen = false;
  };

  @action.bound
  setStateServiceAll = (value: string) => {
    this.stateServiceAll = value;
  };
}
