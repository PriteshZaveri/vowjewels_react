class SmallCard extends React.Component {
  render() {
    let data = this.props.data;
    console.log(process.env.API_URL);
    return (
      <div className="p-card">
        <div className="img-wrap">
          <img
            src={
              process.env.API_URL +
              "static/images/products/" +
              data.pid +
              ".jpg"
            }
            alt="p-img"
          />
        </div>
        <h2 className="p-title p-pad">{data.name}</h2>
        <p className="p-price">Rs.{data.price}/-</p>
      </div>
    );
  }
}

export default SmallCard;
