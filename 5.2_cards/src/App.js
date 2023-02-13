import Card from "./Card";

function App() {
  const cardOne = {
    background: "",
    title: "Random Title 1",
    description: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
    hrefShare: "",
    hrefExplore: "https://www.ynet.co.il/",
  };
  const cardTwo = {
    background: "",
    title: "Random Title 2",
    description: "gla gla gla gla gla gla gla gla gla gla",
    hrefShare: "",
    hrefExplore: "https://www.n12.co.il/",
  };
  const cardThree = {
    background: "",
    title: "Random Title 3",
    description: "smgklfmgkfmgkmfkglgkmlkm7k5mkem",
    hrefShare: "",
    hrefExplore: "https://www.walla.co.il/",
  };

  return (
    <div className="App">
      <div className="cards-container">
        <Card exploreLink={cardOne.hrefExplore} description={cardOne.description} title={cardOne.title}></Card>
        <Card exploreLink={cardTwo.hrefExplore} description={cardTwo.description} title={cardTwo.title}></Card>
        <Card exploreLink={cardThree.hrefExplore} description={cardThree.description} title={cardThree.title}></Card>
      </div>
    </div>
  );
}
export default App;

// Create a card component.
// Render 3x the card component and each card will have
// a different image, title, description, and links.
// For example:
