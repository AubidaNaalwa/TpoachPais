import '../styles/gallery.css';
import React, { Component, useEffect, useState } from "react";

import axios from 'axios';


class Images extends React.Component {
    constructor(props) {
      super(props);
      this.state = { currentIndex: null, imgUrls: [] };
      this.closeModal = this.closeModal.bind(this);
      this.findNext = this.findNext.bind(this);
      this.findPrev = this.findPrev.bind(this);
      this.renderImageContent = this.renderImageContent.bind(this);
    }

    async getImagesFromDb(){
      const id = this.props.match.params.id1;
      let pathLink 
      this.props.pathLink === "s" ? pathLink = `/space/images/${id}` :  pathLink = `/tpoach/images/${id}`
      const imagesArray = await axios.get(pathLink)
      const imagesUrl = imagesArray.data.images.map(i=> i.img)
      this.setState({imgUrls: imagesUrl})
    }

    componentDidMount() {
      this.getImagesFromDb()
    }

    renderImageContent(src, index) {
      return /*#__PURE__*/(
        React.createElement("div", { onClick: e => this.openModal(e, index) }, /*#__PURE__*/
        React.createElement("img", { src: src, key: src })));
  
  
    }
    openModal(e, index) {
      this.setState({ currentIndex: index });
    }
    closeModal(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState({ currentIndex: null });
    }
    findPrev(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1 }));
  
    }
    findNext(e) {
      if (e != undefined) {
        e.preventDefault();
      }
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1 }));
  
    }
    
    render() {
      return /*#__PURE__*/(
        <div>
          {this.state.imgUrls ? 

        React.createElement("div", { className: "gallery-container" }, /*#__PURE__*/
        React.createElement("div", { className: "gallery-grid" },
        this.state.imgUrls.map(this.renderImageContent)), /*#__PURE__*/

        React.createElement(GalleryModal, {
            closeModal: this.closeModal,
            findPrev: this.findPrev,
            findNext: this.findNext,
            hasPrev: this.state.currentIndex > 0,
            hasNext: this.state.currentIndex + 1 < this.state.imgUrls.length,
            src: this.state.imgUrls[this.state.currentIndex] }))
            : null}
        </div>
            
            );
        
        

}}


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
      if (e.keyCode === 37 && this.props.hasPrev)
      this.props.findPrev();
      if (e.keyCode === 39 && this.props.hasNext)
      this.props.findNext();
    }
    render() {
      const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
      if (!src) {
        return null;
      }
      return /*#__PURE__*/(
        React.createElement("div", null, /*#__PURE__*/
        React.createElement("div", { className: "modal-overlay", onClick: closeModal }), /*#__PURE__*/
        React.createElement("div", { isOpen: !!src, className: "modal" }, /*#__PURE__*/
        React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
        React.createElement("a", { href: "#", className: "modal-close", onClick: closeModal, onKeyDown: this.handleKeyDown }, "\xD7"),
        hasPrev && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-prev", onClick: findPrev, onKeyDown: this.handleKeyDown }, "\u2039"),
        hasNext && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-next", onClick: findNext, onKeyDown: this.handleKeyDown }, "\u203A"), /*#__PURE__*/
        React.createElement("img", { src: src })))));
  
  
  
  
    }}
  
  
    

export default Images;