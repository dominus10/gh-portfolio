export default function AboutReact() {
  return (
    <div className="p-4">
      <p className="text-2xl">About me</p>
      <hr />
      <p className="leading-8 text-lg">
        I primarily use{" "}
        <a
          href="https://www.typescriptlang.org/"
          className="chip"
          title="A superset of Javascript."
        >
          Typescript
        </a>{" "}
        to develop both frontend and backend, with expertise on{" "}
        <a
          href="https://react.dev/"
          className="chip"
          title="One of the most well known frontend library."
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://expressjs.com/"
          className="chip"
          title="An unopinionated web framework for NodeJS."
        >
          Express.js
        </a>
        . And to complement the applications, I relies on{" "}
        <a
          href="https://www.prisma.io/"
          className="chip"
          title="Typescript integrated ORM."
        >
          Prisma
        </a>{" "}
        to help me streamline the database querying process, with either{" "}
        <a
          href="https://www.postgresql.org/"
          className="chip"
          title="Relational database."
        >
          PostgreSQL
        </a>{" "}
        or{" "}
        <a
          href="https://www.mongodb.com/"
          className="chip"
          title="Non-SQL database."
        >
          MongoDB
        </a>{" "}
        as my top two choices of database.
      </p>
      <br />
      <br />
      <p className="leading-8 text-lg">
        Personally, I have been exploring{" "}
        <a
          href="https://astro.build/"
          className="chip"
          title="Dynamic web framework with multi library capabilities."
        >
          Astro.js
        </a>{" "}
        (which I used to build this site) and{" "}
        <a
          href="https://svelte.dev/"
          className="chip"
          title="One of the upcoming framework in the future."
        >
          Svelte
        </a>
        , as I enjoy learning new technologies. On the other side of
        programming, I have been delving into cross-platform application
        development, particulary utilising{" "}
        <a
          href="https://flutter.dev/"
          className="chip"
          title="Google's UI Toolkit for Dart"
        >
          Flutter
        </a>{" "}
        and{" "}
        <a
          href="https://dart.dev/"
          className="chip"
          title="Language for cross-platform app."
        >
          Dart
        </a>
        , and recently picking up Golang as the latest addition to my skill set.
      </p>
      <br />
      <p className="leading-8 text-lg">
        Beyond development, I have a solid grasp of{" "}
        <a
          href="https://www.docker.com/"
          className="chip"
          title="Container tool."
        >
          Docker
        </a>{" "}
        from years of hands-on experience, a growing proficiency in{" "}
        <a className="chip" title="UNIX script">
          shell
        </a>{" "}
        scripting, and a foundational understanding of{" "}
        <a
          href="https://kubernetes.io/"
          className="chip"
          title="Container orchestration tool."
        >
          Kubernetes
        </a>
        . My workflow is built around{" "}
        <a
          href="https://git-scm.com/"
          className="chip"
          title="Distributed version control system."
        >
          Git
        </a>{" "}
        for version control and automation, ensuring efficient and scalable
        solutions.
      </p>
    </div>
  );
}
