import { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const activity1 = [
    {
      id: 1,
      name: "Adventure",
    },
    {
      id: 2,
      name: "Sow A Seed",
    },
    {
      id: 3,
      name: "Jungle Safari",
    },
    {
      id: 4,
      name: "Play Ground",
    },
    {
      id: 5,
      name: "Art & Crafts",
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc js-form-dd js-liverSearch">
        <div
          className="d-flex items-center"
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <i className="text-20 icon-search text-white mr-15" />
          <div className="text-15 text-white ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Search Activities"
              className="text-white header-search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {activity1.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="ml-10">
                    <div className="text-15 lh-12 fw-500 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
