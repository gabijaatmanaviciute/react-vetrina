import { useEffect } from "react";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import { makeStyles } from "@material-ui/core";
import { Grid, Card } from "@material-ui/core";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import NewsItem from "components/reusable_components/panel_card_parts/NewsItem";
import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon-blue.svg";
import Spinner from "../../../reusable_components/other/Spinner";
import { getNewsArticles } from "http-requests/http-request-functions";
import { useHttp } from "hooks/use-http";

function LatestNews() {
  const classes = useStyles();

  const { isLoading, error, sendRequest, data: articles } = useHttp(getNewsArticles);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Card>
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
          {isLoading && <Spinner />}
          {error && <div>Could not load resources.</div>}
          {articles &&
            articles.map((item) => {
              const { url, urlToImage, author, title, publishedAt } = item;
              return (
                <NewsItem
                  key={url}
                  image={urlToImage}
                  title={author}
                  textPrimary={title}
                  textSecondary={`Published at: ${publishedAt.slice(0, 10)}`}
                  link={url}
                />
              );
            })}
        </Grid>
      </Grid>
    </Card>
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
