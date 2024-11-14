import {ChangeEvent, useContext, useState} from 'react';
import {GlobalSearchContext} from "../Layout";

const HiddenSearchButton = () => {
    const { onChangeSearchValue } = useContext(GlobalSearchContext);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    // 검색 아이콘 클릭 시 텍스트 입력창 토글
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // 검색어 변경
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Enter 키가 눌렸을 때 실행할 동작
            onChangeSearchValue(searchText);
        }
    };

    return (
        <div className="search-container">
            {isSearchOpen && (
                <div className="search-input-container">
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Search..."
                        className="search-input"
                    />
                </div>
            )}
            <button className="search-icon" onClick={toggleSearch}>
                🔍
            </button>
        </div>
    );
};

export default HiddenSearchButton;
