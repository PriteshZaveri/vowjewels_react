import { map } from "lodash";
import SmallCard from "../components/SmallCard";
import CustomSlider from "../components/CustomSlider";
import "../static/css/home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "../helpers/api";

class Home extends React.Component {
  static async getInitialProps(req, res) {
    return api.getProducts().then(response => {
      return { PageTitle: "Vow Jewels", products: response };
    });
  }
  constructor() {
    super();
    this.state = {
      hero_setting: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }
  render() {
    return (
      <div className="main-section">
        <section className="hero-slider-wrap">
          <div className="hero-slider">
            <CustomSlider settings={this.state.hero_setting}>
              <div className="slide slide2" />
              <div className="slide slide2" />
              <div className="slide slide3" />
            </CustomSlider>
          </div>
        </section>
        <section className="home-about section-block">
          <div className="container">
            <h2 className="section-title">
              <span>About Us</span>
            </h2>
            <p>
              Vow Jewels formed its company in the Mumbai for gold & diamond
              jewellery, VOW Collection has carved a niche for itself with an
              ever expanding portfolio. With a combined experience of 18 years
              in the Gold & diamond jewellery industry.
              <br />
              <br />
              With a cliental from all over the INDIA, Vow Jewels offers bespoke
              jewellery and a range that encompasses diamond solitaries,
              engagement rings, earrings, bracelets/bangles and amazing
              necklaces or pendants all in 9k,14k,18k,22k,24k gold. Nature has
              astonished us with its creation of mesmerizing, natural diamond
              crystals. They rose from far beneath the earth’s surface; we have
              simply enhanced its richness by customizing it into beautiful
              jewelry.
            </p>
          </div>
        </section>
        <section className="top-picks section-block section-alt">
          <div className="container">
            <h2 className="section-title">
              <span>Top Picks</span>
            </h2>
            <div className="row">
              {map(this.props.products, (data, index) => {
                return (
                  <div key={index} className="col col-3">
                    <SmallCard data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="our-collection section-block">
          <div className="container">
            <h2 className="section-title">
              <span>Our Collection</span>
            </h2>
            <div className="row">
              <div className="col col-6">
                <div className="txt-col">
                  <h2>Wedding Collection</h2>
                  <p>
                    Modern brides are loving designs from their grandma's
                    jewellery boxes with a modern touch like jhumka, kaanbala,
                    tairaa/mangtika, ratanchur, mantasha and others. Vow Jewel's
                    traditional gold filigree and meenakari work are a favourite
                    among brides in Mumbai and Pune. The designers combine these
                    traditional and yet popular design forms with modern and
                    contemporary design patterns and motifs to create a blend
                    that appeals to the new age bride.
                  </p>
                </div>
              </div>
              <div className="col col-6">
                <div className="img-col img-col-1">
                  <div className="img-wrap" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-6">
                <div className="img-col img-col-2">
                  <div className="img-wrap" />
                </div>
              </div>
              <div className="col col-6">
                <div className="txt-col">
                  <h2>Wedding Collection</h2>
                  <p>
                    Modern brides are loving designs from their grandma's
                    jewellery boxes with a modern touch like jhumka, kaanbala,
                    tairaa/mangtika, ratanchur, mantasha and others. Vow Jewel's
                    traditional gold filigree and meenakari work are a favourite
                    among brides in Mumbai and Pune. The designers combine these
                    traditional and yet popular design forms with modern and
                    contemporary design patterns and motifs to create a blend
                    that appeals to the new age bride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=""></section>
      </div>
    );
  }
}
export default Home;
