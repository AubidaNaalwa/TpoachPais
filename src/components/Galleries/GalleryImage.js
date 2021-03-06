import React from "react";
import axios from 'axios';
import { API_PATH } from '../../Constants';

export default class GalleryImage extends React.Component {
    constructor(props) {
		super(props);
		this.state = { currentIndex: null, imgUrls: [] };
		this.closeModal = this.closeModal.bind(this);
		this.findNext = this.findNext.bind(this);
		this.findPrev = this.findPrev.bind(this);
		this.renderImageContent = this.renderImageContent.bind(this);
    }

    async getImagesFromDb() {
		const imageName = this.props.match.params.id;
		const getSitePath = window.location.pathname.includes('space') ? "space" : "tpais";

		try {
			const imagesArray = await axios.get(`${API_PATH}/${getSitePath}/gallery/images/${imageName}`);
			const imagesUrl = imagesArray.data.images.map(arr => arr.img);
			this.setState({imgUrls: imagesUrl});
		}
		catch {
			this.setState({imgUrls: null});
		}
    }

    componentDidMount() {
		this.getImagesFromDb();
    }

    renderImageContent(src, index) {
		return (React.createElement("div", { onClick: e => this.openModal(e, index), key: index }, React.createElement("img", { src: src, key: index })));
    }

    openModal(e, index) {
		this.setState({ currentIndex: index });
    }

    closeModal(e) {
		if (e !== undefined)
			e.preventDefault();

		this.setState({ currentIndex: null });
    }

    findPrev(e) {
		if (e !== undefined)
			e.preventDefault();

		this.setState(prevState => ({ currentIndex: prevState.currentIndex - 1 }));
    }

    findNext(e) {
		if (e !== undefined)
			e.preventDefault();

		this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
    }

    render() {
		return (
			<div>
			{
				this.state.imgUrls &&
				React.createElement("div", { className: "gallery-container" },
				React.createElement("div", { className: "gallery-grid" },
				this.state.imgUrls.map(this.renderImageContent)),
				React.createElement(GalleryModal, { closeModal: this.closeModal, findPrev: this.findPrev, findNext: this.findNext, hasPrev: this.state.currentIndex > 0, hasNext: this.state.currentIndex + 1 < this.state.imgUrls.length, src: this.state.imgUrls[this.state.currentIndex] }))
			}
			</div>
        );
	}
}

class GalleryModal extends React.Component {
    constructor() {
		super();
		this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
		document.body.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(e) {
		if (e.keyCode === 27)
			this.props.closeModal();
		if (e.keyCode === 37 && this.props.hasNext)
			this.props.findNext();
		if (e.keyCode === 39 && this.props.hasPrev)
			this.props.findPrev();
    }

    render() {
		const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
		if (!src)
			return null;

		return (
			React.createElement("div", null,
			React.createElement("div", { className: "modal-overlay", onClick: closeModal }),
			React.createElement("div", { className: "modal" },
			React.createElement("div", { className: "modal-body" },
			React.createElement("a", { href: "#", className: "modal-close", title: "اغلاق", onClick: closeModal, onKeyDown: this.handleKeyDown }, "\xD7"),
			hasPrev && React.createElement("a", { href: "#", className: "modal-next", title: "السابق", onClick: findPrev, onKeyDown: this.handleKeyDown }, "\u2039"),
			hasNext && React.createElement("a", { href: "#", className: "modal-prev", title: "التالي", onClick: findNext, onKeyDown: this.handleKeyDown }, "\u203A"),
			React.createElement("img", {className:"display", src: src }))))
		);
    }
}