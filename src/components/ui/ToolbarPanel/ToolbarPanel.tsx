import React, {useState} from 'react';
import './style.scss';
import {MdSearch} from 'react-icons/md';
import {AiFillFilter} from 'react-icons/ai';
import {FaSort} from 'react-icons/fa6';
import {IoIosClose} from "react-icons/io";
import {toast} from "react-toastify";
import Modal from "../Modal/Modal.tsx";
import FilterContainer from "./FilterContainer/FilterContainer.tsx";
import SortContainer from "./SortContainer/SortContainer.tsx";

const modalInitState: IModalInitState = {
  filterModal: false,
  sortModal: false,
}

interface IModalInitState {
  filterModal: boolean
  sortModal: boolean
}

function ToolbarPanel() {
  const [searchValue, setSearchValue] = useState<string>('')

  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [sortModal, setSortModal] = useState<boolean>(false);

  const onIoIosCloseClick = (event: React.MouseEvent<SVGElement>) => {
    setSearchValue('')
    toast("Search query has been cleared.")
  }

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(prevState => event.target.value)
  }


  return (
    <>
      <div id="toolbar-panel">
        <div className="tools-box">
          <div className="tool-button"
               onClick={() => setFilterModal(true)}
          >
            <AiFillFilter/>
            <span>Filter</span>
          </div>
          <div className="tool-button"
               onClick={() => setSortModal(true)}
          >
            <FaSort/>
            <span>Sort</span>
          </div>
        </div>
        <div className="search-part">
          <div className="search-input__wrapper">
            <input
              type="text"
              id="search-input"
              autoComplete="off"
              data-has-text={!!searchValue.trim()}
              onChange={onSearchInputChange}
              value={searchValue}
            />
            {!!searchValue && (
              <IoIosClose
                id="remove-search-text-btn"
                onClick={onIoIosCloseClick}/>
            )}
          </div>
          <div id="search-button">
            <MdSearch/>
          </div>
        </div>
      </div>
      <Modal state={filterModal} stateFunc={setFilterModal}>
        <FilterContainer/>
      </Modal>
      <Modal state={sortModal} stateFunc={setSortModal}>
        <SortContainer closeModal={setFilterModal}/>
      </Modal>
    </>

  );
}

export default ToolbarPanel;
