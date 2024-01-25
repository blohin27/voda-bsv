import { action, makeAutoObservable, observable } from "mobx";

export class StateStore {
  @observable public modalOpen = false;
  @observable public stateServiceAll = "пульт1";
  @observable public loadingPage = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action.bound
  openModal = () => {
    this.modalOpen = true;
    console.log("modalOpen");
  };

  @action.bound
  closeModal = () => {
    this.modalOpen = false;
  };

  @action.bound
  changeLoaderPage = (value: boolean) => {
    this.loadingPage = value;
  };

  @action.bound
  setStateServiceAll = (value: string) => {
    this.stateServiceAll = value;
  };
}
