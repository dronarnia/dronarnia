import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-size-1">NOT FOUND</h1>
          <div className="content is-size-5">You just hit a route that doesn&#39;t exist... the sadness.</div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
