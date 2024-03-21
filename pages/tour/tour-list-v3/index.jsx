import Seo from "../../../components/common/Seo";
import Header11 from "../../../components/header/header-11";
import DropdownSelelctBar from "../../../components/tour-list/common/DropdownSelelctBar";
// import MapPropertyFinder from "../../../components/tour-list/common/MapPropertyFinder";
// import Pagination from "../../../components/tour-list/common/Pagination";
import MainFilterSearchBox from "../../../components/tour-list/tour-list-v3/MainFilterSearchBox";
// import TopHeaderFilter from "../../../components/tour-list/tour-list-v3/TopHeaderFilter";
// import TourProperties from "../../../components/tour-list/tour-list-v3/TourProperties";
import EventDetails from "../../../components/details"

const index = () => {
  return (
    <>
      <Seo pageTitle="Event Details" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header11 />
      {/* End Header 1 */}

      <section className="halfMap">
        <div className="halfMap__content">
          {/* <MainFilterSearchBox />

          <div className="row x-gap-10 y-gap-10 pt-20">
            <DropdownSelelctBar />
          </div> */}
          {/* End .row */}
            <EventDetails />
        </div>

      </section>
      {/* End halfMap content */}
    </>
  );
};

export default index;
