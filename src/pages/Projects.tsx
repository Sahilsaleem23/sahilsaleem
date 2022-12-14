import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { trpc } from "../utils/trpc";

const Projects: NextPage = (props) => {
  const { data, isFetching } = trpc.useQuery(["admin.getProjects"]);

  return (
    <React.Fragment>
      <Head>
        <title>Sahil Saleem - Projects</title>
        <meta
          name="description"
          content="Sahil Saleem a video editors projects"
        />
      </Head>
      <main
        id="#projects"
        className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-28 px-6"
      >
        <h1 className="text-center text-2xl font-semibold">Projects</h1>

        {isFetching ? (
          <h1 className="mt-10">loading...</h1>
        ) : (
          <div className="mt-14 grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
            {data?.projects.map((project) => (
              <div
                key={project.id}
                className="aspect-video w-full overflow-hidden rounded-lg"
              >
                <iframe className="h-full w-full" src={project.link}></iframe>
              </div>
            ))}
          </div>
        )}
      </main>
    </React.Fragment>
  );
};

export default Projects;
