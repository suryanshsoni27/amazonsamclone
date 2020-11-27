import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-OWY3OGE4MDgt-w1500._CB416092890_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="Popular Deal "
          price={29.99}
          image={
            "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/HOLIDAY/GW/DQC/GWDQC_T5_ALL_2x._SY232_CB417217541_.jpg"
          }
          rating={3}
        />
        <Product
          id="2"
          title="Deal  4-stars & up"
          price={397}
          image={
            "https://m.media-amazon.com/images/I/41+f2K0VZFL._AC_SY480_.jpg"
          }
          rating={4}
        />

        {/*product component*/}
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Trending deal "
          price={10}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/41Yc48nHCBL._AC_SY480_.jpg"
          }
          rating={3}
        />
        <Product
          id="4"
          title="Amazon Device deal"
          price={259}
          image={
            "https://m.media-amazon.com/images/I/415YL0hdNTL._AC_SY480_.jpg"
          }
          rating={5}
        />
        <Product
          id="5"
          title="Top Black Friday deals"
          price={79.99}
          image={
            "https://m.media-amazon.com/images/I/411Ybt77k0L.__AC_SY400_.jpg"
          }
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Popular Deal "
          price={29.99}
          image={
            "https://m.media-amazon.com/images/G/01/US-hq/2020/img/PC_Hardware/XCM_CUTTLE_1294968_1509953_US_3581834_500x500_en_US._AC_SY480_.jpg"
          }
          rating={5}
        />
        <Product
          id="7"
          title="Popular Deal "
          price={29.99}
          image={
            "https://m.media-amazon.com/images/G/01/US-hq/2020/img/PC_Hardware/XCM_CUTTLE_1294968_1509953_US_3581834_500x500_en_US._AC_SY480_.jpg"
          }
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
