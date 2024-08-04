import React, {useState} from 'react';
import './style.scss';
import { MdSearch } from 'react-icons/md';
import { AiFillFilter } from 'react-icons/ai';
import { FaSort } from 'react-icons/fa6';
import { IoIosClose } from "react-icons/io";
import {toast} from "react-toastify";

function ToolbarPanel(props) {
  const [searchValue, setSearchValue] = useState<string>('')
  const onIoIosCloseClick = (event: React.MouseEvent<SVGElement>) => {
    setSearchValue('')
    toast("Search query has been cleared.")
  }

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(prevState => event.target.value)
  }


  return (
    <div id="toolbar-panel">
      <div className="tools-box">
        <div className="tool-button">
          <AiFillFilter />
          <span>Filter</span>
        </div>
        <div className="tool-button">
          <FaSort />
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
          {!!searchValue && <IoIosClose
		        id="remove-search-text-btn"
		        onClick={onIoIosCloseClick}
	        />}
        </div>
        <div id="search-button">
          <MdSearch />
        </div>
      </div>
    </div>
  );
}

export default ToolbarPanel;
