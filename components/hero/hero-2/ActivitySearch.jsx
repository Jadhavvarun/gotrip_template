import React, { useState } from "react";

const activityCategories = [
  "Adventure",
  "Sow A Seed",
  "Jungle Safari",
  "Play Ground",
  "Art & Crafts",
];

const priceRanges = ["$0 - $25", "$25 - $50", "$50 - $100", "$100+"];

// const availabilityOptions = ["Today", "This Week", "This Month"];

const ActivitySearch = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  // const [selectedAvailability, setSelectedAvailability] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };

  // const handleAvailabilityChange = (availability) => {
  //   setSelectedAvailability(availability);
  // };

  return (
    <div className="activitySearch px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters position-relative">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">Search Activities</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          {selectedCategory && (
            <span className="selected-option">{selectedCategory}</span>
          )}
          {selectedPriceRange && (
            <span className="selected-option">{selectedPriceRange}</span>
          )}
          {/* {selectedAvailability && (
            <span className="selected-option">{selectedAvailability}</span>
          )} */}
        </div>
      </div>
      {/* End activity search */}

      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-30 py-30 rounded-4 search-box">
          <div className="search-field">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">Select Category</option>
              {activityCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="priceRange">Price Range</label>
            <select
              id="priceRange"
              value={selectedPriceRange}
              onChange={(e) => handlePriceRangeChange(e.target.value)}
            >
              <option value="">Select Price Range</option>
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="search-field">
            <label htmlFor="availability">Availability</label>
            <select
              id="availability"
              value={selectedAvailability}
              onChange={(e) => handleAvailabilityChange(e.target.value)}
            >
              <option value="">Select Availability</option>
              {availabilityOptions.map((availability) => (
                <option key={availability} value={availability}>
                  {availability}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ActivitySearch;
  