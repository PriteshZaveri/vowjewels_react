import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import "../static/css/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
