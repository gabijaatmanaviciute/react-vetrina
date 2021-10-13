import { useState, useEffect } from "react";
import { ReactComponent as FileTextIcon } from "assets/icons/file-text-icon.svg";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardTitle from "components/reusable_components/panel_card_parts/CardTitle";
import CardLink from "components/reusable_components/panel_card_parts/CardLink";
import NewsItem from "components/reusable_components/panel_card_parts/NewsItem";
import { ReactComponent as ExternalLinkIcon } from "assets/icons/external-link-icon-blue.svg";

function LatestNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=culture&api-key=uGI6UtJLIshBCwiGrLX24BA7gMdCg75S
          `
        );
        const articles = await response.json();
        console.log(articles);
        setArticles(articles.response.docs);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

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
        {isLoading ? <div>Loading...</div> : articles.map((article) => {
          const {
            web_url,
            _id,
            headline: { main },
            section_name,
            word_count,
          } = article;
          return (
            <NewsItem
              key={_id}
              image=""
              title={section_name}
              textPrimary={main}
              textSecondary={`Word count: ${word_count}`}
              link={web_url}
            />
          );
        })}
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
