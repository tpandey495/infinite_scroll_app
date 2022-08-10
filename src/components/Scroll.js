

function Scroll({item}) {
  console.log(item);
    return (
    <div className="profile col-sm-5 col-md-2 my-2">
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
      <div className="card-body">
      <h5 className="name">Name : {item.name.first}    {item.name.last}</h5>
     <h2 className="alpha">Email:</h2>
     <h3 className="alpha">{item.email}</h3>
      <img className="picture" src={item.picture.large} />
  </div>
  </div>
  </div>
 )
}

export default Scroll
