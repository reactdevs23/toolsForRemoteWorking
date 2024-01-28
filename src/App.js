import InitialPage from "./components/InitialPage/InitialPage";
import MainComponent from "./components/MaiComponent/MainComponent";
import { img1, img2 } from "./images";

function App() {
  const allData = {
    fontFamily: "'Inter', sans-serif",

    lineHeight: "3px",

    initialPage: {
      title: "Write Tools",
      info: "For Remote <br/> Working.",
      imgLeft: img2,
      imgRight: img1,
      background: "#fff",
      primaryColor: "#47A992",
      secondaryColor: "#482121",
      lineColor: "#F2B6A0",
    },
    data: [
      {
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        img: img1,
        link: "www.reallygreatsite.com",
        background: "#19A7CE",
        patternColor: "#fff",
        primaryColor: "#F2B6A0",
        linkColor: "#fff",
        secondaryColor: "#fff",
      },
      {
        title: "Write Text Here",

        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        img: img1,
        link: "www.reallygreatsite.com",

        background: "#fff",

        primaryColor: "#47A992",
        secondaryColor: "#000",
      },
      {
        info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        img: img1,
        link: "www.reallygreatsite.com",

        background: "#19A7CE",
        patternColor: "#fff",
        primaryColor: "#F2B6A0",
        linkColor: "#fff",
        secondaryColor: "#fff",
      },
    ],
  };
  return (
    <div
      style={{
        fontFamily: allData.fontFamily,

        "--lineHeight": allData.lineHeight,
      }}
    >
      <InitialPage {...allData.initialPage} totalTools={allData.data.length} />
      {allData.data.map((el, i) => (
        <MainComponent {...el} key={i} id={i + 1} />
      ))}
    </div>
  );
}

export default App;
