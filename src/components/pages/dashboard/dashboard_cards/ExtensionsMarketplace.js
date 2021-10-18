import { useEffect } from "react";
import { ReactComponent as NewAppIcon } from "assets/icons/new-app-icon.svg";
import PanelCard from "../../../reusable_components/panel_card_parts/PanelCard";
import CarouselCard from "../../../reusable_components/panel_card_parts/CarouselCard";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import Spinner from "../../../reusable_components/other/Spinner";
import { getImages } from "http-requests/http-request-functions";
import { useHttp } from "hooks/use-http";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

function ExtensionsMarketplace() {
  const classes = useStyles();

  const { isLoading, error, sendRequest, data: extensions } = useHttp(getImages);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
      {isLoading && <Spinner />}
      {extensions && (
        <Box className={classes.carousel}>
          {/* <Slider {...settings}> */}
          {isLoading && <Spinner />}
          {error && <div>Could not load resources.</div>}
          {extensions.map((item) => (
            <CarouselCard
              key={item.urls.small}
              undertext={item.alt_description}
              imageLink={item.urls.small}
            />
          ))}
          {/* </Slider> */}
        </Box>
      )}
    </PanelCard>
  );
}

export default ExtensionsMarketplace;

const useStyles = makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    minHeight: 202,
  },
}));
