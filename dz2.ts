type NotEmptyString = string & { readonly NotEmptyString: unique symbol };

type NotBadWords = string & { readonly NotBadWords: unique symbol };

type emailType = NotEmptyString &
  NotBadWords & {
    readonly emailType: unique symbol;
  };

const emailBuilder = {
  ofString: (value: string): emailType => {
    return value as emailType;
  },
};

const noEmptyBuilder = {
  ofString: (value: string): NotEmptyString => {
    return value as NotEmptyString;
  },
};

const noBadWordsBuilder = {
  ofString: (value: string): NotBadWords => {
    return value as NotBadWords;
  },
};

const email: emailType = emailBuilder.ofString(
  noEmptyBuilder.ofString(noBadWordsBuilder.ofString("test@mail.ru"))
);

// #############

type RawFilm = {
  name: string;
  description: string;
  image: string | null;
  video: null | null;
  type: "Draft" | "Ready" | "Uploaded";
};

// #############

type Draft = {
  name: string;
  description: string;
  image: string | null;
  video: null;
  type: "Draft";
};

type Ready = {
  name: string;
  description: string;
  image: string;
  video: string;
  type: "Ready";
};

type Uploaded = {
  name: string;
  description: string;
  image: string;
  video: string;
  type: "Uploaded";
};

type Film = Draft | Ready | Uploaded;

// #############

const getFilm = (film: Film) => {
  switch (film.type) {
    case "Ready":
    // get ready film info
    case "Draft":
    // get draft film info
  }
};

// ############# update

const updateFilm = (film: Film | RawFilm) => {
  if (film.type === "Uploaded") {
    throw new Error("The film was upload");
  }
  // updating ...
};
