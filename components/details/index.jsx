import Link from 'next/link';

const EventDetails = () => {
  const event = {
    title: 'Play Parks',
    date: 'October 15, 2023',
    location: 'New York, NY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ullamcorper urna, vel efficitur dolor. Sed nec turpis non nunc luctus aliquam. Proin tincidunt felis et purus eleifend, et cursus sem posuere. Nunc ac metus non nulla interdum iaculis. Nulla facilisi. Integer hendrerit, est non pharetra fermentum, justo urna elementum turpis, a iaculis neque libero id justo.',
    images: [
      '/img/wwk/climb.jpg',
      '/img/wwk/climb.jpg',
      '/img/wwk/climb.jpg',
    ],
  };

  const { title, date, location, description, images } = event;

  return (
    <div className="container mt-4">
      <div className="event-header">
        <h1>{title}</h1>
        <p>Date: {date}</p>
        <p>Location: {location}</p>
      </div>

      <div className="event-description">
        <p>{description}</p>
      </div>

      <div className="event-images row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="img-fluid mb-3"
            />
          </div>
        ))}
      </div>

      <div className="back-link">
        <Link href="/events">Back to Events</Link>
      </div>

      <style jsx>{`
        .event-header {
          background-color: #EFAAAA;
          color: #fff;
          padding: 20px;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .event-description {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .event-images {
          margin-bottom: 20px;
        }

        .event-images img {
          width: 100%;
          border-radius: 5px;
        }

        .back-link {
          text-align: center;
        }

        .back-link a {
          color: #007bff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default EventDetails;
