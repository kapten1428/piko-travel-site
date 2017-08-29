import $ from 'jquery';

class OpenModal{
	constructor(){
		this.modal  = $(".create-modal");
		this.btnOpenModal = $(".open-modal");
		this.btnCloseModal = $(".close-modal");
		this.events();
	}

	events(){
		this.btnOpenModal.click(this.openModal.bind(this));
		this.btnCloseModal.click(this.closeModal.bind(this));

	}

	openModal(){
		this.modal.addClass("create-modal--is-visible");
	}

	closeModal(){
		this.modal.removeClass("create-modal--is-visible");
	}

}

export default OpenModal;