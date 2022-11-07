import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/Figure';
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyAJIO-p1-Exclusiverange-REVISED%20(1).jpg"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p2-ProduktbyJ&J.jpg"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="https://assets.ajio.com/cms/AJIO/WEB/D-ExclusivelyonAJIO-p4-Gas.jpg"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
      <Carousel.Item>
      <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
    </Figure>
      </Carousel.Item>
    </Carousel>
  );
}
