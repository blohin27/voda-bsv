import { action, makeAutoObservable, observable } from "mobx";

export class ModalStore {
  @observable public modalOpen = false;

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
}
