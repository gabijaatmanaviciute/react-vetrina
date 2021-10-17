import { useState, useEffect } from "react";
import { ReactComponent as NewAppIcon } from "assets/icons/new-app-icon.svg";
import PanelCard from "../../../reusable_components/panel_card_parts/PanelCard";
import CarouselCard from "../../../reusable_components/panel_card_parts/CarouselCard";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

function ExtensionsMarketplace() {
  const [extensions, setExtensions] = useState("");
  const classes = useStyles();

  const key = "DmfUYu2V28I90av_meseyUaMnkRmsn_7rBZKlki6qfk";
  const url = `https://api.unsplash.com/search/photos?page=1&per_page=4&query=smartphone&client_id=${key}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      // console.log(response.data.results);
      setExtensions(response.data.results);
    });
  }, []);

  // const settings = {
  //   infinite: false,
  //   adaptiveHeight: true,
  //   arrows: false,
  //   autoplay: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  // };

  return (
    <PanelCard
      cardIcon={<NewAppIcon />}
      cardTitle="Extensions Marketplace"
      cardFooterElement={
        <CardLink
          linkText="Discover all extensions"
          linkIcon={<ArrowForwardRoundedIcon />}
          href="https://admin.vetrinalive.com/extensions"
        />
      }
    >
      <Box className={classes.carousel}>
        {/* <Slider {...settings}> */}
          {extensions &&
            extensions.map((item) => (
              <CarouselCard
                undertext={item.alt_description}
                imageLink={item.urls.small}
              />
            ))}
        {/* </Slider> */}
      </Box>
    </PanelCard>
  );
}

export default ExtensionsMarketplace;

const useStyles = makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
  },
}));
