import { useState, useEffect } from "react";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import NewsItem from "components/reusable_components/panel_card_parts/NewsItem";
import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon-blue.svg";
import Spinner from "../../../reusable_components/other/Spinner";
import { getNewsArticlesAPI } from "http-requests/http-request-functions";

function LatestNews() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const apiKey = "5a200fbc39434849a235997066684175";
  const url =
    "https://newsapi.org/v2/everything?q=apple&from=2021-10-12&to=2021-10-12&sortBy=popularity&apiKey=";

  useEffect(() => {
    getNewsArticlesAPI(url, apiKey).then((response) => setData(response.data));
    setIsLoading(false);
  }, []);

  console.log(data);

  return (
    <Grid container>
      <Grid item container className={classes.newsCardHeader}>
        <Grid item>
          <CardTitle title="Latest news" icon={<FileTextIcon />} />
        </Grid>
        <Grid item>
          <CardLink
            linkText="Visit our blog"
            linkIcon={<ExternalLinkIcon />}
            href="https://vetrinalive.com/blog?_ga=2.89335323.1663349020.1633860055-33672331.1633860055"
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.newsContainer}>
        {isLoading ? (
          <Spinner />
        ) : (
          data &&
          data.articles.map((item, index) => {
            const { url, urlToImage, author, title, publishedAt } = item;
            if (index > 7) {
              return;
            }
            return (
              <NewsItem
                key={url}
                image={urlToImage}
                title={author}
                textPrimary={title}
                textSecondary={`Published at: ${publishedAt}`}
                link={url}
              />
            );
          })
        )}
      </Grid>
    </Grid>
  );
}

export default LatestNews;

const useStyles = makeStyles((theme) => ({
  newsContainer: {
    display: "flex",
    marginTop: "0.875rem",
  },
  newsCardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
